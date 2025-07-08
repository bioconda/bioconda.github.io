:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpp'
.. highlight: bash

fwdpp
=====

.. conda:recipe:: fwdpp
   :replaces_section_title:
   :noindex:

   A C\+\+ template library for forward\-time population genetic simulation.

   :homepage: https://www.github.com/molpopgen/fwdpp
   :documentation: https://fwdpp.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`fwdpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpp/meta.yaml>`_
   :links: doi: :doi:`10.1534/genetics.114.165019`

   


.. conda:package:: fwdpp

   |downloads_fwdpp| |docker_fwdpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.2-0</code>,  <code>0.6.1-0</code>,  <code>0.5.7-3</code>,  <code>0.5.7-2</code>,  <code>0.5.7-1</code>,  <code>0.5.7-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  </span></summary>
      

      ``0.9.2-0``,  ``0.6.1-0``,  ``0.5.7-3``,  ``0.5.7-2``,  ``0.5.7-1``,  ``0.5.7-0``,  ``0.5.5-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.3-1``,  ``0.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openblas: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fwdpp

   and update with::

      mamba update fwdpp

  To create a new environment, run::

      mamba create --name myenvname fwdpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fwdpp:<tag>

   (see `fwdpp/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpp| image:: https://img.shields.io/conda/dn/bioconda/fwdpp.svg?style=flat
   :target: https://anaconda.org/bioconda/fwdpp
   :alt:   (downloads)
.. |docker_fwdpp| image:: https://quay.io/repository/biocontainers/fwdpp/status
   :target: https://quay.io/repository/biocontainers/fwdpp
.. _`fwdpp/tags`: https://quay.io/repository/biocontainers/fwdpp?tab=tags


.. raw:: html

    <script>
        var package = "fwdpp";
        var versions = ["0.9.2","0.6.1","0.5.7","0.5.7","0.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpp/README.html
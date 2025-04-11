:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epa-ng'
.. highlight: bash

epa-ng
======

.. conda:recipe:: epa-ng
   :replaces_section_title:
   :noindex:

   Massively parallel phylogenetic placement of genetic sequences

   :homepage: https://github.com/Pbdas/epa-ng
   :license: GNU Affero General Public License v3.0
   :recipe: /`epa-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syy054`

   


.. conda:package:: epa-ng

   |downloads_epa-ng| |docker_epa-ng|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.8-6</code>,  <code>0.3.8-5</code>,  <code>0.3.8-4</code>,  <code>0.3.8-3</code>,  <code>0.3.8-2</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  </span></summary>
      

      ``0.3.8-6``,  ``0.3.8-5``,  ``0.3.8-4``,  ``0.3.8-3``,  ``0.3.8-2``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install epa-ng

   and update with::

      mamba update epa-ng

  To create a new environment, run::

      mamba create --name myenvname epa-ng

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epa-ng:<tag>

   (see `epa-ng/tags`_ for valid values for ``<tag>``)


.. |downloads_epa-ng| image:: https://img.shields.io/conda/dn/bioconda/epa-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/epa-ng
   :alt:   (downloads)
.. |docker_epa-ng| image:: https://quay.io/repository/biocontainers/epa-ng/status
   :target: https://quay.io/repository/biocontainers/epa-ng
.. _`epa-ng/tags`: https://quay.io/repository/biocontainers/epa-ng?tab=tags


.. raw:: html

    <script>
        var package = "epa-ng";
        var versions = ["0.3.8","0.3.8","0.3.8","0.3.8","0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epa-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epa-ng/README.html
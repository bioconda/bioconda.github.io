:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldcomp'
.. highlight: bash

foldcomp
========

.. conda:recipe:: foldcomp
   :replaces_section_title:
   :noindex:

   Foldcomp\: a library and format for compressing and indexing large protein structure sets

   :homepage: https://github.com/steineggerlab/foldcomp
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`foldcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldcomp/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad153`

   


.. conda:package:: foldcomp

   |downloads_foldcomp| |docker_foldcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.0-0</code>,  <code>0.0.7-2</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.1.0-0``,  ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install foldcomp

   and update with::

      mamba update foldcomp

  To create a new environment, run::

      mamba create --name myenvname foldcomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/foldcomp:<tag>

   (see `foldcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_foldcomp| image:: https://img.shields.io/conda/dn/bioconda/foldcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/foldcomp
   :alt:   (downloads)
.. |docker_foldcomp| image:: https://quay.io/repository/biocontainers/foldcomp/status
   :target: https://quay.io/repository/biocontainers/foldcomp
.. _`foldcomp/tags`: https://quay.io/repository/biocontainers/foldcomp?tab=tags


.. raw:: html

    <script>
        var package = "foldcomp";
        var versions = ["0.1.0","0.0.7","0.0.7","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldcomp/README.html
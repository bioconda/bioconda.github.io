:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maftools'
.. highlight: bash

bioconductor-maftools
=====================

.. conda:recipe:: bioconductor-maftools
   :replaces_section_title:
   :noindex:

   Summarize\, Analyze and Visualize MAF Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/maftools.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maftools/meta.yaml>`_
   :links: biotools: :biotools:`maftools`, usegalaxy-eu: :usegalaxy-eu:`maftools`

   Analyze and visualize Mutation Annotation Format \(MAF\) files from large scale sequencing studies. This package provides various functions to perform most commonly used analyses in cancer genomics and to create feature rich customizable visualzations with minimal effort.


.. conda:package:: bioconductor-maftools

   |downloads_bioconductor-maftools| |docker_bioconductor-maftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.10.05-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.22.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.10.05-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.05-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.10-0``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.15-0``,  ``1.4.27-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-dnacopy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
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

      mamba install bioconductor-maftools

   and update with::

      mamba update bioconductor-maftools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-maftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maftools:<tag>

   (see `bioconductor-maftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maftools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maftools
   :alt:   (downloads)
.. |docker_bioconductor-maftools| image:: https://quay.io/repository/biocontainers/bioconductor-maftools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maftools
.. _`bioconductor-maftools/tags`: https://quay.io/repository/biocontainers/bioconductor-maftools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maftools";
        var versions = ["2.22.0","2.18.0","2.18.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maftools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sartools'
.. highlight: bash

r-sartools
==========

.. conda:recipe:: r-sartools
   :replaces_section_title:
   :noindex:

   Statistical Analysis of RNA\-Seq data

   :homepage: https://github.com/PF2-pasteur-fr/SARTools
   :license: GPL-2
   :recipe: /`r-sartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sartools/meta.yaml>`_
   :links: biotools: :biotools:`sartools`

   SARTools provides R tools and an environment for the statistical 
   analysis of RNA\-Seq projects load and clean data\, produce figures\, 
   perform statistical analysis\/testing with DESeq2 or edgeR\, export 
   results and create final report.



.. conda:package:: r-sartools

   |downloads_r-sartools| |docker_r-sartools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-2</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-3</code>,  <code>1.7.3-2</code>,  <code>1.7.3-1</code>,  <code>1.7.3-0</code>,  </span></summary>
      

      ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.4-0``,  ``1.7.3-3``,  ``1.7.3-2``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.6.9-0``,  ``1.6.8-0``,  ``1.6.6-3``,  ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.4.1-0``,  ``1.3.2-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.32.0``
   :depends bioconductor-edger: ``>=3.34.0``
   :depends bioconductor-genefilter: 
   :depends bioconductor-summarizedexperiment: ``>=1.6``
   :depends r-ashr: ``>=2.2-54``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-blob: 
   :depends r-ggally: 
   :depends r-ggdendro: 
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-optparse: 
   :depends r-rmarkdown: ``>=1.4``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-sartools

   and update with::

      mamba update r-sartools

  To create a new environment, run::

      mamba create --name myenvname r-sartools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-sartools:<tag>

   (see `r-sartools/tags`_ for valid values for ``<tag>``)


.. |downloads_r-sartools| image:: https://img.shields.io/conda/dn/bioconda/r-sartools.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sartools
   :alt:   (downloads)
.. |docker_r-sartools| image:: https://quay.io/repository/biocontainers/r-sartools/status
   :target: https://quay.io/repository/biocontainers/r-sartools
.. _`r-sartools/tags`: https://quay.io/repository/biocontainers/r-sartools?tab=tags


.. raw:: html

    <script>
        var package = "r-sartools";
        var versions = ["1.8.1","1.8.1","1.8.1","1.8.0","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sartools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miqc'
.. highlight: bash

bioconductor-miqc
=================

.. conda:recipe:: bioconductor-miqc
   :replaces_section_title:
   :noindex:

   Flexible\, probabilistic metrics for quality control of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/miQC.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-miqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miqc/meta.yaml>`_

   Single\-cell RNA\-sequencing \(scRNA\-seq\) has made it possible to profile gene expression in tissues at high resolution.  An important preprocessing step prior to performing downstream analyses is to identify and remove cells with poor or degraded sample quality using quality control \(QC\) metrics.  Two widely used QC metrics to identify a ‘low\-quality’ cell are \(i\) if the cell includes a high proportion of reads that map to mitochondrial DNA encoded genes \(mtDNA\) and \(ii\) if a small number of genes are detected. miQC is data\-driven QC metric that jointly models both the proportion of reads mapping to mtDNA and the number of detected genes with mixture models in a probabilistic framework to predict the low\-quality cells in a given dataset.


.. conda:package:: bioconductor-miqc

   |downloads_bioconductor-miqc| |docker_bioconductor-miqc|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-flexmix: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-miqc

   and update with::

      mamba update bioconductor-miqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-miqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-miqc:<tag>

   (see `bioconductor-miqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-miqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miqc
   :alt:   (downloads)
.. |docker_bioconductor-miqc| image:: https://quay.io/repository/biocontainers/bioconductor-miqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miqc
.. _`bioconductor-miqc/tags`: https://quay.io/repository/biocontainers/bioconductor-miqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miqc";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miqc/README.html
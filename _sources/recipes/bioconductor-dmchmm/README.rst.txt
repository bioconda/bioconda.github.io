:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmchmm'
.. highlight: bash

bioconductor-dmchmm
===================

.. conda:recipe:: bioconductor-dmchmm
   :replaces_section_title:
   :noindex:

   Differentially Methylated CpG using Hidden Markov Model

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DMCHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-dmchmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmchmm/meta.yaml>`_

   A pipeline for identifying differentially methylated CpG sites using Hidden Markov Model in bisulfite sequencing data. DNA methylation studies have enabled researchers to understand methylation patterns and their regulatory roles in biological processes and disease. However\, only a limited number of statistical approaches have been developed to provide formal quantitative analysis. Specifically\, a few available methods do identify differentially methylated CpG \(DMC\) sites or regions \(DMR\)\, but they suffer from limitations that arise mostly due to challenges inherent in bisulfite sequencing data. These challenges include\: \(1\) that read\-depths vary considerably among genomic positions and are often low\; \(2\) both methylation and autocorrelation patterns change as regions change\; and \(3\) CpG sites are distributed unevenly. Furthermore\, there are several methodological limitations\: almost none of these tools is capable of comparing multiple groups and\/or working with missing values\, and only a few allow continuous or multiple covariates. The last of these is of great interest among researchers\, as the goal is often to find which regions of the genome are associated with several exposures and traits. To tackle these issues\, we have developed an efficient DMC identification method based on Hidden Markov Models \(HMMs\) called “DMCHMM” which is a three\-step approach \(model selection\, prediction\, testing\) aiming to address the aforementioned drawbacks.


.. conda:package:: bioconductor-dmchmm

   |downloads_bioconductor-dmchmm| |docker_bioconductor-dmchmm|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-calibrate: 
   :depends r-fdrtool: 
   :depends r-multcomp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dmchmm

   and update with::

      conda update bioconductor-dmchmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dmchmm:<tag>

   (see `bioconductor-dmchmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dmchmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmchmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmchmm
   :alt:   (downloads)
.. |docker_bioconductor-dmchmm| image:: https://quay.io/repository/biocontainers/bioconductor-dmchmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmchmm
.. _`bioconductor-dmchmm/tags`: https://quay.io/repository/biocontainers/bioconductor-dmchmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmchmm";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmchmm/README.html
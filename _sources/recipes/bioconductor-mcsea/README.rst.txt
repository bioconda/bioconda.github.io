:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcsea'
.. highlight: bash

bioconductor-mcsea
==================

.. conda:recipe:: bioconductor-mcsea
   :replaces_section_title:
   :noindex:

   Methylated CpGs Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mCSEA.html
   :license: GPL-2
   :recipe: /`bioconductor-mcsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsea/meta.yaml>`_

   Identification of diferentially methylated regions \(DMRs\) in predefined regions \(promoters\, CpG islands...\) from the human genome using Illumina\'s 450K or EPIC microarray data. Provides methods to rank CpG probes based on linear models and includes plotting functions.


.. conda:package:: bioconductor-mcsea

   |downloads_bioconductor-mcsea| |docker_bioconductor-mcsea|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-2``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gviz: ``>=1.38.0,<1.39.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-mcseadata: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mcsea

   and update with::

      conda update bioconductor-mcsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcsea:<tag>

   (see `bioconductor-mcsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcsea
   :alt:   (downloads)
.. |docker_bioconductor-mcsea| image:: https://quay.io/repository/biocontainers/bioconductor-mcsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcsea
.. _`bioconductor-mcsea/tags`: https://quay.io/repository/biocontainers/bioconductor-mcsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mcsea";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcsea/README.html
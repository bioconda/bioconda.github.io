:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regenrich'
.. highlight: bash

bioconductor-regenrich
======================

.. conda:recipe:: bioconductor-regenrich
   :replaces_section_title:
   :noindex:

   Gene regulator enrichment analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RegEnrich.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-regenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regenrich/meta.yaml>`_

   This package is a pipeline to identify the key gene regulators in a biological process\, for example in cell differentiation and in cell development after stimulation. There are four major steps in this pipeline\: \(1\) differential expression analysis\; \(2\) regulator\-target network inference\; \(3\) enrichment analysis\; and \(4\) regulators scoring and ranking.


.. conda:package:: bioconductor-regenrich

   |downloads_bioconductor-regenrich| |docker_bioconductor-regenrich|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocset: ``>=1.12.0,<1.13.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-dose: ``>=3.24.0,<3.25.0``
   :depends bioconductor-fgsea: ``>=1.24.0,<1.25.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-magrittr: 
   :depends r-randomforest: 
   :depends r-reshape2: 
   :depends r-tibble: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regenrich

   and update with::

      conda update bioconductor-regenrich

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regenrich:<tag>

   (see `bioconductor-regenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regenrich
   :alt:   (downloads)
.. |docker_bioconductor-regenrich| image:: https://quay.io/repository/biocontainers/bioconductor-regenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regenrich
.. _`bioconductor-regenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-regenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regenrich";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regenrich/README.html
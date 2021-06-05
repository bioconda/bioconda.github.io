:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lineagepulse'
.. highlight: bash

bioconductor-lineagepulse
=========================

.. conda:recipe:: bioconductor-lineagepulse
   :replaces_section_title:
   :noindex:

   Differential expression analysis and model fitting for single\-cell RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/LineagePulse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lineagepulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse/meta.yaml>`_

   LineagePulse is a differential expression and expression model fitting package tailored to single\-cell RNA\-seq data \(scRNA\-seq\). LineagePulse accounts for batch effects\, drop\-out and variable sequencing depth. One can use LineagePulse to perform longitudinal differential expression analysis across pseudotime as a continuous coordinate or between discrete groups of cells \(e.g. pre\-defined clusters or experimental conditions\). Expression model fits can be directly extracted from LineagePulse.


.. conda:package:: bioconductor-lineagepulse

   |downloads_bioconductor-lineagepulse| |docker_bioconductor-lineagepulse|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-complexheatmap: ``>=2.8.0,<2.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lineagepulse

   and update with::

      conda update bioconductor-lineagepulse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lineagepulse:<tag>

   (see `bioconductor-lineagepulse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lineagepulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagepulse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lineagepulse
   :alt:   (downloads)
.. |docker_bioconductor-lineagepulse| image:: https://quay.io/repository/biocontainers/bioconductor-lineagepulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagepulse
.. _`bioconductor-lineagepulse/tags`: https://quay.io/repository/biocontainers/bioconductor-lineagepulse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html
.. title:: Package Recipe 'bioconductor-lineagepulse'
.. highlight: bash


bioconductor-lineagepulse
=========================

.. conda:recipe:: bioconductor-lineagepulse
   :replaces_section_title:

   LineagePulse is a differential expression and expression model fitting package tailored to single\-cell RNA\-seq data \(scRNA\-seq\). LineagePulse accounts for batch effects\, drop\-out and variable sequencing depth. One can use LineagePulse to perform longitudinal differential expression analysis across pseudotime as a continuous coordinate or between discrete groups of cells \(e.g. pre\-defined clusters or experimental conditions\). Expression model fits can be directly extracted from LineagePulse.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LineagePulse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lineagepulse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lineagepulse/meta.yaml>`_

   


.. conda:package:: bioconductor-lineagepulse

   |downloads_bioconductor-lineagepulse| |docker_bioconductor-lineagepulse|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-knitr`  :conda:package:`r-matrix`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-lineagepulse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lineagepulse

   and update with::

      conda update bioconductor-lineagepulse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lineagepulse


.. |required_by_bioconductor-lineagepulse| conda:required_by:: bioconductor-lineagepulse
.. |downloads_bioconductor-lineagepulse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lineagepulse.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lineagepulse| image:: https://quay.io/repository/biocontainers/bioconductor-lineagepulse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lineagepulse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lineagepulse/README.html


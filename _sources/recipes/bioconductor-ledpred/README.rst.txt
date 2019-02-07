.. title:: Package Recipe 'bioconductor-ledpred'
.. highlight: bash


bioconductor-ledpred
====================

.. conda:recipe:: bioconductor-ledpred
   :replaces_section_title:

   This package aims at creating a predictive model of regulatory sequences used to score unknown sequences based on the content of DNA motifs\, next\-generation sequencing \(NGS\) peaks and signals and other numerical scores of the sequences using supervised classification. The package contains a workflow based on the support vector machine \(SVM\) algorithm that maps features to sequences\, optimize SVM parameters and feature number and creates a model that can be stored and used to score the regulatory potential of unknown sequences.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LedPred.html
   :license: MIT | file LICENSE
   :recipe: /`bioconductor-ledpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ledpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ledpred/meta.yaml>`_

   


.. conda:package:: bioconductor-ledpred

   |downloads_bioconductor-ledpred| |docker_bioconductor-ledpred|

   :versions: 1.16.0

   :depends: :conda:package:`r-akima`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071` >=1.6 :conda:package:`r-ggplot2`  :conda:package:`r-irr`  :conda:package:`r-jsonlite`  :conda:package:`r-plot3d`  :conda:package:`r-plyr`  :conda:package:`r-rcurl`  :conda:package:`r-rocr`  :conda:package:`r-testthat`  

   :required~by: |required_by_bioconductor-ledpred|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ledpred

   and update with::

      conda update bioconductor-ledpred

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ledpred


.. |required_by_bioconductor-ledpred| conda:required_by:: bioconductor-ledpred
.. |downloads_bioconductor-ledpred| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ledpred.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ledpred| image:: https://quay.io/repository/biocontainers/bioconductor-ledpred/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ledpred







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ledpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ledpred/README.html


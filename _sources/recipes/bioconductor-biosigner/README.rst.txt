:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biosigner'
.. highlight: bash

bioconductor-biosigner
======================

.. conda:recipe:: bioconductor-biosigner
   :replaces_section_title:

   Feature selection is critical in omics data analysis to extract restricted and meaningful molecular signatures from complex and high\-dimension data\, and to build robust classifiers. This package implements a new method to assess the relevance of the variables for the prediction performances of the classifier. The approach can be run in parallel with the PLS\-DA\, Random Forest\, and SVM binary classifiers. The signatures and the corresponding \'restricted\' models are returned\, enabling future predictions on new datasets. A Galaxy implementation of the package is available within the Workflow4metabolomics.org online infrastructure for computational metabolomics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biosigner.html
   :license: CeCILL
   :recipe: /`bioconductor-biosigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner/meta.yaml>`_
   :links: biotools: :biotools:`biosigner`, doi: :doi:`10.3389/fmolb.2016.00026`

   


.. conda:package:: bioconductor-biosigner

   |downloads_bioconductor-biosigner| |docker_bioconductor-biosigner|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.1.10-0, 1.0.6-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-ropls: >=1.14.0,<1.15.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biosigner

   and update with::

      conda update bioconductor-biosigner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biosigner:<tag>

   (see `bioconductor-biosigner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biosigner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biosigner.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biosigner| image:: https://quay.io/repository/biocontainers/bioconductor-biosigner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biosigner
.. _`bioconductor-biosigner/tags`: https://quay.io/repository/biocontainers/bioconductor-biosigner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biosigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biosigner/README.html
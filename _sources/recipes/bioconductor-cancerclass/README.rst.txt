.. title:: Package Recipe 'bioconductor-cancerclass'
.. highlight: bash


bioconductor-cancerclass
========================

.. conda:recipe:: bioconductor-cancerclass
   :replaces_section_title:

   The classification protocol starts with a feature selection step and continues with nearest\-centroid classification. The accurarcy of the predictor can be evaluated using training and test set validation\, leave\-one\-out cross\-validation or in a multiple random validation protocol. Methods for calculation and visualization of continuous prediction scores allow to balance sensitivity and specificity and define a cutoff value according to clinical requirements.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cancerclass.html
   :license: GPL 3
   :recipe: /`bioconductor-cancerclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerclass/meta.yaml>`_

   


.. conda:package:: bioconductor-cancerclass

   |downloads_bioconductor-cancerclass| |docker_bioconductor-cancerclass|

   :versions: 1.26.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-binom`  

   :required~by: |required_by_bioconductor-cancerclass|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerclass

   and update with::

      conda update bioconductor-cancerclass

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cancerclass


.. |required_by_bioconductor-cancerclass| conda:required_by:: bioconductor-cancerclass
.. |downloads_bioconductor-cancerclass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerclass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cancerclass| image:: https://quay.io/repository/biocontainers/bioconductor-cancerclass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerclass







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerclass/README.html


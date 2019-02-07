.. title:: Package Recipe 'bioconductor-sampleclassifier'
.. highlight: bash


bioconductor-sampleclassifier
=============================

.. conda:recipe:: bioconductor-sampleclassifier
   :replaces_section_title:

   The package is designed to classify gene expression profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sampleClassifier.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifier/meta.yaml>`_

   


.. conda:package:: bioconductor-sampleclassifier

   |downloads_bioconductor-sampleclassifier| |docker_bioconductor-sampleclassifier|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-mgfm` >=1.16.0,<1.17.0 :conda:package:`bioconductor-mgfr` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-ggplot2`  

   :required~by: |required_by_bioconductor-sampleclassifier|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sampleclassifier

   and update with::

      conda update bioconductor-sampleclassifier

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sampleclassifier


.. |required_by_bioconductor-sampleclassifier| conda:required_by:: bioconductor-sampleclassifier
.. |downloads_bioconductor-sampleclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifier.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifier







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifier/README.html


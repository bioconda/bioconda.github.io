.. title:: Package Recipe 'bioconductor-phosphonormalizer'
.. highlight: bash


bioconductor-phosphonormalizer
==============================

.. conda:recipe:: bioconductor-phosphonormalizer
   :replaces_section_title:

   It uses the overlap between enriched and non\-enriched datasets to compensate for the bias introduced in global phosphorylation after applying median normalization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/phosphonormalizer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-phosphonormalizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosphonormalizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosphonormalizer/meta.yaml>`_

   


.. conda:package:: bioconductor-phosphonormalizer

   |downloads_bioconductor-phosphonormalizer| |docker_bioconductor-phosphonormalizer|

   :versions: 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-phosphonormalizer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phosphonormalizer

   and update with::

      conda update bioconductor-phosphonormalizer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-phosphonormalizer


.. |required_by_bioconductor-phosphonormalizer| conda:required_by:: bioconductor-phosphonormalizer
.. |downloads_bioconductor-phosphonormalizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phosphonormalizer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-phosphonormalizer| image:: https://quay.io/repository/biocontainers/bioconductor-phosphonormalizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phosphonormalizer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phosphonormalizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phosphonormalizer/README.html


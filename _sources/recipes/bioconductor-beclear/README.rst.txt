.. title:: Package Recipe 'bioconductor-beclear'
.. highlight: bash


bioconductor-beclear
====================

.. conda:recipe:: bioconductor-beclear
   :replaces_section_title:

   Provides some functions to detect and correct for batch effects in DNA methylation data. The core function is based on latent factor models and can also be used to predict missing values in any other matrix containing real numbers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BEclear.html
   :license: GPL-2
   :recipe: /`bioconductor-beclear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beclear/meta.yaml>`_
   :links: biotools: :biotools:`beclear`, doi: :doi:`10.1371/journal.pone.0159921`

   


.. conda:package:: bioconductor-beclear

   |downloads_bioconductor-beclear| |docker_bioconductor-beclear|

   :versions: 1.14.0, 1.12.1, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.11.8 :conda:package:`r-futile.logger`  :conda:package:`r-matrix`  :conda:package:`r-rdpack`  

   :required~by: |required_by_bioconductor-beclear|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beclear

   and update with::

      conda update bioconductor-beclear

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-beclear


.. |required_by_bioconductor-beclear| conda:required_by:: bioconductor-beclear
.. |downloads_bioconductor-beclear| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beclear.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beclear| image:: https://quay.io/repository/biocontainers/bioconductor-beclear/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beclear







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beclear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beclear/README.html


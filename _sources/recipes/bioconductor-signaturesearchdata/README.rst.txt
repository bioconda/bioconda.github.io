:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signaturesearchdata'
.. highlight: bash

bioconductor-signaturesearchdata
================================

.. conda:recipe:: bioconductor-signaturesearchdata
   :replaces_section_title:

   Datasets for signatureSearch package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/signatureSearchData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-signaturesearchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signaturesearchdata/meta.yaml>`_

   CMAP\/LINCS hdf5 databases and other annotations used for signatureSearch software package.


.. conda:package:: bioconductor-signaturesearchdata

   |downloads_bioconductor-signaturesearchdata| |docker_bioconductor-signaturesearchdata|

   :versions: 1.2.0-0, 0.99.14-1
   
   :depends bioconductor-affy: >=1.66.0,<1.67.0
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-experimenthub: >=1.14.0,<1.15.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-rhdf5: >=2.32.0,<2.33.0
   :depends bioconductor-signaturesearch: >=1.2.0,<1.3.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signaturesearchdata

   and update with::

      conda update bioconductor-signaturesearchdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signaturesearchdata:<tag>

   (see `bioconductor-signaturesearchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signaturesearchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signaturesearchdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signaturesearchdata
   :alt:   (downloads)
.. |docker_bioconductor-signaturesearchdata| image:: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata
.. _`bioconductor-signaturesearchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-signaturesearchdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signaturesearchdata/README.html
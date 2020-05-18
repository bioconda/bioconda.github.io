:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95ecdf'
.. highlight: bash

bioconductor-hgu95ecdf
======================

.. conda:recipe:: bioconductor-hgu95ecdf
   :replaces_section_title:

   hgu95ecdf

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/hgu95ecdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95ecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ecdf/meta.yaml>`_

   A package containing an environment representing the HG U95E.CDF file.


.. conda:package:: bioconductor-hgu95ecdf

   |downloads_bioconductor-hgu95ecdf| |docker_bioconductor-hgu95ecdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95ecdf

   and update with::

      conda update bioconductor-hgu95ecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95ecdf:<tag>

   (see `bioconductor-hgu95ecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95ecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95ecdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95ecdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95ecdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95ecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95ecdf
.. _`bioconductor-hgu95ecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95ecdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95ecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95ecdf/README.html
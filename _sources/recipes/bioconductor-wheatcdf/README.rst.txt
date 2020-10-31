:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wheatcdf'
.. highlight: bash

bioconductor-wheatcdf
=====================

.. conda:recipe:: bioconductor-wheatcdf
   :replaces_section_title:
   :noindex:

   wheatcdf

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/wheatcdf.html
   :license: LGPL
   :recipe: /`bioconductor-wheatcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wheatcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wheatcdf/meta.yaml>`_

   A package containing an environment representing the wheat.cdf file.


.. conda:package:: bioconductor-wheatcdf

   |downloads_bioconductor-wheatcdf| |docker_bioconductor-wheatcdf|

   :versions:
      
      

      ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wheatcdf

   and update with::

      conda update bioconductor-wheatcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wheatcdf:<tag>

   (see `bioconductor-wheatcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wheatcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wheatcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wheatcdf
   :alt:   (downloads)
.. |docker_bioconductor-wheatcdf| image:: https://quay.io/repository/biocontainers/bioconductor-wheatcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wheatcdf
.. _`bioconductor-wheatcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-wheatcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wheatcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wheatcdf/README.html
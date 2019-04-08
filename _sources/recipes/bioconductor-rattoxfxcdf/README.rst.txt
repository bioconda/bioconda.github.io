:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rattoxfxcdf'
.. highlight: bash

bioconductor-rattoxfxcdf
========================

.. conda:recipe:: bioconductor-rattoxfxcdf
   :replaces_section_title:

   A package containing an environment representing the RatToxFX.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rattoxfxcdf.html
   :license: LGPL
   :recipe: /`bioconductor-rattoxfxcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattoxfxcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattoxfxcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-rattoxfxcdf

   |downloads_bioconductor-rattoxfxcdf| |docker_bioconductor-rattoxfxcdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rattoxfxcdf

   and update with::

      conda update bioconductor-rattoxfxcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rattoxfxcdf:<tag>

   (see `bioconductor-rattoxfxcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rattoxfxcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rattoxfxcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rattoxfxcdf| image:: https://quay.io/repository/biocontainers/bioconductor-rattoxfxcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rattoxfxcdf
.. _`bioconductor-rattoxfxcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rattoxfxcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rattoxfxcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rattoxfxcdf/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-refplus'
.. highlight: bash

bioconductor-refplus
====================

.. conda:recipe:: bioconductor-refplus
   :replaces_section_title:

   The package contains functions for pre\-processing Affymetrix data using the RMA\+ and the RMA\+\+ methods.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RefPlus.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-refplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-refplus/meta.yaml>`_
   :links: biotools: :biotools:`refplus`, doi: :doi:`10.1093/bioinformatics/btm357`

   


.. conda:package:: bioconductor-refplus

   |downloads_bioconductor-refplus| |docker_bioconductor-refplus|

   :versions: 1.52.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends bioconductor-affyplm: >=1.58.0,<1.59.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-refplus

   and update with::

      conda update bioconductor-refplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-refplus:<tag>

   (see `bioconductor-refplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-refplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-refplus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-refplus| image:: https://quay.io/repository/biocontainers/bioconductor-refplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-refplus
.. _`bioconductor-refplus/tags`: https://quay.io/repository/biocontainers/bioconductor-refplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-refplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-refplus/README.html
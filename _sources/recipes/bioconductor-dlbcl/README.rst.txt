:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dlbcl'
.. highlight: bash

bioconductor-dlbcl
==================

.. conda:recipe:: bioconductor-dlbcl
   :replaces_section_title:
   :noindex:

   Diffuse large B\-cell lymphoma expression data

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/DLBCL.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-dlbcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dlbcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dlbcl/meta.yaml>`_

   This package provides additional expression data on diffuse large B\-cell lymphomas for the BioNet package.


.. conda:package:: bioconductor-dlbcl

   |downloads_bioconductor-dlbcl| |docker_bioconductor-dlbcl|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dlbcl

   and update with::

      conda update bioconductor-dlbcl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dlbcl:<tag>

   (see `bioconductor-dlbcl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dlbcl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dlbcl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dlbcl
   :alt:   (downloads)
.. |docker_bioconductor-dlbcl| image:: https://quay.io/repository/biocontainers/bioconductor-dlbcl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dlbcl
.. _`bioconductor-dlbcl/tags`: https://quay.io/repository/biocontainers/bioconductor-dlbcl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dlbcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dlbcl/README.html
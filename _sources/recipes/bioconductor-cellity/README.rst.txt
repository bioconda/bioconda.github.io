:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellity'
.. highlight: bash

bioconductor-cellity
====================

.. conda:recipe:: bioconductor-cellity
   :replaces_section_title:

   A support vector machine approach to identifying and filtering low quality cells from single\-cell RNA\-seq datasets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cellity.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cellity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity/meta.yaml>`_

   


.. conda:package:: bioconductor-cellity

   |downloads_bioconductor-cellity| |docker_bioconductor-cellity|

   :versions: 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends bioconductor-org.mm.eg.db: >=3.7.0,<3.8.0
   :depends bioconductor-topgo: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-mvoutlier: 
   :depends r-robustbase: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellity

   and update with::

      conda update bioconductor-cellity

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellity:<tag>

   (see `bioconductor-cellity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellity
   :alt:   (downloads)
.. |docker_bioconductor-cellity| image:: https://quay.io/repository/biocontainers/bioconductor-cellity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellity
.. _`bioconductor-cellity/tags`: https://quay.io/repository/biocontainers/bioconductor-cellity?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellity/README.html
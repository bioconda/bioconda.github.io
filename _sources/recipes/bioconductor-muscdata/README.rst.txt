:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscdata'
.. highlight: bash

bioconductor-muscdata
=====================

.. conda:recipe:: bioconductor-muscdata
   :replaces_section_title:
   :noindex:

   Multi\-sample multi\-group scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/muscData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-muscdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscdata/meta.yaml>`_

   Data package containing a collection of multi\-sample multi\-group scRNA\-seq datasets in SingleCellExperiment Bioconductor object format.


.. conda:package:: bioconductor-muscdata

   |downloads_bioconductor-muscdata| |docker_bioconductor-muscdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.10.0,<1.11.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-muscdata

   and update with::

      conda update bioconductor-muscdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-muscdata:<tag>

   (see `bioconductor-muscdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-muscdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscdata
   :alt:   (downloads)
.. |docker_bioconductor-muscdata| image:: https://quay.io/repository/biocontainers/bioconductor-muscdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscdata
.. _`bioconductor-muscdata/tags`: https://quay.io/repository/biocontainers/bioconductor-muscdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscdata/README.html
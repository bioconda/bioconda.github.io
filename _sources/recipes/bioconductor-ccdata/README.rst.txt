:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccdata'
.. highlight: bash

bioconductor-ccdata
===================

.. conda:recipe:: bioconductor-ccdata
   :replaces_section_title:

   This package contains microarray gene expression data generated from the Connectivity Map build 02 and LINCS l1000. The data are used by the ccmap package to find drugs and drug combinations to mimic or reverse a gene expression signature.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ccdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccdata/meta.yaml>`_

   


.. conda:package:: bioconductor-ccdata

   |downloads_bioconductor-ccdata| |docker_bioconductor-ccdata|

   :versions: 1.8.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccdata

   and update with::

      conda update bioconductor-ccdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccdata:<tag>

   (see `bioconductor-ccdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ccdata| image:: https://quay.io/repository/biocontainers/bioconductor-ccdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccdata
.. _`bioconductor-ccdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ccdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccdata/README.html
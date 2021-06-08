:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mammaprintdata'
.. highlight: bash

bioconductor-mammaprintdata
===========================

.. conda:recipe:: bioconductor-mammaprintdata
   :replaces_section_title:
   :noindex:

   RGLists from the Glas and Buyse breast cancer studies

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/mammaPrintData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mammaprintdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mammaprintdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mammaprintdata/meta.yaml>`_

   Gene expression data for the two breast cancer cohorts published by Glas and Buyse in 2006. This cohorts were used to implement and validate the mammaPrint breast cancer test.


.. conda:package:: bioconductor-mammaprintdata

   |downloads_bioconductor-mammaprintdata| |docker_bioconductor-mammaprintdata|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mammaprintdata

   and update with::

      conda update bioconductor-mammaprintdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mammaprintdata:<tag>

   (see `bioconductor-mammaprintdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mammaprintdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mammaprintdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mammaprintdata
   :alt:   (downloads)
.. |docker_bioconductor-mammaprintdata| image:: https://quay.io/repository/biocontainers/bioconductor-mammaprintdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mammaprintdata
.. _`bioconductor-mammaprintdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mammaprintdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mammaprintdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mammaprintdata/README.html
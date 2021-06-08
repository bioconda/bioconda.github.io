:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedbladderdata'
.. highlight: bash

bioconductor-curatedbladderdata
===============================

.. conda:recipe:: bioconductor-curatedbladderdata
   :replaces_section_title:
   :noindex:

   Bladder Cancer Gene Expression Analysis

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/curatedBladderData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedbladderdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbladderdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbladderdata/meta.yaml>`_

   The curatedBladderData package provides relevant functions and data for gene expression analysis in patients with bladder cancer.


.. conda:package:: bioconductor-curatedbladderdata

   |downloads_bioconductor-curatedbladderdata| |docker_bioconductor-curatedbladderdata|

   :versions:
      
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedbladderdata

   and update with::

      conda update bioconductor-curatedbladderdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedbladderdata:<tag>

   (see `bioconductor-curatedbladderdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedbladderdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedbladderdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedbladderdata
   :alt:   (downloads)
.. |docker_bioconductor-curatedbladderdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedbladderdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedbladderdata
.. _`bioconductor-curatedbladderdata/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedbladderdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedbladderdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedbladderdata/README.html
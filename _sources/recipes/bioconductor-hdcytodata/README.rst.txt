:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdcytodata'
.. highlight: bash

bioconductor-hdcytodata
=======================

.. conda:recipe:: bioconductor-hdcytodata
   :replaces_section_title:

   Data package containing a collection of high\-dimensional cytometry benchmark datasets saved in SummarizedExperiment and flowSet Bioconductor object formats\, including row and column metadata describing samples\, cell populations \(clusters\)\, and protein markers.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/HDCytoData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hdcytodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdcytodata/meta.yaml>`_

   


.. conda:package:: bioconductor-hdcytodata

   |downloads_bioconductor-hdcytodata| |docker_bioconductor-hdcytodata|

   :versions: 1.5.14-0, 1.4.0-1, 1.2.1-0
   
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hdcytodata

   and update with::

      conda update bioconductor-hdcytodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdcytodata:<tag>

   (see `bioconductor-hdcytodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdcytodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdcytodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdcytodata
   :alt:   (downloads)
.. |docker_bioconductor-hdcytodata| image:: https://quay.io/repository/biocontainers/bioconductor-hdcytodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdcytodata
.. _`bioconductor-hdcytodata/tags`: https://quay.io/repository/biocontainers/bioconductor-hdcytodata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdcytodata/README.html
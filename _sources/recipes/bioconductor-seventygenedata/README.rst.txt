:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seventygenedata'
.. highlight: bash

bioconductor-seventygenedata
============================

.. conda:recipe:: bioconductor-seventygenedata
   :replaces_section_title:

   Gene expression data for the two breast cancer cohorts published by van\'t Veer and Van de Vijver in 2002

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/seventyGeneData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seventygenedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seventygenedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seventygenedata/meta.yaml>`_

   


.. conda:package:: bioconductor-seventygenedata

   |downloads_bioconductor-seventygenedata| |docker_bioconductor-seventygenedata|

   :versions: 1.20.0-0, 1.18.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seventygenedata

   and update with::

      conda update bioconductor-seventygenedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seventygenedata:<tag>

   (see `bioconductor-seventygenedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seventygenedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seventygenedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seventygenedata
   :alt:   (downloads)
.. |docker_bioconductor-seventygenedata| image:: https://quay.io/repository/biocontainers/bioconductor-seventygenedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seventygenedata
.. _`bioconductor-seventygenedata/tags`: https://quay.io/repository/biocontainers/bioconductor-seventygenedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seventygenedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seventygenedata/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowploidydata'
.. highlight: bash

bioconductor-flowploidydata
===========================

.. conda:recipe:: bioconductor-flowploidydata
   :replaces_section_title:

   A collection of raw flow cytometry data for use in vignettes for the flowPloidy package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/flowPloidyData.html
   :license: GPL-3
   :recipe: /`bioconductor-flowploidydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidydata/meta.yaml>`_

   


.. conda:package:: bioconductor-flowploidydata

   |downloads_bioconductor-flowploidydata| |docker_bioconductor-flowploidydata|

   :versions: 1.10.0-0, 1.8.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowploidydata

   and update with::

      conda update bioconductor-flowploidydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowploidydata:<tag>

   (see `bioconductor-flowploidydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowploidydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowploidydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowploidydata
   :alt:   (downloads)
.. |docker_bioconductor-flowploidydata| image:: https://quay.io/repository/biocontainers/bioconductor-flowploidydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowploidydata
.. _`bioconductor-flowploidydata/tags`: https://quay.io/repository/biocontainers/bioconductor-flowploidydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowploidydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowploidydata/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celarefdata'
.. highlight: bash

bioconductor-celarefdata
========================

.. conda:recipe:: bioconductor-celarefdata
   :replaces_section_title:

   This experiment data contains some processed data used in the celaref package vignette. These are publically available datasets\, that have been processed by celaref package\, and can be manipulated further with it.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/celarefData.html
   :license: GPL-3
   :recipe: /`bioconductor-celarefdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celarefdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celarefdata/meta.yaml>`_

   


.. conda:package:: bioconductor-celarefdata

   |downloads_bioconductor-celarefdata| |docker_bioconductor-celarefdata|

   :versions: 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celarefdata

   and update with::

      conda update bioconductor-celarefdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celarefdata:<tag>

   (see `bioconductor-celarefdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celarefdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celarefdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-celarefdata| image:: https://quay.io/repository/biocontainers/bioconductor-celarefdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celarefdata
.. _`bioconductor-celarefdata/tags`: https://quay.io/repository/biocontainers/bioconductor-celarefdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celarefdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celarefdata/README.html
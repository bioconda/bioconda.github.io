:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetsearch'
.. highlight: bash

bioconductor-targetsearch
=========================

.. conda:recipe:: bioconductor-targetsearch
   :replaces_section_title:

   This packages provides a targeted pre\-processing method for GC\-MS data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/TargetSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch/meta.yaml>`_

   


.. conda:package:: bioconductor-targetsearch

   |downloads_bioconductor-targetsearch| |docker_bioconductor-targetsearch|

   :versions: 1.40.0-0, 1.38.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ncdf4: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetsearch

   and update with::

      conda update bioconductor-targetsearch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetsearch:<tag>

   (see `bioconductor-targetsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetsearch
   :alt:   (downloads)
.. |docker_bioconductor-targetsearch| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearch
.. _`bioconductor-targetsearch/tags`: https://quay.io/repository/biocontainers/bioconductor-targetsearch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html
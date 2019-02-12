:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetsearchdata'
.. highlight: bash

bioconductor-targetsearchdata
=============================

.. conda:recipe:: bioconductor-targetsearchdata
   :replaces_section_title:

   This package provides example GC\-MS data for TargetSearch Package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/TargetSearchData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearchdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearchdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearchdata/meta.yaml>`_

   


.. conda:package:: bioconductor-targetsearchdata

   |downloads_bioconductor-targetsearchdata| |docker_bioconductor-targetsearchdata|

   :versions: 1.20.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetsearchdata

   and update with::

      conda update bioconductor-targetsearchdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-targetsearchdata:<tag>

   (see `bioconductor-targetsearchdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetsearchdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearchdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-targetsearchdata| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata
.. _`bioconductor-targetsearchdata/tags`: https://quay.io/repository/biocontainers/bioconductor-targetsearchdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearchdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearchdata/README.html
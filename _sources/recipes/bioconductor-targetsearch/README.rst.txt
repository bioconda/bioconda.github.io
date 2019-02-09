.. title:: Package Recipe 'bioconductor-targetsearch'
.. highlight: bash


bioconductor-targetsearch
=========================

.. conda:recipe:: bioconductor-targetsearch
   :replaces_section_title:

   This packages provides a targeted pre\-processing method for GC\-MS data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TargetSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch/meta.yaml>`_

   


.. conda:package:: bioconductor-targetsearch

   |downloads_bioconductor-targetsearch| |docker_bioconductor-targetsearch|

   :versions: 1.38.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ncdf4`  

   :required~by: |required_by_bioconductor-targetsearch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetsearch

   and update with::

      conda update bioconductor-targetsearch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-targetsearch


.. |required_by_bioconductor-targetsearch| conda:required_by:: bioconductor-targetsearch
.. |downloads_bioconductor-targetsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearch.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-targetsearch| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html


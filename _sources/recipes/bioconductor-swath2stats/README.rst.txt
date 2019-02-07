.. title:: Package Recipe 'bioconductor-swath2stats'
.. highlight: bash


bioconductor-swath2stats
========================

.. conda:recipe:: bioconductor-swath2stats
   :replaces_section_title:

   This package is intended to transform SWATH data from the OpenSWATH software into a format readable by other statistics packages while performing filtering\, annotation and FDR estimation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SWATH2stats.html
   :license: GPL-3
   :recipe: /`bioconductor-swath2stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swath2stats/meta.yaml>`_
   :links: biotools: :biotools:`swath2stats`

   


.. conda:package:: bioconductor-swath2stats

   |downloads_bioconductor-swath2stats| |docker_bioconductor-swath2stats|

   :versions: 1.12.1, 1.10.2, 1.8.1, 1.6.1

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-swath2stats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-swath2stats

   and update with::

      conda update bioconductor-swath2stats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-swath2stats


.. |required_by_bioconductor-swath2stats| conda:required_by:: bioconductor-swath2stats
.. |downloads_bioconductor-swath2stats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swath2stats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-swath2stats| image:: https://quay.io/repository/biocontainers/bioconductor-swath2stats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swath2stats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swath2stats/README.html


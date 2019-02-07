.. title:: Package Recipe 'bioconductor-ttmap'
.. highlight: bash


bioconductor-ttmap
==================

.. conda:recipe:: bioconductor-ttmap
   :replaces_section_title:

   TTMap is a clustering method that groups together samples with the same deviation in comparison to a control group. It is specially useful when the data is small. It is parameter free.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TTMap.html
   :license: GPL-2
   :recipe: /`bioconductor-ttmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ttmap/meta.yaml>`_

   


.. conda:package:: bioconductor-ttmap

   |downloads_bioconductor-ttmap| |docker_bioconductor-ttmap|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-colorramps`  :conda:package:`r-rgl`  

   :required~by: |required_by_bioconductor-ttmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ttmap

   and update with::

      conda update bioconductor-ttmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ttmap


.. |required_by_bioconductor-ttmap| conda:required_by:: bioconductor-ttmap
.. |downloads_bioconductor-ttmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ttmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ttmap| image:: https://quay.io/repository/biocontainers/bioconductor-ttmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ttmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ttmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ttmap/README.html


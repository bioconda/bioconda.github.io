.. title:: Package Recipe 'bioconductor-cmap'
.. highlight: bash


bioconductor-cmap
=================

.. conda:recipe:: bioconductor-cmap
   :replaces_section_title:

   Annotation data file for cMAP assembled using data from public data repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/cMAP.html
   :license: LGPL
   :recipe: /`bioconductor-cmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap/meta.yaml>`_

   


.. conda:package:: bioconductor-cmap

   |downloads_bioconductor-cmap| |docker_bioconductor-cmap|

   :versions: 1.15.1

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cmap

   and update with::

      conda update bioconductor-cmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cmap


.. |required_by_bioconductor-cmap| conda:required_by:: bioconductor-cmap
.. |downloads_bioconductor-cmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cmap| image:: https://quay.io/repository/biocontainers/bioconductor-cmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmap/README.html


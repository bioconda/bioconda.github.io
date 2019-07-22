:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reder'
.. highlight: bash

bioconductor-reder
==================

.. conda:recipe:: bioconductor-reder
   :replaces_section_title:

   RedeR is an R\-based package combined with a stand\-alone Java application for interactive visualization and manipulation of modular structures\, nested networks and multiple levels of hierarchical associations.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RedeR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-reder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reder/meta.yaml>`_
   :links: biotools: :biotools:`reder`

   


.. conda:package:: bioconductor-reder

   |downloads_bioconductor-reder| |docker_bioconductor-reder|

   :versions: 1.32.0-1, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reder

   and update with::

      conda update bioconductor-reder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reder:<tag>

   (see `bioconductor-reder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reder
   :alt:   (downloads)
.. |docker_bioconductor-reder| image:: https://quay.io/repository/biocontainers/bioconductor-reder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reder
.. _`bioconductor-reder/tags`: https://quay.io/repository/biocontainers/bioconductor-reder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reder/README.html
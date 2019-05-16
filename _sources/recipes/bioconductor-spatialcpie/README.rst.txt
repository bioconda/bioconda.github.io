:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialcpie'
.. highlight: bash

bioconductor-spatialcpie
========================

.. conda:recipe:: bioconductor-spatialcpie
   :replaces_section_title:

   SpatialCPie is an R package designed to facilitate cluster evaluation for spatial transcriptomics data by providing intuitive visualizations that display the relationships between clusters in order to guide the user during cluster identification and other downstream applications. The package is built around a shiny \"gadget\" to allow the exploration of the data with multiple plots in parallel and an interactive UI. The user can easily toggle between different cluster resolutions in order to choose the most appropriate visual cues.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SpatialCPie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spatialcpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialcpie/meta.yaml>`_

   


.. conda:package:: bioconductor-spatialcpie

   |downloads_bioconductor-spatialcpie| |docker_bioconductor-spatialcpie|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialcpie

   and update with::

      conda update bioconductor-spatialcpie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialcpie:<tag>

   (see `bioconductor-spatialcpie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialcpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialcpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialcpie
   :alt:   (downloads)
.. |docker_bioconductor-spatialcpie| image:: https://quay.io/repository/biocontainers/bioconductor-spatialcpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialcpie
.. _`bioconductor-spatialcpie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialcpie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialcpie/README.html
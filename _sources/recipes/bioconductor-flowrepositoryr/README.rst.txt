:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowrepositoryr'
.. highlight: bash

bioconductor-flowrepositoryr
============================

.. conda:recipe:: bioconductor-flowrepositoryr
   :replaces_section_title:

   FlowRepository R Interface

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/FlowRepositoryR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowrepositoryr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowrepositoryr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowrepositoryr/meta.yaml>`_
   :links: biotools: :biotools:`flowrepositoryr`, doi: :doi:`10.1002/cyto.a.22106`

   This package provides an interface to search and download data and annotations from FlowRepository \(flowrepository.org\). It uses the FlowRepository programming interface to communicate with a FlowRepository server.


.. conda:package:: bioconductor-flowrepositoryr

   |downloads_bioconductor-flowrepositoryr| |docker_bioconductor-flowrepositoryr|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.16.0-0, 1.14.1-0, 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowrepositoryr

   and update with::

      conda update bioconductor-flowrepositoryr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowrepositoryr:<tag>

   (see `bioconductor-flowrepositoryr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowrepositoryr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowrepositoryr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowrepositoryr
   :alt:   (downloads)
.. |docker_bioconductor-flowrepositoryr| image:: https://quay.io/repository/biocontainers/bioconductor-flowrepositoryr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowrepositoryr
.. _`bioconductor-flowrepositoryr/tags`: https://quay.io/repository/biocontainers/bioconductor-flowrepositoryr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowrepositoryr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowrepositoryr/README.html
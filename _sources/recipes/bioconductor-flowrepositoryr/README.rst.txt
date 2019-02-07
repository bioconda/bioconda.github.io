.. title:: Package Recipe 'bioconductor-flowrepositoryr'
.. highlight: bash


bioconductor-flowrepositoryr
============================

.. conda:recipe:: bioconductor-flowrepositoryr
   :replaces_section_title:

   This package provides an interface to search and download data and annotations from FlowRepository \(flowrepository.org\). It uses the FlowRepository programming interface to communicate with a FlowRepository server.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/FlowRepositoryR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowrepositoryr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowrepositoryr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowrepositoryr/meta.yaml>`_
   :links: biotools: :biotools:`flowrepositoryr`, doi: :doi:`10.1002/cyto.a.22106`

   


.. conda:package:: bioconductor-flowrepositoryr

   |downloads_bioconductor-flowrepositoryr| |docker_bioconductor-flowrepositoryr|

   :versions: 1.14.1, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-jsonlite`  :conda:package:`r-rcurl`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-flowrepositoryr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowrepositoryr

   and update with::

      conda update bioconductor-flowrepositoryr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowrepositoryr


.. |required_by_bioconductor-flowrepositoryr| conda:required_by:: bioconductor-flowrepositoryr
.. |downloads_bioconductor-flowrepositoryr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowrepositoryr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowrepositoryr| image:: https://quay.io/repository/biocontainers/bioconductor-flowrepositoryr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowrepositoryr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowrepositoryr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowrepositoryr/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomecontentservice4r'
.. highlight: bash

bioconductor-reactomecontentservice4r
=====================================

.. conda:recipe:: bioconductor-reactomecontentservice4r
   :replaces_section_title:
   :noindex:

   Interface for the Reactome Content Service

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ReactomeContentService4R.html
   :license: Apache License (>= 2.0) | file LICENSE
   :recipe: /`bioconductor-reactomecontentservice4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomecontentservice4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomecontentservice4r/meta.yaml>`_

   Reactome is a free\, open\-source\, open access\, curated and peer\-reviewed knowledgebase of bio\-molecular pathways. This package is to interact with the Reactome Content Service API. Pre\-built functions would allow users to retrieve data and images that consist of proteins\, pathways\, and other molecules related to a specific gene or entity in Reactome.


.. conda:package:: bioconductor-reactomecontentservice4r

   |downloads_bioconductor-reactomecontentservice4r| |docker_bioconductor-reactomecontentservice4r|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magick: ``>=2.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomecontentservice4r

   and update with::

      conda update bioconductor-reactomecontentservice4r

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomecontentservice4r:<tag>

   (see `bioconductor-reactomecontentservice4r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomecontentservice4r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomecontentservice4r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomecontentservice4r
   :alt:   (downloads)
.. |docker_bioconductor-reactomecontentservice4r| image:: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r
.. _`bioconductor-reactomecontentservice4r/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomecontentservice4r";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomecontentservice4r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomecontentservice4r/README.html
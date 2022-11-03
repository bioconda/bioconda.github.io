:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegraph4r'
.. highlight: bash

bioconductor-reactomegraph4r
============================

.. conda:recipe:: bioconductor-reactomegraph4r
   :replaces_section_title:
   :noindex:

   Interface for the Reactome Graph Database

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ReactomeGraph4R.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-reactomegraph4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r/meta.yaml>`_

   Pathways\, reactions\, and biological entities in Reactome knowledge are systematically represented as an ordered network. Instances are represented as nodes and relationships between instances as edges\; they are all stored in the Reactome Graph Database. This package serves as an interface to query the interconnected data from a local Neo4j database\, with the aim of minimizing the usage of Neo4j Cypher queries.


.. conda:package:: bioconductor-reactomegraph4r

   |downloads_bioconductor-reactomegraph4r| |docker_bioconductor-reactomegraph4r|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-reactomecontentservice4r: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-getpass: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-neo4r: 
   :depends r-purrr: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomegraph4r

   and update with::

      conda update bioconductor-reactomegraph4r

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomegraph4r:<tag>

   (see `bioconductor-reactomegraph4r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomegraph4r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegraph4r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegraph4r
   :alt:   (downloads)
.. |docker_bioconductor-reactomegraph4r| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r
.. _`bioconductor-reactomegraph4r/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomegraph4r";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegraph4r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegraph4r/README.html
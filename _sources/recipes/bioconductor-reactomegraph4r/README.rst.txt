:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegraph4r'
.. highlight: bash

bioconductor-reactomegraph4r
============================

.. conda:recipe:: bioconductor-reactomegraph4r
   :replaces_section_title:
   :noindex:

   Interface for the Reactome Graph Database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ReactomeGraph4R.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-reactomegraph4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r/meta.yaml>`_

   Pathways\, reactions\, and biological entities in Reactome knowledge are systematically represented as an ordered network. Instances are represented as nodes and relationships between instances as edges\; they are all stored in the Reactome Graph Database. This package serves as an interface to query the interconnected data from a local Neo4j database\, with the aim of minimizing the usage of Neo4j Cypher queries.


.. conda:package:: bioconductor-reactomegraph4r

   |downloads_bioconductor-reactomegraph4r| |docker_bioconductor-reactomegraph4r|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-reactomecontentservice4r: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-reactomegraph4r

   and update with::

      mamba update bioconductor-reactomegraph4r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reactomegraph4r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
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
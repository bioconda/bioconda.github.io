:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synaptome.db'
.. highlight: bash

bioconductor-synaptome.db
=========================

.. conda:recipe:: bioconductor-synaptome.db
   :replaces_section_title:
   :noindex:

   Synamptosome Proteome Database

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/synaptome.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-synaptome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.db/meta.yaml>`_

   The package contains local copy of the Synaptic proteome database. On top of this it provide a set of utility R functions to query and analyse its content. It allows extraction of information for specific genes and building the protein\-protein interaction graph for gene sets\, synaptic compartments\, and brain regions.


.. conda:package:: bioconductor-synaptome.db

   |downloads_bioconductor-synaptome.db| |docker_bioconductor-synaptome.db|

   :versions:
      
      

      ``0.99.8-1``,  ``0.99.8-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-synaptome.data: ``>=0.99.0,<0.100.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-rdpack: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synaptome.db

   and update with::

      conda update bioconductor-synaptome.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synaptome.db:<tag>

   (see `bioconductor-synaptome.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synaptome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synaptome.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synaptome.db
   :alt:   (downloads)
.. |docker_bioconductor-synaptome.db| image:: https://quay.io/repository/biocontainers/bioconductor-synaptome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synaptome.db
.. _`bioconductor-synaptome.db/tags`: https://quay.io/repository/biocontainers/bioconductor-synaptome.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synaptome.db";
        var versions = ["0.99.8","0.99.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synaptome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synaptome.db/README.html
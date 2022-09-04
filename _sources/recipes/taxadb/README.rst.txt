:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxadb'
.. highlight: bash

taxadb
======

.. conda:recipe:: taxadb
   :replaces_section_title:
   :noindex:

   locally query the ncbi taxonomy

   :homepage: https://github.com/HadrienG/taxadb
   :license: MIT / MIT
   :recipe: /`taxadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxadb/meta.yaml>`_

   


.. conda:package:: taxadb

   |downloads_taxadb| |docker_taxadb|

   :versions:
      
      

      ``0.12.1-0``

      

   
   :depends peewee: ``>=3.8.2``
   :depends python: 
   :depends requests: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxadb

   and update with::

      conda update taxadb

   or use the docker container::

      docker pull quay.io/biocontainers/taxadb:<tag>

   (see `taxadb/tags`_ for valid values for ``<tag>``)


.. |downloads_taxadb| image:: https://img.shields.io/conda/dn/bioconda/taxadb.svg?style=flat
   :target: https://anaconda.org/bioconda/taxadb
   :alt:   (downloads)
.. |docker_taxadb| image:: https://quay.io/repository/biocontainers/taxadb/status
   :target: https://quay.io/repository/biocontainers/taxadb
.. _`taxadb/tags`: https://quay.io/repository/biocontainers/taxadb?tab=tags


.. raw:: html

    <script>
        var package = "taxadb";
        var versions = ["0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxadb/README.html
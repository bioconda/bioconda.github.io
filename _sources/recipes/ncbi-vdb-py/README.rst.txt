:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-vdb-py'
.. highlight: bash

ncbi-vdb-py
===========

.. conda:recipe:: ncbi-vdb-py
   :replaces_section_title:
   :noindex:

   SRA tools database engine \(Python bindings\)

   :homepage: https://github.com/ncbi/ncbi-vdb
   :license: Public Domain
   :recipe: /`ncbi-vdb-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py/meta.yaml>`_

   VDB is the database engine that all SRA tools use. It is a columnar database
   system with a number of unique features. All SRA objects are stored in VDB.
   This package exposes the Python bindings and depends on ncbi\-vdb to be available.



.. conda:package:: ncbi-vdb-py

   |downloads_ncbi-vdb-py| |docker_ncbi-vdb-py|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.0-0``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``

      

   
   :depends ncbi-vdb: ``3.0.2.*``
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-vdb-py

   and update with::

      conda update ncbi-vdb-py

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-vdb-py:<tag>

   (see `ncbi-vdb-py/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-vdb-py| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-vdb-py
   :alt:   (downloads)
.. |docker_ncbi-vdb-py| image:: https://quay.io/repository/biocontainers/ncbi-vdb-py/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb-py
.. _`ncbi-vdb-py/tags`: https://quay.io/repository/biocontainers/ncbi-vdb-py?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-vdb-py";
        var versions = ["3.0.2","3.0.0","2.11.0","2.10.9","2.10.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb-py/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-vdb'
.. highlight: bash

ncbi-vdb
========

.. conda:recipe:: ncbi-vdb
   :replaces_section_title:
   :noindex:

   SRA tools database engine

   :homepage: https://github.com/ncbi/ncbi-vdb
   :license: Public Domain
   :recipe: /`ncbi-vdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb/meta.yaml>`_

   VDB is the database engine that all SRA tools use. It is a columnar database
   system with a number of unique features. All SRA objects are stored in VDB.



.. conda:package:: ncbi-vdb

   |downloads_ncbi-vdb| |docker_ncbi-vdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.11.0-1</code>,  <code>2.11.0-0</code>,  <code>2.10.9-0</code>,  <code>2.10.8-0</code>,  <code>2.10.7-0</code>,  <code>2.10.6-0</code>,  <code>2.10.5-0</code>,  <code>2.10.4-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``,  ``2.10.7-0``,  ``2.10.6-0``,  ``2.10.5-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.6-0``,  ``2.9.3-0``,  ``2.9.1-0``,  ``2.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-vdb

   and update with::

      conda update ncbi-vdb

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-vdb:<tag>

   (see `ncbi-vdb/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-vdb| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-vdb
   :alt:   (downloads)
.. |docker_ncbi-vdb| image:: https://quay.io/repository/biocontainers/ncbi-vdb/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb
.. _`ncbi-vdb/tags`: https://quay.io/repository/biocontainers/ncbi-vdb?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-vdb";
        var versions = ["3.0.0","2.11.0","2.11.0","2.10.9","2.10.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb/README.html
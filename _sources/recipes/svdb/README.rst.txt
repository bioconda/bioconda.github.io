:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svdb'
.. highlight: bash

svdb
====

.. conda:recipe:: svdb
   :replaces_section_title:
   :noindex:

   structural variant database software

   :homepage: https://github.com/J35P312/SVDB
   :license: MIT / MIT
   :recipe: /`svdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdb/meta.yaml>`_

   


.. conda:package:: svdb

   |downloads_svdb| |docker_svdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.2-1</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-4</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  </span></summary>
      

      ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.2-0``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svdb

   and update with::

      conda update svdb

   or use the docker container::

      docker pull quay.io/biocontainers/svdb:<tag>

   (see `svdb/tags`_ for valid values for ``<tag>``)


.. |downloads_svdb| image:: https://img.shields.io/conda/dn/bioconda/svdb.svg?style=flat
   :target: https://anaconda.org/bioconda/svdb
   :alt:   (downloads)
.. |docker_svdb| image:: https://quay.io/repository/biocontainers/svdb/status
   :target: https://quay.io/repository/biocontainers/svdb
.. _`svdb/tags`: https://quay.io/repository/biocontainers/svdb?tab=tags


.. raw:: html

    <script>
        var package = "svdb";
        var versions = ["2.5.2","2.5.2","2.5.1","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdb/README.html
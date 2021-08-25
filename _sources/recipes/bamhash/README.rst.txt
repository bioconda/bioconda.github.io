:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamhash'
.. highlight: bash

bamhash
=======

.. conda:recipe:: bamhash/1.1
   :replaces_section_title:
   :noindex:

   Hash BAM and FASTQ files to verify data integrity

   :homepage: https://github.com/DecodeGenetics/BamHash
   :license: GPL-3-0
   :recipe: /`bamhash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash>`_/`1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash/1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash/1.1/meta.yaml>`_

   


.. conda:package:: bamhash

   |downloads_bamhash| |docker_bamhash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-5</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  </span></summary>
      

      ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamhash

   and update with::

      conda update bamhash

   or use the docker container::

      docker pull quay.io/biocontainers/bamhash:<tag>

   (see `bamhash/tags`_ for valid values for ``<tag>``)


.. |downloads_bamhash| image:: https://img.shields.io/conda/dn/bioconda/bamhash.svg?style=flat
   :target: https://anaconda.org/bioconda/bamhash
   :alt:   (downloads)
.. |docker_bamhash| image:: https://quay.io/repository/biocontainers/bamhash/status
   :target: https://quay.io/repository/biocontainers/bamhash
.. _`bamhash/tags`: https://quay.io/repository/biocontainers/bamhash?tab=tags


.. raw:: html

    <script>
        var package = "bamhash";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamhash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamhash/README.html
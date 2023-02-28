:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-taillines'
.. highlight: bash

ucsc-taillines
==============

.. conda:recipe:: ucsc-taillines
   :replaces_section_title:
   :noindex:

   add tail to each line of file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-taillines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-taillines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-taillines/meta.yaml>`_

   


.. conda:package:: ucsc-taillines

   |downloads_ucsc-taillines| |docker_ucsc-taillines|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  <code>357-0</code>,  <code>332-0</code>,  </span></summary>
      

      ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-taillines

   and update with::

      conda update ucsc-taillines

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-taillines:<tag>

   (see `ucsc-taillines/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-taillines| image:: https://img.shields.io/conda/dn/bioconda/ucsc-taillines.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-taillines
   :alt:   (downloads)
.. |docker_ucsc-taillines| image:: https://quay.io/repository/biocontainers/ucsc-taillines/status
   :target: https://quay.io/repository/biocontainers/ucsc-taillines
.. _`ucsc-taillines/tags`: https://quay.io/repository/biocontainers/ucsc-taillines?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-taillines";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-taillines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-taillines/README.html
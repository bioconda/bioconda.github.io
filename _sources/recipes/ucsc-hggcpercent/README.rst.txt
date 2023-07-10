:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hggcpercent'
.. highlight: bash

ucsc-hggcpercent
================

.. conda:recipe:: ucsc-hggcpercent
   :replaces_section_title:
   :noindex:

   Calculate GC Percentage in 20kb windows

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hggcpercent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hggcpercent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hggcpercent/meta.yaml>`_

   


.. conda:package:: ucsc-hggcpercent

   |downloads_ucsc-hggcpercent| |docker_ucsc-hggcpercent|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>448-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  <code>357-0</code>,  </span></summary>
      

      ``448-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: 
   :depends openssl: ``>=3.1.1,<4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hggcpercent

   and update with::

      conda update ucsc-hggcpercent

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-hggcpercent:<tag>

   (see `ucsc-hggcpercent/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hggcpercent| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hggcpercent.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hggcpercent
   :alt:   (downloads)
.. |docker_ucsc-hggcpercent| image:: https://quay.io/repository/biocontainers/ucsc-hggcpercent/status
   :target: https://quay.io/repository/biocontainers/ucsc-hggcpercent
.. _`ucsc-hggcpercent/tags`: https://quay.io/repository/biocontainers/ucsc-hggcpercent?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-hggcpercent";
        var versions = ["448","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hggcpercent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hggcpercent/README.html
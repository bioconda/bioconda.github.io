:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-liftover'
.. highlight: bash

ucsc-liftover
=============

.. conda:recipe:: ucsc-liftover
   :replaces_section_title:
   :noindex:

   Move annotations from one assembly to another

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-liftover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftover/meta.yaml>`_

   


.. conda:package:: ucsc-liftover

   |downloads_ucsc-liftover| |docker_ucsc-liftover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-4</code>,  <code>357-3</code>,  <code>357-2</code>,  <code>357-1</code>,  </span></summary>
      

      ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-4``,  ``357-3``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-liftover

   and update with::

      conda update ucsc-liftover

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-liftover:<tag>

   (see `ucsc-liftover/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-liftover| image:: https://img.shields.io/conda/dn/bioconda/ucsc-liftover.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-liftover
   :alt:   (downloads)
.. |docker_ucsc-liftover| image:: https://quay.io/repository/biocontainers/ucsc-liftover/status
   :target: https://quay.io/repository/biocontainers/ucsc-liftover
.. _`ucsc-liftover/tags`: https://quay.io/repository/biocontainers/ucsc-liftover?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-liftover";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-liftover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-liftover/README.html
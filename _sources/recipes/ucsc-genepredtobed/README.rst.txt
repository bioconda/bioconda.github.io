:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-genepredtobed'
.. highlight: bash

ucsc-genepredtobed
==================

.. conda:recipe:: ucsc-genepredtobed
   :replaces_section_title:
   :noindex:

   Convert from genePred to bed format. Does not yet handle genePredExt

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobed/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtobed

   |downloads_ucsc-genepredtobed| |docker_ucsc-genepredtobed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>447-0</code>,  <code>377-5</code>,  <code>377-4</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>366-1</code>,  <code>366-0</code>,  <code>357-1</code>,  </span></summary>
      

      ``447-0``,  ``377-5``,  ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``366-1``,  ``366-0``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredtobed

   and update with::

      conda update ucsc-genepredtobed

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-genepredtobed:<tag>

   (see `ucsc-genepredtobed/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-genepredtobed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtobed.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-genepredtobed
   :alt:   (downloads)
.. |docker_ucsc-genepredtobed| image:: https://quay.io/repository/biocontainers/ucsc-genepredtobed/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtobed
.. _`ucsc-genepredtobed/tags`: https://quay.io/repository/biocontainers/ucsc-genepredtobed?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-genepredtobed";
        var versions = ["447","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtobed/README.html
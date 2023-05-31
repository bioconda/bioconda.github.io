:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntjoin'
.. highlight: bash

ntjoin
======

.. conda:recipe:: ntjoin
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using minimizer graphs

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/ntjoin
   :license: GPL-3.0
   :recipe: /`ntjoin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntjoin/meta.yaml>`_

   


.. conda:package:: ntjoin

   |downloads_ntjoin| |docker_ntjoin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  </span></summary>
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.21.0``
   :depends btllib: ``<=1.4.10``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends make: 
   :depends pybedtools: 
   :depends pymannkendall: 
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``>=1.10``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntjoin

   and update with::

      conda update ntjoin

   or use the docker container::

      docker pull quay.io/biocontainers/ntjoin:<tag>

   (see `ntjoin/tags`_ for valid values for ``<tag>``)


.. |downloads_ntjoin| image:: https://img.shields.io/conda/dn/bioconda/ntjoin.svg?style=flat
   :target: https://anaconda.org/bioconda/ntjoin
   :alt:   (downloads)
.. |docker_ntjoin| image:: https://quay.io/repository/biocontainers/ntjoin/status
   :target: https://quay.io/repository/biocontainers/ntjoin
.. _`ntjoin/tags`: https://quay.io/repository/biocontainers/ntjoin?tab=tags


.. raw:: html

    <script>
        var package = "ntjoin";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntjoin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntjoin/README.html
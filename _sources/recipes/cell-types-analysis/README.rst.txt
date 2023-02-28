:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cell-types-analysis'
.. highlight: bash

cell-types-analysis
===================

.. conda:recipe:: cell-types-analysis
   :replaces_section_title:
   :noindex:

   A suite of scripts for analysis of scRNA\-seq cell type classification tools outputs.

   :homepage: https://github.com/ebi-gene-expression-group/cell-types-analysis
   :license: MIT
   :recipe: /`cell-types-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell-types-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell-types-analysis/meta.yaml>`_

   


.. conda:package:: cell-types-analysis

   |downloads_cell-types-analysis| |docker_cell-types-analysis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.11-1</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  </span></summary>
      

      ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bats: 
   :depends bioconductor-dropletutils: 
   :depends bioconductor-onassis: 
   :depends openjdk: ``8.0.152.*``
   :depends r-data.table: ``1.12.8.*``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-hash: ``2.2.6.1.*``
   :depends r-matrixstats: 
   :depends r-optparse: 
   :depends r-reshape2: ``1.4.3.*``
   :depends r-stringi: 
   :depends r-workflowscriptscommon: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cell-types-analysis

   and update with::

      conda update cell-types-analysis

   or use the docker container::

      docker pull quay.io/biocontainers/cell-types-analysis:<tag>

   (see `cell-types-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_cell-types-analysis| image:: https://img.shields.io/conda/dn/bioconda/cell-types-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/cell-types-analysis
   :alt:   (downloads)
.. |docker_cell-types-analysis| image:: https://quay.io/repository/biocontainers/cell-types-analysis/status
   :target: https://quay.io/repository/biocontainers/cell-types-analysis
.. _`cell-types-analysis/tags`: https://quay.io/repository/biocontainers/cell-types-analysis?tab=tags


.. raw:: html

    <script>
        var package = "cell-types-analysis";
        var versions = ["0.1.11","0.1.11","0.1.10","0.1.9","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cell-types-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cell-types-analysis/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seurat-scripts'
.. highlight: bash

seurat-scripts
==============

.. conda:recipe:: seurat-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the Seurat package.

   :homepage: https://github.com/ebi-gene-expression-group/r-seurat-scripts
   :license: Apache / Apache-2.0
   :recipe: /`seurat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts/meta.yaml>`_

   


.. conda:package:: seurat-scripts

   |downloads_seurat-scripts| |docker_seurat-scripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>0.3.0-0</code>,  <code>0.0.9-2</code>,  <code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-1</code>,  </span></summary>
      

      ``4.0.0-0``,  ``0.3.0-0``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: 
   :depends bioconductor-scater: 
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends mscorefonts: 
   :depends pandoc: 
   :depends r-cairo: 
   :depends r-loom: 
   :depends r-metap: 
   :depends r-optparse: 
   :depends r-seurat: ``4.0.0.*``
   :depends r-seuratdisk: 
   :depends r-svglite: 
   :depends r-uwot: ``<0.1.11``
   :depends r-workflowscriptscommon: ``>=0.0.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seurat-scripts

   and update with::

      conda update seurat-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/seurat-scripts:<tag>

   (see `seurat-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_seurat-scripts| image:: https://img.shields.io/conda/dn/bioconda/seurat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/seurat-scripts
   :alt:   (downloads)
.. |docker_seurat-scripts| image:: https://quay.io/repository/biocontainers/seurat-scripts/status
   :target: https://quay.io/repository/biocontainers/seurat-scripts
.. _`seurat-scripts/tags`: https://quay.io/repository/biocontainers/seurat-scripts?tab=tags


.. raw:: html

    <script>
        var package = "seurat-scripts";
        var versions = ["4.0.0","0.3.0","0.0.9","0.0.9","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seurat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seurat-scripts/README.html
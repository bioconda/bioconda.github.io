:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stream_atac'
.. highlight: bash

stream_atac
===========

.. conda:recipe:: stream_atac
   :replaces_section_title:
   :noindex:

   STREAM\-Single\-cell Trajectories Reconstruction\, Exploration And Mapping of single\-cell data. Preprocessing steps for single cell atac\-seq data.

   :homepage: https://github.com/pinellolab/STREAM_atac
   :license: AGPL-3
   :recipe: /`stream_atac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_atac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_atac/meta.yaml>`_

   


.. conda:package:: stream_atac

   |downloads_stream_atac| |docker_stream_atac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.5-5</code>,  <code>0.3.5-4</code>,  <code>0.3.5-3</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.3.5-5``,  ``0.3.5-4``,  ``0.3.5-3``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.3a-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: 
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: 
   :depends bioconductor-chromvar: 
   :depends bioconductor-jaspar2016: 
   :depends bioconductor-motifmatchr: 
   :depends perl: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-essentials: 
   :depends r-optparse: 
   :depends rpy2: ``2.9.*``
   :depends scikit-learn: 
   :depends unzip: 
   :depends wget: 
   :depends zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stream_atac

   and update with::

      conda update stream_atac

   or use the docker container::

      docker pull quay.io/biocontainers/stream_atac:<tag>

   (see `stream_atac/tags`_ for valid values for ``<tag>``)


.. |downloads_stream_atac| image:: https://img.shields.io/conda/dn/bioconda/stream_atac.svg?style=flat
   :target: https://anaconda.org/bioconda/stream_atac
   :alt:   (downloads)
.. |docker_stream_atac| image:: https://quay.io/repository/biocontainers/stream_atac/status
   :target: https://quay.io/repository/biocontainers/stream_atac
.. _`stream_atac/tags`: https://quay.io/repository/biocontainers/stream_atac?tab=tags


.. raw:: html

    <script>
        var package = "stream_atac";
        var versions = ["0.3.5","0.3.5","0.3.5","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream_atac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream_atac/README.html
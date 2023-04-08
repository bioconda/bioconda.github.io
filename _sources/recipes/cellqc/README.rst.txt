:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellqc'
.. highlight: bash

cellqc
======

.. conda:recipe:: cellqc
   :replaces_section_title:
   :noindex:

   Cellqc standardizes the qualiy control of single\-cell RNA\-Seq \(scRNA\) data to render clean feature count matrices.

   :homepage: https://github.com/lijinbio/cellqc
   :license: MIT / MIT
   :recipe: /`cellqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellqc/meta.yaml>`_

   


.. conda:package:: cellqc

   |downloads_cellqc| |docker_cellqc|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends anndata: 
   :depends bioconductor-dropletutils: 
   :depends click: 
   :depends numpy: 
   :depends pygraphviz: 
   :depends python: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-harmony: 
   :depends r-remotes: 
   :depends r-scpred: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends r-soupx: ``>=1.6.2``
   :depends scanpy: ``>=1.9.1``
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellqc

   and update with::

      conda update cellqc

   or use the docker container::

      docker pull quay.io/biocontainers/cellqc:<tag>

   (see `cellqc/tags`_ for valid values for ``<tag>``)


.. |downloads_cellqc| image:: https://img.shields.io/conda/dn/bioconda/cellqc.svg?style=flat
   :target: https://anaconda.org/bioconda/cellqc
   :alt:   (downloads)
.. |docker_cellqc| image:: https://quay.io/repository/biocontainers/cellqc/status
   :target: https://quay.io/repository/biocontainers/cellqc
.. _`cellqc/tags`: https://quay.io/repository/biocontainers/cellqc?tab=tags


.. raw:: html

    <script>
        var package = "cellqc";
        var versions = ["0.0.6","0.0.4","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellqc/README.html
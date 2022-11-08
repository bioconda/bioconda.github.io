:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-netcomi'
.. highlight: bash

r-netcomi
=========

.. conda:recipe:: r-netcomi
   :replaces_section_title:
   :noindex:

   Network Construction and Comparison for Microbiome Data

   :homepage: https://github.com/stefpeschel/NetCoMi
   :license: GPL-3.0-only
   :recipe: /`r-netcomi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netcomi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netcomi/meta.yaml>`_

   NetCoMi offers functions for constructing\, analyzing\, and comparing microbial association networks as well as dissimilarity\-based networks for microbial compositional data. It also includes functionality for constructing differential association networks.


.. conda:package:: r-netcomi

   |downloads_r-netcomi| |docker_r-netcomi|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-phyloseq: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dosnow: 
   :depends r-fdrtool: 
   :depends r-filematrix: 
   :depends r-foreach: 
   :depends r-gtools: 
   :depends r-huge: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pulsar: 
   :depends r-qgraph: 
   :depends r-rdpack: 
   :depends r-snow: 
   :depends r-spieceasi: ``>=1.0.6``
   :depends r-spring: 
   :depends r-vegan: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-netcomi

   and update with::

      conda update r-netcomi

   or use the docker container::

      docker pull quay.io/biocontainers/r-netcomi:<tag>

   (see `r-netcomi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-netcomi| image:: https://img.shields.io/conda/dn/bioconda/r-netcomi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-netcomi
   :alt:   (downloads)
.. |docker_r-netcomi| image:: https://quay.io/repository/biocontainers/r-netcomi/status
   :target: https://quay.io/repository/biocontainers/r-netcomi
.. _`r-netcomi/tags`: https://quay.io/repository/biocontainers/r-netcomi?tab=tags


.. raw:: html

    <script>
        var package = "r-netcomi";
        var versions = ["1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-netcomi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-netcomi/README.html
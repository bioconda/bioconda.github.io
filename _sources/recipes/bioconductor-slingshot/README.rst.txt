:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slingshot'
.. highlight: bash

bioconductor-slingshot
======================

.. conda:recipe:: bioconductor-slingshot
   :replaces_section_title:
   :noindex:

   Tools for ordering single\-cell sequencing

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/slingshot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-slingshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slingshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slingshot/meta.yaml>`_

   Provides functions for inferring continuous\, branching lineage structures in low\-dimensional data. Slingshot was designed to model developmental trajectories in single\-cell RNA sequencing data and serve as a component in an analysis pipeline after dimensionality reduction and clustering. It is flexible enough to handle arbitrarily many branching events and allows for the incorporation of prior knowledge through supervised graph construction.


.. conda:package:: bioconductor-slingshot

   |downloads_bioconductor-slingshot| |docker_bioconductor-slingshot|

   :versions:
      
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-trajectoryutils: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-princurve: ``>=2.0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slingshot

   and update with::

      conda update bioconductor-slingshot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slingshot:<tag>

   (see `bioconductor-slingshot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slingshot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slingshot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slingshot
   :alt:   (downloads)
.. |docker_bioconductor-slingshot| image:: https://quay.io/repository/biocontainers/bioconductor-slingshot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slingshot
.. _`bioconductor-slingshot/tags`: https://quay.io/repository/biocontainers/bioconductor-slingshot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-slingshot";
        var versions = ["2.6.0","2.2.0","2.0.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slingshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slingshot/README.html
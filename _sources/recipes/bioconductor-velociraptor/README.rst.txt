:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-velociraptor'
.. highlight: bash

bioconductor-velociraptor
=========================

.. conda:recipe:: bioconductor-velociraptor
   :replaces_section_title:
   :noindex:

   Toolkit for Single\-Cell Velocity

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/velociraptor.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-velociraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-velociraptor/meta.yaml>`_

   This package provides Bioconductor\-friendly wrappers for RNA velocity calculations in single\-cell RNA\-seq data. We use the basilisk package to manage Conda environments\, and the zellkonverter package to convert data structures between SingleCellExperiment \(R\) and AnnData \(Python\). The information produced by the velocity methods is stored in the various components of the SingleCellExperiment class.


.. conda:package:: bioconductor-velociraptor

   |downloads_bioconductor-velociraptor| |docker_bioconductor-velociraptor|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.4.0,<1.5.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.8.0,<1.9.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scuttle: ``>=1.2.0,<1.3.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-zellkonverter: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-velociraptor

   and update with::

      conda update bioconductor-velociraptor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-velociraptor:<tag>

   (see `bioconductor-velociraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-velociraptor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-velociraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-velociraptor
   :alt:   (downloads)
.. |docker_bioconductor-velociraptor| image:: https://quay.io/repository/biocontainers/bioconductor-velociraptor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-velociraptor
.. _`bioconductor-velociraptor/tags`: https://quay.io/repository/biocontainers/bioconductor-velociraptor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-velociraptor";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-velociraptor/README.html
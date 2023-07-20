:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmultiome'
.. highlight: bash

bioconductor-scmultiome
=======================

.. conda:recipe:: bioconductor-scmultiome
   :replaces_section_title:
   :noindex:

   Collection of Public Single\-Cell Multiome \(scATAC \+ scRNAseq\) Datasets

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/scMultiome.html
   :license: CC BY-SA 4.0
   :recipe: /`bioconductor-scmultiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmultiome/meta.yaml>`_

   Single cell multiome data\, containing chromatin accessibility \(scATAC\-seq\) and gene expression \(scRNA\-seq\) information analyzed with the ArchR package and presented as MultiAssayExperiment objects.


.. conda:package:: bioconductor-scmultiome

   |downloads_bioconductor-scmultiome| |docker_bioconductor-scmultiome|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmultiome

   and update with::

      conda update bioconductor-scmultiome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmultiome:<tag>

   (see `bioconductor-scmultiome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmultiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmultiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmultiome
   :alt:   (downloads)
.. |docker_bioconductor-scmultiome| image:: https://quay.io/repository/biocontainers/bioconductor-scmultiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmultiome
.. _`bioconductor-scmultiome/tags`: https://quay.io/repository/biocontainers/bioconductor-scmultiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmultiome";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmultiome/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggspavis'
.. highlight: bash

bioconductor-ggspavis
=====================

.. conda:recipe:: bioconductor-ggspavis
   :replaces_section_title:
   :noindex:

   Visualization functions for spatially resolved transcriptomics data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ggspavis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggspavis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggspavis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggspavis/meta.yaml>`_

   Visualization functions for spatially resolved transcriptomics datasets stored in SpatialExperiment format. Includes functions to create several types of plots for data from from spot\-based \(e.g. 10x Genomics Visium\) and molecule\-based \(e.g. seqFISH\) technological platforms.


.. conda:package:: bioconductor-ggspavis

   |downloads_bioconductor-ggspavis| |docker_bioconductor-ggspavis|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-spatialexperiment: ``>=1.4.0,<1.5.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggside: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggspavis

   and update with::

      conda update bioconductor-ggspavis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggspavis:<tag>

   (see `bioconductor-ggspavis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggspavis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggspavis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggspavis
   :alt:   (downloads)
.. |docker_bioconductor-ggspavis| image:: https://quay.io/repository/biocontainers/bioconductor-ggspavis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggspavis
.. _`bioconductor-ggspavis/tags`: https://quay.io/repository/biocontainers/bioconductor-ggspavis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggspavis";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggspavis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggspavis/README.html
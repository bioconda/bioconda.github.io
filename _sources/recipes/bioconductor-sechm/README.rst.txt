:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sechm'
.. highlight: bash

bioconductor-sechm
==================

.. conda:recipe:: bioconductor-sechm
   :replaces_section_title:
   :noindex:

   sechm\: Complex Heatmaps from a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sechm.html
   :license: GPL-3
   :recipe: /`bioconductor-sechm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sechm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sechm/meta.yaml>`_

   sechm provides a simple interface between SummarizedExperiment objects and the ComplexHeatmap package. It enables plotting annotated heatmaps from SE objects\, with easy access to rowData and colData columns\, and implements a number of features to make the generation of heatmaps easier and more flexible. These functionalities used to be part of the SEtools package.


.. conda:package:: bioconductor-sechm

   |downloads_bioconductor-sechm| |docker_bioconductor-sechm|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-circlize: 
   :depends r-matrixstats: 
   :depends r-randomcolor: 
   :depends r-seriation: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sechm

   and update with::

      conda update bioconductor-sechm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sechm:<tag>

   (see `bioconductor-sechm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sechm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sechm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sechm
   :alt:   (downloads)
.. |docker_bioconductor-sechm| image:: https://quay.io/repository/biocontainers/bioconductor-sechm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sechm
.. _`bioconductor-sechm/tags`: https://quay.io/repository/biocontainers/bioconductor-sechm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sechm";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sechm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sechm/README.html
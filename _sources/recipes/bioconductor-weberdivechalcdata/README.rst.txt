:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weberdivechalcdata'
.. highlight: bash

bioconductor-weberdivechalcdata
===============================

.. conda:recipe:: bioconductor-weberdivechalcdata
   :replaces_section_title:
   :noindex:

   Spatially\-resolved transcriptomics and single\-nucleus RNA\-sequencing data from the locus coeruleus \(LC\) in postmortem human brain samples

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/WeberDivechaLCdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-weberdivechalcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weberdivechalcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weberdivechalcdata/meta.yaml>`_

   Spatially\-resolved transcriptomics \(SRT\) and single\-nucleus RNA\-sequencing \(snRNA\-seq\) data from the locus coeruleus \(LC\) in postmortem human brain samples. Data were generated with the 10x Genomics Visium SRT and 10x Genomics Chromium snRNA\-seq platforms. Datasets are stored in SpatialExperiment and SingleCellExperiment formats.


.. conda:package:: bioconductor-weberdivechalcdata

   |downloads_bioconductor-weberdivechalcdata| |docker_bioconductor-weberdivechalcdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-weberdivechalcdata

   and update with::

      conda update bioconductor-weberdivechalcdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-weberdivechalcdata:<tag>

   (see `bioconductor-weberdivechalcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-weberdivechalcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weberdivechalcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weberdivechalcdata
   :alt:   (downloads)
.. |docker_bioconductor-weberdivechalcdata| image:: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata
.. _`bioconductor-weberdivechalcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-weberdivechalcdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-weberdivechalcdata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weberdivechalcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weberdivechalcdata/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vectrapolarisdata'
.. highlight: bash

bioconductor-vectrapolarisdata
==============================

.. conda:recipe:: bioconductor-vectrapolarisdata
   :replaces_section_title:
   :noindex:

   Vectra Polaris and Vectra 3 multiplex single\-cell imaging data

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/VectraPolarisData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vectrapolarisdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vectrapolarisdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vectrapolarisdata/meta.yaml>`_

   Provides two multiplex imaging datasets collected on Vectra instruments at the University of Colorado Anschutz Medical Campus. Data are provided as a Spatial Experiment objects. Data is provided in tabular form and has been segmented and phenotyped using Inform software. Raw .tiff files are not included.


.. conda:package:: bioconductor-vectrapolarisdata

   |downloads_bioconductor-vectrapolarisdata| |docker_bioconductor-vectrapolarisdata|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vectrapolarisdata

   and update with::

      conda update bioconductor-vectrapolarisdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vectrapolarisdata:<tag>

   (see `bioconductor-vectrapolarisdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vectrapolarisdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vectrapolarisdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vectrapolarisdata
   :alt:   (downloads)
.. |docker_bioconductor-vectrapolarisdata| image:: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata
.. _`bioconductor-vectrapolarisdata/tags`: https://quay.io/repository/biocontainers/bioconductor-vectrapolarisdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vectrapolarisdata";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vectrapolarisdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vectrapolarisdata/README.html
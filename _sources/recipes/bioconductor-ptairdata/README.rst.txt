:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ptairdata'
.. highlight: bash

bioconductor-ptairdata
======================

.. conda:recipe:: bioconductor-ptairdata
   :replaces_section_title:
   :noindex:

   PTR\-TOF\-MS volatolomics raw datasets from exhaled air and cell culture headspace

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ptairData.html
   :license: GPL-3
   :recipe: /`bioconductor-ptairdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairdata/meta.yaml>`_

   The package ptairData contains two raw datasets from Proton\-Transfer\-Reaction Time\-of\-Flight mass spectrometer acquisitions \(PTR\-TOF\-MS\)\, in the HDF5 format. One from the exhaled air of two volunteer healthy individuals with three replicates\, and one from the cell culture headspace from two mycobacteria species and one control \(culture medium only\) with two replicates. Those datasets are used in the examples and in the vignette of the ptairMS package \(PTR\-TOF\-MS data pre\-processing\). There are also used to gererate the ptrSet in the ptairMS data \: exhaledPtrset and mycobacteriaSet


.. conda:package:: bioconductor-ptairdata

   |downloads_bioconductor-ptairdata| |docker_bioconductor-ptairdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-signal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ptairdata

   and update with::

      conda update bioconductor-ptairdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ptairdata:<tag>

   (see `bioconductor-ptairdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ptairdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ptairdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ptairdata
   :alt:   (downloads)
.. |docker_bioconductor-ptairdata| image:: https://quay.io/repository/biocontainers/bioconductor-ptairdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ptairdata
.. _`bioconductor-ptairdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ptairdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ptairdata";
        var versions = ["1.8.0","1.5.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ptairdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ptairdata/README.html
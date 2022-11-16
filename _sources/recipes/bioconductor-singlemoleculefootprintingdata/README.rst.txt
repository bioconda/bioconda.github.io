:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlemoleculefootprintingdata'
.. highlight: bash

bioconductor-singlemoleculefootprintingdata
===========================================

.. conda:recipe:: bioconductor-singlemoleculefootprintingdata
   :replaces_section_title:
   :noindex:

   Data supporting the SingleMoleculeFootprinting pkg

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/SingleMoleculeFootprintingData.html
   :license: GPL-3
   :recipe: /`bioconductor-singlemoleculefootprintingdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprintingdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlemoleculefootprintingdata/meta.yaml>`_

   This Data package contains data objcets relevanat for the SingleMoleculeFootprinting package. More specifically\, it contains one example of aligned sequencing data \(.bam \& .bai\) necessary to run the SingleMoleculeFootprinting vignette. Additionally\, we provide data that are essential for some functions to work correctly such as BaitCapture\(\) and SampleCorrelation\(\).


.. conda:package:: bioconductor-singlemoleculefootprintingdata

   |downloads_bioconductor-singlemoleculefootprintingdata| |docker_bioconductor-singlemoleculefootprintingdata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221109``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlemoleculefootprintingdata

   and update with::

      conda update bioconductor-singlemoleculefootprintingdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlemoleculefootprintingdata:<tag>

   (see `bioconductor-singlemoleculefootprintingdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlemoleculefootprintingdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlemoleculefootprintingdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlemoleculefootprintingdata
   :alt:   (downloads)
.. |docker_bioconductor-singlemoleculefootprintingdata| image:: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprintingdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprintingdata
.. _`bioconductor-singlemoleculefootprintingdata/tags`: https://quay.io/repository/biocontainers/bioconductor-singlemoleculefootprintingdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlemoleculefootprintingdata";
        var versions = ["1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprintingdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlemoleculefootprintingdata/README.html
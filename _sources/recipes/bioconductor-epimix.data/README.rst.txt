:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimix.data'
.. highlight: bash

bioconductor-epimix.data
========================

.. conda:recipe:: bioconductor-epimix.data
   :replaces_section_title:
   :noindex:

   Data for the EpiMix package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/EpiMix.data.html
   :license: GPL-3
   :recipe: /`bioconductor-epimix.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix.data/meta.yaml>`_

   Supporting data for the EpiMix R package. It include\: \- HM450\_lncRNA\_probes.rda \- HM450\_miRNA\_probes.rda \- EPIC\_lncRNA\_probes.rda \- EPIC\_miRNA\_probes.rda \- EpigenomeMap.rda \- LUAD.sample.annotation \- TCGA\_BatchData \- MET.data \- mRNA.data \- microRNA.data \- lncRNA.data \- Sample\_EpiMixResults\_lncRNA \- Sample\_EpiMixResults\_miRNA \- Sample\_EpiMixResults\_Regular \- lncRNA expression data of tumors from TCGA that are stored in the ExperimentHub.


.. conda:package:: bioconductor-epimix.data

   |downloads_bioconductor-epimix.data| |docker_bioconductor-epimix.data|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epimix.data

   and update with::

      conda update bioconductor-epimix.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epimix.data:<tag>

   (see `bioconductor-epimix.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epimix.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimix.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimix.data
   :alt:   (downloads)
.. |docker_bioconductor-epimix.data| image:: https://quay.io/repository/biocontainers/bioconductor-epimix.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimix.data
.. _`bioconductor-epimix.data/tags`: https://quay.io/repository/biocontainers/bioconductor-epimix.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimix.data";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimix.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimix.data/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dnafusion'
.. highlight: bash

bioconductor-dnafusion
======================

.. conda:recipe:: bioconductor-dnafusion
   :replaces_section_title:
   :noindex:

   Identification of gene fusions using paired\-end sequencing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/DNAfusion.html
   :license: GPL-3
   :recipe: /`bioconductor-dnafusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnafusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dnafusion/meta.yaml>`_

   DNAfusion can identify gene fusions such as EML4\-ALK based on paired\-end sequencing results. This package was developed using position deduplicated BAM files generated with the AVENIO Oncology Analysis Software. These files are made using the AVENIO ctDNA surveillance kit and Illumina Nextseq 500 sequencing. This is a targeted hybridization NGS approach and includes ALK\-specific but not EML4\-specific probes.


.. conda:package:: bioconductor-dnafusion

   |downloads_bioconductor-dnafusion| |docker_bioconductor-dnafusion|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bamsignals: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocbaseutils: ``>=1.2.0,<1.3.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dnafusion

   and update with::

      conda update bioconductor-dnafusion

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dnafusion:<tag>

   (see `bioconductor-dnafusion/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dnafusion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dnafusion.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dnafusion
   :alt:   (downloads)
.. |docker_bioconductor-dnafusion| image:: https://quay.io/repository/biocontainers/bioconductor-dnafusion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dnafusion
.. _`bioconductor-dnafusion/tags`: https://quay.io/repository/biocontainers/bioconductor-dnafusion?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dnafusion";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dnafusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dnafusion/README.html
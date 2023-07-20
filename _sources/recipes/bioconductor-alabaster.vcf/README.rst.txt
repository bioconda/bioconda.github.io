:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.vcf'
.. highlight: bash

bioconductor-alabaster.vcf
==========================

.. conda:recipe:: bioconductor-alabaster.vcf
   :replaces_section_title:
   :noindex:

   Save and Load Variant Data to\/from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.vcf.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf/meta.yaml>`_

   Save variant calling SummarizedExperiment to file and load them back as VCF objects. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.vcf

   |downloads_bioconductor-alabaster.vcf| |docker_bioconductor-alabaster.vcf|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.se: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.string: ``>=1.0.0,<1.1.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.vcf

   and update with::

      conda update bioconductor-alabaster.vcf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.vcf:<tag>

   (see `bioconductor-alabaster.vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.vcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.vcf
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.vcf| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf
.. _`bioconductor-alabaster.vcf/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.vcf";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html
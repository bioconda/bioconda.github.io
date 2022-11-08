:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vcfarray'
.. highlight: bash

bioconductor-vcfarray
=====================

.. conda:recipe:: bioconductor-vcfarray
   :replaces_section_title:
   :noindex:

   Representing on\-disk \/ remote VCF files as array\-like objects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/VCFArray.html
   :license: GPL-3
   :recipe: /`bioconductor-vcfarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vcfarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vcfarray/meta.yaml>`_

   VCFArray extends the DelayedArray to represent VCF data entries as array\-like objects with on\-disk \/ remote VCF file as backend. Data entries from VCF files\, including info fields\, FORMAT fields\, and the fixed columns \(REF\, ALT\, QUAL\, FILTER\) could be converted into VCFArray instances with different dimensions.


.. conda:package:: bioconductor-vcfarray

   |downloads_bioconductor-vcfarray| |docker_bioconductor-vcfarray|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-genomicfiles: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vcfarray

   and update with::

      conda update bioconductor-vcfarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vcfarray:<tag>

   (see `bioconductor-vcfarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vcfarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vcfarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vcfarray
   :alt:   (downloads)
.. |docker_bioconductor-vcfarray| image:: https://quay.io/repository/biocontainers/bioconductor-vcfarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vcfarray
.. _`bioconductor-vcfarray/tags`: https://quay.io/repository/biocontainers/bioconductor-vcfarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vcfarray";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vcfarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vcfarray/README.html
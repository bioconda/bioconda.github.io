:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgntx'
.. highlight: bash

bioconductor-rgntx
==================

.. conda:recipe:: bioconductor-rgntx
   :replaces_section_title:
   :noindex:

   Colocalization analysis of transcriptome elements in the presence of isoform heterogeneity and ambiguity

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RgnTX.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgntx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgntx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgntx/meta.yaml>`_

   RgnTX allows the integration of transcriptome annotations so as to model the complex alternative splicing patterns. It supports the testing of transcriptome elements without clear isoform association\, which is often the real scenario due to technical limitations. It involves functions that do permutaion test for evaluating association between features and transcriptome regions.


.. conda:package:: bioconductor-rgntx

   |downloads_bioconductor-rgntx| |docker_bioconductor-rgntx|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgntx

   and update with::

      conda update bioconductor-rgntx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgntx:<tag>

   (see `bioconductor-rgntx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgntx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgntx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgntx
   :alt:   (downloads)
.. |docker_bioconductor-rgntx| image:: https://quay.io/repository/biocontainers/bioconductor-rgntx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgntx
.. _`bioconductor-rgntx/tags`: https://quay.io/repository/biocontainers/bioconductor-rgntx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgntx";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgntx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgntx/README.html
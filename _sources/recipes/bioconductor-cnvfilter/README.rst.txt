:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvfilter'
.. highlight: bash

bioconductor-cnvfilter
======================

.. conda:recipe:: bioconductor-cnvfilter
   :replaces_section_title:
   :noindex:

   Identifies false positives of CNV calling tools by using SNV calls

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CNVfilteR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvfilter/meta.yaml>`_

   CNVfilteR identifies those CNVs that can be discarded by using the single nucleotide variant \(SNV\) calls that are usually obtained in common NGS pipelines.


.. conda:package:: bioconductor-cnvfilter

   |downloads_bioconductor-cnvfilter| |docker_bioconductor-cnvfilter|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-copynumberplots: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-karyoploter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-pracma: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvfilter

   and update with::

      conda update bioconductor-cnvfilter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvfilter:<tag>

   (see `bioconductor-cnvfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvfilter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvfilter
   :alt:   (downloads)
.. |docker_bioconductor-cnvfilter| image:: https://quay.io/repository/biocontainers/bioconductor-cnvfilter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvfilter
.. _`bioconductor-cnvfilter/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvfilter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvfilter";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvfilter/README.html
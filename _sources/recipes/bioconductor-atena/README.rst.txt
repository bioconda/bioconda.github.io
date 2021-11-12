:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atena'
.. highlight: bash

bioconductor-atena
==================

.. conda:recipe:: bioconductor-atena
   :replaces_section_title:
   :noindex:

   Analysis of Transposable Elements

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/atena.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-atena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atena/meta.yaml>`_

   Quantify expression of transposable elements \(TEs\) from RNA\-seq data through different methods\, including ERVmap\, TEtranscripts and Telescope. A common interface is provided to use each of these methods\, which consists of building a parameter object\, calling the quantification function with this object and getting a SummarizedExperiment object as output container of the quantified expression profiles. The implementation allows one to quantify TEs and gene transcripts in an integrated manner.


.. conda:package:: bioconductor-atena

   |downloads_bioconductor-atena| |docker_bioconductor-atena|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-sparsematrixstats: ``>=1.6.0,<1.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-squarem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-atena

   and update with::

      conda update bioconductor-atena

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atena:<tag>

   (see `bioconductor-atena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atena
   :alt:   (downloads)
.. |docker_bioconductor-atena| image:: https://quay.io/repository/biocontainers/bioconductor-atena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atena
.. _`bioconductor-atena/tags`: https://quay.io/repository/biocontainers/bioconductor-atena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atena";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atena/README.html
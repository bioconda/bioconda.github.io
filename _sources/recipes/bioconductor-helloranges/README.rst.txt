:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-helloranges'
.. highlight: bash

bioconductor-helloranges
========================

.. conda:recipe:: bioconductor-helloranges
   :replaces_section_title:
   :noindex:

   Introduce \*Ranges to bedtools users

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/HelloRanges.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-helloranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges/meta.yaml>`_
   :links: biotools: :biotools:`helloranges`, doi: :doi:`10.1038/nmeth.3252`

   Translates bedtools command\-line invocations to R code calling functions from the Bioconductor \*Ranges infrastructure. This is intended to educate novice Bioconductor users and to compare the syntax and semantics of the two frameworks.


.. conda:package:: bioconductor-helloranges

   |downloads_bioconductor-helloranges| |docker_bioconductor-helloranges|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicalignments: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-docopt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-helloranges

   and update with::

      conda update bioconductor-helloranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-helloranges:<tag>

   (see `bioconductor-helloranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-helloranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-helloranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-helloranges
   :alt:   (downloads)
.. |docker_bioconductor-helloranges| image:: https://quay.io/repository/biocontainers/bioconductor-helloranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-helloranges
.. _`bioconductor-helloranges/tags`: https://quay.io/repository/biocontainers/bioconductor-helloranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-helloranges";
        var versions = ["1.18.0","1.16.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-helloranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-helloranges/README.html
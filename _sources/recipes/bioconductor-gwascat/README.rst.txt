:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwascat'
.. highlight: bash

bioconductor-gwascat
====================

.. conda:recipe:: bioconductor-gwascat
   :replaces_section_title:
   :noindex:

   representing and modeling data in the EMBL\-EBI GWAS catalog

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/gwascat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascat/meta.yaml>`_

   Represent and model data in the EMBL\-EBI GWAS catalog.


.. conda:package:: bioconductor-gwascat

   |downloads_bioconductor-gwascat| |docker_bioconductor-gwascat|

   :versions:
      
      

      ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.1-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-snpstats: ``>=1.44.0,<1.45.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gwascat

   and update with::

      conda update bioconductor-gwascat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwascat:<tag>

   (see `bioconductor-gwascat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwascat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwascat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwascat
   :alt:   (downloads)
.. |docker_bioconductor-gwascat| image:: https://quay.io/repository/biocontainers/bioconductor-gwascat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwascat
.. _`bioconductor-gwascat/tags`: https://quay.io/repository/biocontainers/bioconductor-gwascat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwascat";
        var versions = ["2.26.0","2.24.0","2.22.0","2.22.0","2.20.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwascat/README.html
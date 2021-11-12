:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-organism.dplyr'
.. highlight: bash

bioconductor-organism.dplyr
===========================

.. conda:recipe:: bioconductor-organism.dplyr
   :replaces_section_title:
   :noindex:

   dplyr\-based Access to Bioconductor Annotation Resources

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Organism.dplyr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-organism.dplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr/meta.yaml>`_

   This package provides an alternative interface to Bioconductor \'annotation\' resources\, in particular the gene identifier mapping functionality of the \'org\' packages \(e.g.\, org.Hs.eg.db\) and the genome coordinate functionality of the \'TxDb\' packages \(e.g.\, TxDb.Hsapiens.UCSC.hg38.knownGene\).


.. conda:package:: bioconductor-organism.dplyr

   |downloads_bioconductor-organism.dplyr| |docker_bioconductor-organism.dplyr|

   :versions:
      
      

      ``1.22.1-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationfilter: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: ``>=0.7.0``
   :depends r-rlang: 
   :depends r-rsqlite: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-organism.dplyr

   and update with::

      conda update bioconductor-organism.dplyr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-organism.dplyr:<tag>

   (see `bioconductor-organism.dplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-organism.dplyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-organism.dplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-organism.dplyr
   :alt:   (downloads)
.. |docker_bioconductor-organism.dplyr| image:: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr
.. _`bioconductor-organism.dplyr/tags`: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-organism.dplyr";
        var versions = ["1.22.1","1.20.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html
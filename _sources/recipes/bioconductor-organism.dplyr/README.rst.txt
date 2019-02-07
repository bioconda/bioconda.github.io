.. title:: Package Recipe 'bioconductor-organism.dplyr'
.. highlight: bash


bioconductor-organism.dplyr
===========================

.. conda:recipe:: bioconductor-organism.dplyr
   :replaces_section_title:

   This package provides an alternative interface to Bioconductor \'annotation\' resources\, in particular the gene identifier mapping functionality of the \'org\' packages \(e.g.\, org.Hs.eg.db\) and the genome coordinate functionality of the \'TxDb\' packages \(e.g.\, TxDb.Hsapiens.UCSC.hg38.knownGene\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Organism.dplyr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-organism.dplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organism.dplyr/meta.yaml>`_

   


.. conda:package:: bioconductor-organism.dplyr

   |downloads_bioconductor-organism.dplyr| |docker_bioconductor-organism.dplyr|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationfilter` >=1.6.0,<1.7.0 :conda:package:`bioconductor-biocfilecache` >=1.6.0,<1.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-dbplyr`  :conda:package:`r-dplyr` >=0.7.0 :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-organism.dplyr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-organism.dplyr

   and update with::

      conda update bioconductor-organism.dplyr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-organism.dplyr


.. |required_by_bioconductor-organism.dplyr| conda:required_by:: bioconductor-organism.dplyr
.. |downloads_bioconductor-organism.dplyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-organism.dplyr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-organism.dplyr| image:: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-organism.dplyr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-organism.dplyr/README.html


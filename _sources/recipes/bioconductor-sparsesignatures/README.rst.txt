:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsesignatures'
.. highlight: bash

bioconductor-sparsesignatures
=============================

.. conda:recipe:: bioconductor-sparsesignatures
   :replaces_section_title:

   Point mutations occurring in a genome can be divided into 96 categories based on the base being mutated\, the base it is mutated into and its two flanking bases. Therefore\, for any patient\, it is possible to represent all the point mutations occurring in that patient’s tumor as a vector of length 96\, where each element represents the count of mutations for a given category in the patient. A mutational signature represents the pattern of mutations produced by a mutagen or mutagenic process inside the cell. Each signature can also be represented by a vector of length 96\, where each element represents the probability that this particular mutagenic process generates a mutation of the 96 above mentioned categories. In this R package\, we provide a set of functions to extract and visualize the mutational signatures that best explain the mutation counts of a large number of patients.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SparseSignatures.html
   :license: file LICENSE
   :recipe: /`bioconductor-sparsesignatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsesignatures/meta.yaml>`_

   


.. conda:package:: bioconductor-sparsesignatures

   |downloads_bioconductor-sparsesignatures| |docker_bioconductor-sparsesignatures|

   :versions: 1.2.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-bsgenome.hsapiens.1000genomes.hs37d5: >=0.99.0,<0.100.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-ggplot2: 
   
   :depends r-gridextra: 
   
   :depends r-nmf: 
   
   :depends r-nnlasso: 
   
   :depends r-nnls: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sparsesignatures

   and update with::

      conda update bioconductor-sparsesignatures

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sparsesignatures:<tag>

   (see `bioconductor-sparsesignatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsesignatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsesignatures.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sparsesignatures| image:: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures
.. _`bioconductor-sparsesignatures/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsesignatures?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsesignatures/README.html
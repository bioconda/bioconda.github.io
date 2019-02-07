.. title:: Package Recipe 'bioconductor-genomicranges'
.. highlight: bash


bioconductor-genomicranges
==========================

.. conda:recipe:: bioconductor-genomicranges
   :replaces_section_title:

   The ability to efficiently represent and manipulate genomic annotations and alignments is playing a central role when it comes to analyzing high\-throughput sequencing data \(a.k.a. NGS data\). The GenomicRanges package defines general purpose containers for storing and manipulating genomic intervals and variables defined along a genome. More specialized containers for representing and manipulating short alignments against a reference genome\, or a matrix\-like summarization of an experiment\, are defined in the GenomicAlignments and SummarizedExperiment packages\, respectively. Both packages build on top of the GenomicRanges infrastructure.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GenomicRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges/meta.yaml>`_
   :links: biotools: :biotools:`genomicranges`

   


.. conda:package:: bioconductor-genomicranges

   |downloads_bioconductor-genomicranges| |docker_bioconductor-genomicranges|

   :versions: 1.34.0, 1.32.7, 1.30.3, 1.30.0, 1.28.6, 1.26.4, 1.26.1, 1.24.3, 1.22.4, 1.22.3, 1.22.2, 1.22.1, 1.22.0, 1.20.8

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-genomicranges|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicranges

   and update with::

      conda update bioconductor-genomicranges

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genomicranges


.. |required_by_bioconductor-genomicranges| conda:required_by:: bioconductor-genomicranges
.. |downloads_bioconductor-genomicranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicranges.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genomicranges| image:: https://quay.io/repository/biocontainers/bioconductor-genomicranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicranges







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html


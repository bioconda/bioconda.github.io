:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stan'
.. highlight: bash

bioconductor-stan
=================

.. conda:recipe:: bioconductor-stan
   :replaces_section_title:

   Genome segmentation with hidden Markov models has become a useful tool to annotate genomic elements\, such as promoters and enhancers. STAN \(genomic STate ANnotation\) implements \(bidirectional\) hidden Markov models \(HMMs\) using a variety of different probability distributions\, which can model a wide range of current genomic data \(e.g. continuous\, discrete\, binary\). STAN de novo learns and annotates the genome into a given number of \'genomic states\'. The \'genomic states\' may for instance reflect distinct genome\-associated protein complexes \(e.g. \'transcription states\'\) or describe recurring patterns of chromatin features \(referred to as \'chromatin states\'\). Unlike other tools\, STAN also allows for the integration of strand\-specific \(e.g. RNA\) and non\-strand\-specific data \(e.g. ChIP\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/STAN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-stan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan/meta.yaml>`_
   :links: biotools: :biotools:`stan`

   


.. conda:package:: bioconductor-stan

   |downloads_bioconductor-stan| |docker_bioconductor-stan|

   :versions: 2.14.0-0, 2.12.0-1, 2.10.0-0, 2.8.0-0, 2.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-poilog: 
   :depends r-rsolnp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stan

   and update with::

      conda update bioconductor-stan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stan:<tag>

   (see `bioconductor-stan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stan
   :alt:   (downloads)
.. |docker_bioconductor-stan| image:: https://quay.io/repository/biocontainers/bioconductor-stan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stan
.. _`bioconductor-stan/tags`: https://quay.io/repository/biocontainers/bioconductor-stan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stan/README.html
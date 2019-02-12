.. title:: Package Recipe 'bioconductor-stan'
.. highlight: bash


bioconductor-stan
=================

.. conda:recipe:: bioconductor-stan
   :replaces_section_title:

   Genome segmentation with hidden Markov models has become a useful tool to annotate genomic elements\, such as promoters and enhancers. STAN \(genomic STate ANnotation\) implements \(bidirectional\) hidden Markov models \(HMMs\) using a variety of different probability distributions\, which can model a wide range of current genomic data \(e.g. continuous\, discrete\, binary\). STAN de novo learns and annotates the genome into a given number of \'genomic states\'. The \'genomic states\' may for instance reflect distinct genome\-associated protein complexes \(e.g. \'transcription states\'\) or describe recurring patterns of chromatin features \(referred to as \'chromatin states\'\). Unlike other tools\, STAN also allows for the integration of strand\-specific \(e.g. RNA\) and non\-strand\-specific data \(e.g. ChIP\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/STAN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-stan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan/meta.yaml>`_
   :links: biotools: :biotools:`stan`

   


.. conda:package:: bioconductor-stan

   |downloads_bioconductor-stan| |docker_bioconductor-stan|

   :versions: 2.10.0, 2.8.0, 2.6.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-poilog`  :conda:package:`r-rsolnp`  

   :required~by: |required_by_bioconductor-stan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stan

   and update with::

      conda update bioconductor-stan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-stan


.. |required_by_bioconductor-stan| conda:required_by:: bioconductor-stan
.. |downloads_bioconductor-stan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-stan| image:: https://quay.io/repository/biocontainers/bioconductor-stan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stan/README.html


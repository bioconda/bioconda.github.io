:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stan'
.. highlight: bash

bioconductor-stan
=================

.. conda:recipe:: bioconductor-stan
   :replaces_section_title:
   :noindex:

   The Genomic STate ANnotation Package

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/STAN.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-stan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stan/meta.yaml>`_
   :links: biotools: :biotools:`stan`

   Genome segmentation with hidden Markov models has become a useful tool to annotate genomic elements\, such as promoters and enhancers. STAN \(genomic STate ANnotation\) implements \(bidirectional\) hidden Markov models \(HMMs\) using a variety of different probability distributions\, which can model a wide range of current genomic data \(e.g. continuous\, discrete\, binary\). STAN de novo learns and annotates the genome into a given number of \'genomic states\'. The \'genomic states\' may for instance reflect distinct genome\-associated protein complexes \(e.g. \'transcription states\'\) or describe recurring patterns of chromatin features \(referred to as \'chromatin states\'\). Unlike other tools\, STAN also allows for the integration of strand\-specific \(e.g. RNA\) and non\-strand\-specific data \(e.g. ChIP\).


.. conda:package:: bioconductor-stan

   |downloads_bioconductor-stan| |docker_bioconductor-stan|

   :versions:
      
      

      ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gviz: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
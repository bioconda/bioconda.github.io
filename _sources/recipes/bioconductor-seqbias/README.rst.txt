.. title:: Package Recipe 'bioconductor-seqbias'
.. highlight: bash


bioconductor-seqbias
====================

.. conda:recipe:: bioconductor-seqbias
   :replaces_section_title:

   This package implements a model of per\-position sequencing bias in high\-throughput sequencing data using a simple Bayesian network\, the structure and parameters of which are trained on a set of aligned reads and a reference genome sequence.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqbias.html
   :license: LGPL-3
   :recipe: /`bioconductor-seqbias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqbias/meta.yaml>`_

   


.. conda:package:: bioconductor-seqbias

   |downloads_bioconductor-seqbias| |docker_bioconductor-seqbias|

   :versions: 1.30.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-seqbias|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqbias

   and update with::

      conda update bioconductor-seqbias

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqbias


.. |required_by_bioconductor-seqbias| conda:required_by:: bioconductor-seqbias
.. |downloads_bioconductor-seqbias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqbias.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqbias| image:: https://quay.io/repository/biocontainers/bioconductor-seqbias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqbias







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqbias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqbias/README.html


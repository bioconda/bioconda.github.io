.. title:: Package Recipe 'bioconductor-rsvsim'
.. highlight: bash


bioconductor-rsvsim
===================

.. conda:recipe:: bioconductor-rsvsim
   :replaces_section_title:

   RSVSim is a package for the simulation of deletions\, insertions\, inversion\, tandem\-duplications and translocations of various sizes in any genome available as FASTA\-file or BSgenome data package. SV breakpoints can be placed uniformly accross the whole genome\, with a bias towards repeat regions and regions of high homology \(for hg19\) or at user\-supplied coordinates.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RSVSim.html
   :license: LGPL-3
   :recipe: /`bioconductor-rsvsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsvsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsvsim/meta.yaml>`_
   :links: biotools: :biotools:`rsvsim`, doi: :doi:`10.1093/bioinformatics/btt198`

   


.. conda:package:: bioconductor-rsvsim

   |downloads_bioconductor-rsvsim| |docker_bioconductor-rsvsim|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rsvsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsvsim

   and update with::

      conda update bioconductor-rsvsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rsvsim


.. |required_by_bioconductor-rsvsim| conda:required_by:: bioconductor-rsvsim
.. |downloads_bioconductor-rsvsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsvsim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rsvsim| image:: https://quay.io/repository/biocontainers/bioconductor-rsvsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsvsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsvsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsvsim/README.html


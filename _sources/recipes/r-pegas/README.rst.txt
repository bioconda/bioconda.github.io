:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pegas'
.. highlight: bash

r-pegas
=======

.. conda:recipe:: r-pegas
   :replaces_section_title:

   Functions for reading\, writing\, plotting\, analysing\, and manipulating allelic and haplotypic data\, including from VCF files\, and for the analysis of population nucleotide sequences and micro\-satellites including coalescent analyses\, linkage disequilibrium\, population structure \(Fst\, Amova\) and equilibrium \(HWE\)\, haplotype networks\, minimum spanning tree and network\, and median\-joining networks.

   :homepage: http://ape-package.ird.fr/pegas.html
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pegas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pegas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pegas/meta.yaml>`_

   


.. conda:package:: r-pegas

   |downloads_r-pegas| |docker_r-pegas|

   :versions: 0.11-1, 0.11-0, 0.10-0
   
   :depends r-adegenet: 
   
   :depends r-ape: >=2.4
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pegas

   and update with::

      conda update r-pegas

   or use the docker container::

      docker pull quay.io/biocontainers/r-pegas:<tag>

   (see `r-pegas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pegas| image:: https://img.shields.io/conda/dn/bioconda/r-pegas.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pegas| image:: https://quay.io/repository/biocontainers/r-pegas/status
   :target: https://quay.io/repository/biocontainers/r-pegas
.. _`r-pegas/tags`: https://quay.io/repository/biocontainers/r-pegas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pegas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pegas/README.html
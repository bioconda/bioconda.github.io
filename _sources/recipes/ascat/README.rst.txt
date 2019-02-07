.. title:: Package Recipe 'ascat'
.. highlight: bash


ascat
=====

.. conda:recipe:: ascat
   :replaces_section_title:

   ASCAT is a method to derive copy number profiles of tumour cells\,
   accounting for normal cell admixture and tumour aneuploidy \(Figure 1\).
   ASCAT infers tumour purity \(the fraction of tumour cells\) and ploidy \(the
   amount of DNA per tumour cell\, expressed as multiples of haploid genomes\)
   from SNP array or massively parallel sequencing data\, and calculates
   whole\-genome allele\-specific copy number profiles \(the number of copies of
   both parental alleles for all SNP loci across the genome\).


   :homepage: https://www.crick.ac.uk/research/a-z-researchers/researchers-v-y/peter-van-loo/software/
   :developer docs: https://github.com/Crick-CancerGenomics/ascat
   :license: GPL / GPL-3.0
   :recipe: /`ascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat/meta.yaml>`_
   :links: biotools: :biotools:`ascat`, doi: :doi:`10.1073/pnas.1009843107`

   


.. conda:package:: ascat

   |downloads_ascat| |docker_ascat|

   :versions: 2.5.2, 2.5.1, 2.5

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-r.devices`  :conda:package:`r-r.utils`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_ascat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ascat

   and update with::

      conda update ascat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ascat


.. |required_by_ascat| conda:required_by:: ascat
.. |downloads_ascat| image:: https://img.shields.io/conda/dn/bioconda/ascat.svg?style=flat
   :alt:   (downloads)
.. |docker_ascat| image:: https://quay.io/repository/biocontainers/ascat/status
   :target: https://quay.io/repository/biocontainers/ascat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ascat/README.html


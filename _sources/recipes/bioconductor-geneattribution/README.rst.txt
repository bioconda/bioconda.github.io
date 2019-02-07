.. title:: Package Recipe 'bioconductor-geneattribution'
.. highlight: bash


bioconductor-geneattribution
============================

.. conda:recipe:: bioconductor-geneattribution
   :replaces_section_title:

   Identification of the most likely gene or genes through which variation at a given genomic locus in the human genome acts. The most basic functionality assumes that the closer gene is to the input locus\, the more likely the gene is to be causative. Additionally\, any empirical data that links genomic regions to genes \(e.g. eQTL or genome conformation data\) can be used if it is supplied in the UCSC .BED file format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geneAttribution.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneattribution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneattribution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneattribution/meta.yaml>`_
   :links: biotools: :biotools:`geneattribution`, doi: :doi:`10.1093/bioinformatics/btw698`

   


.. conda:package:: bioconductor-geneattribution

   |downloads_bioconductor-geneattribution| |docker_bioconductor-geneattribution|

   :versions: 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-geneattribution|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneattribution

   and update with::

      conda update bioconductor-geneattribution

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-geneattribution


.. |required_by_bioconductor-geneattribution| conda:required_by:: bioconductor-geneattribution
.. |downloads_bioconductor-geneattribution| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneattribution.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geneattribution| image:: https://quay.io/repository/biocontainers/bioconductor-geneattribution/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneattribution







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html


.. title:: Package Recipe 'bioconductor-mdts'
.. highlight: bash


bioconductor-mdts
=================

.. conda:recipe:: bioconductor-mdts
   :replaces_section_title:

   A package for the detection of de novo copy number deletions in targeted sequencing of trios with high sensitivity and positive predictive value.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MDTS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mdts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdts/meta.yaml>`_

   


.. conda:package:: bioconductor-mdts

   |downloads_bioconductor-mdts| |docker_bioconductor-mdts|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-mdts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdts

   and update with::

      conda update bioconductor-mdts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mdts


.. |required_by_bioconductor-mdts| conda:required_by:: bioconductor-mdts
.. |downloads_bioconductor-mdts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mdts| image:: https://quay.io/repository/biocontainers/bioconductor-mdts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdts/README.html


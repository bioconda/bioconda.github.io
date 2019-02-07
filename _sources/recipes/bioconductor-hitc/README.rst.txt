.. title:: Package Recipe 'bioconductor-hitc'
.. highlight: bash


bioconductor-hitc
=================

.. conda:recipe:: bioconductor-hitc
   :replaces_section_title:

   The HiTC package was developed to explore high\-throughput \'C\' data such as 5C or Hi\-C. Dedicated R classes as well as standard methods for quality controls\, normalization\, visualization\, and further analysis are also provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HiTC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hitc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc/meta.yaml>`_
   :links: biotools: :biotools:`hitc`

   


.. conda:package:: bioconductor-hitc

   |downloads_bioconductor-hitc| |docker_bioconductor-hitc|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-hitc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hitc

   and update with::

      conda update bioconductor-hitc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hitc


.. |required_by_bioconductor-hitc| conda:required_by:: bioconductor-hitc
.. |downloads_bioconductor-hitc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hitc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hitc| image:: https://quay.io/repository/biocontainers/bioconductor-hitc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hitc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hitc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hitc/README.html


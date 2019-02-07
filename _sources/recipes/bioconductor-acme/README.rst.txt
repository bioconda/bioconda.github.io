.. title:: Package Recipe 'bioconductor-acme'
.. highlight: bash


bioconductor-acme
=================

.. conda:recipe:: bioconductor-acme
   :replaces_section_title:

   ACME \(Algorithms for Calculating Microarray Enrichment\) is a set of tools for analysing tiling array ChIP\/chip\, DNAse hypersensitivity\, or other experiments that result in regions of the genome showing \"enrichment\".  It does not rely on a specific array technology \(although the array should be a \"tiling\" array\)\, is very general \(can be applied in experiments resulting in regions of enrichment\)\, and is very insensitive to array noise or normalization methods.  It is also very fast and can be applied on whole\-genome tiling array experiments quite easily with enough memory.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ACME.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-acme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acme/meta.yaml>`_
   :links: biotools: :biotools:`acme`

   


.. conda:package:: bioconductor-acme

   |downloads_bioconductor-acme| |docker_bioconductor-acme|

   :versions: 2.38.0, 2.36.0, 2.34.0, 2.32.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-acme|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-acme

   and update with::

      conda update bioconductor-acme

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-acme


.. |required_by_bioconductor-acme| conda:required_by:: bioconductor-acme
.. |downloads_bioconductor-acme| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acme.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-acme| image:: https://quay.io/repository/biocontainers/bioconductor-acme/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acme







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acme/README.html


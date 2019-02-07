.. title:: Package Recipe 'r-spp'
.. highlight: bash


r-spp
=====

.. conda:recipe:: r-spp
   :replaces_section_title:

   Analysis of ChIP\-seq and other functional sequencing data \[Kharchenko PV \(2008\) \<DOI\:10.1038\/nbt.1508\>\].

   :homepage: https://CRAN.R-project.org/package=spp
   :license: GPL2 / GPL-2
   :recipe: /`r-spp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp/meta.yaml>`_
   :links: biotools: :biotools:`spp`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: r-spp

   |downloads_r-spp| |docker_r-spp|

   :versions: 1.15.5, 1.15.2, 1.14post, 1.14, 1.13, 1.11

   :depends: :conda:package:`bioconductor-rsamtools` >=1.32.0,<1.34.0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-bh` >=1.66 :conda:package:`r-catools`  :conda:package:`r-rcpp`  

   :required~by: |required_by_r-spp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-spp

   and update with::

      conda update r-spp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-spp


.. |required_by_r-spp| conda:required_by:: r-spp
.. |downloads_r-spp| image:: https://img.shields.io/conda/dn/bioconda/r-spp.svg?style=flat
   :alt:   (downloads)
.. |docker_r-spp| image:: https://quay.io/repository/biocontainers/r-spp/status
   :target: https://quay.io/repository/biocontainers/r-spp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spp/README.html


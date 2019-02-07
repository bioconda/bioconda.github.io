.. title:: Package Recipe 'r-coloc'
.. highlight: bash


r-coloc
=======

.. conda:recipe:: r-coloc
   :replaces_section_title:

   Performs the colocalisation tests described in Plagnol et al \(2009\) \<doi\:10.1093\/biostatistics\/kxn039\>\, Wallace et al \(2013\) \<doi\:10.1002\/gepi.21765\> and Giambartolomei et al \(2013\) \<doi\:10.1371\/journal.pgen.1004383\>.

   :homepage: https://CRAN.R-project.org/package=coloc
   :license: GPL / GPL
   :recipe: /`r-coloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-coloc/meta.yaml>`_

   


.. conda:package:: r-coloc

   |downloads_r-coloc| |docker_r-coloc|

   :versions: 3.1, 2.3_1

   :depends: :conda:package:`bioconductor-snpstats`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-bma`  :conda:package:`r-flashclust`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape`  :conda:package:`r-speedglm`  

   :required~by: |required_by_r-coloc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-coloc

   and update with::

      conda update r-coloc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-coloc


.. |required_by_r-coloc| conda:required_by:: r-coloc
.. |downloads_r-coloc| image:: https://img.shields.io/conda/dn/bioconda/r-coloc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-coloc| image:: https://quay.io/repository/biocontainers/r-coloc/status
   :target: https://quay.io/repository/biocontainers/r-coloc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-coloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-coloc/README.html


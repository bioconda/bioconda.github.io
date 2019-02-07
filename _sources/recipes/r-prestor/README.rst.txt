.. title:: Package Recipe 'prestor'
.. highlight: bash


prestor
=======

.. conda:recipe:: r-prestor
   :replaces_section_title:

   A prototype package for generating quality control plots from pRESTO output.

   :homepage: https://bitbucket.org/javh/prototype-prestor
   :license: `OTHER / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) <https://creativecommons.org/licenses/by-sa/4.0/legalcode>`_
   :recipe: /`r-prestor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor/meta.yaml>`_

   


.. conda:package:: prestor

   |downloads_prestor| |docker_prestor|

   :versions: 07f9c7caeb60

   :depends: :conda:package:`pandoc`  :conda:package:`r-alakazam`  :conda:package:`r-base` >=3.4.1 :conda:package:`r-bibtex`  :conda:package:`r-captioner`  :conda:package:`r-devtools`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-hexbin`  :conda:package:`r-knitr`  :conda:package:`r-optparse`  :conda:package:`r-rcpp` >=0.12.11 :conda:package:`r-rmarkdown`  :conda:package:`r-roxygen2`  :conda:package:`r-testthat`  :conda:package:`r-tidyr`  :conda:package:`texlive-core`  

   :required~by: |required_by_prestor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prestor

   and update with::

      conda update prestor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prestor


.. |required_by_prestor| conda:required_by:: prestor
.. |downloads_prestor| image:: https://img.shields.io/conda/dn/bioconda/prestor.svg?style=flat
   :alt:   (downloads)
.. |docker_prestor| image:: https://quay.io/repository/biocontainers/prestor/status
   :target: https://quay.io/repository/biocontainers/prestor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prestor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prestor/README.html


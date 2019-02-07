.. title:: Package Recipe 'r-scimpute'
.. highlight: bash


r-scimpute
==========

.. conda:recipe:: r-scimpute
   :replaces_section_title:

   scImpute is accurate and robust imputation of single\-cell RNA sequencing data.

   :homepage: https://github.com/Vivianstats/scImpute
   :license: GPL / GPL
   :recipe: /`r-scimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-03405-7`

   


.. conda:package:: r-scimpute

   |downloads_r-scimpute| |docker_r-scimpute|

   :versions: 0.0.8, 0.0.6

   :depends: :conda:package:`parallel`  :conda:package:`r` >=3.3.2 :conda:package:`r-devtools`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-kernlab`  :conda:package:`r-knitr`  :conda:package:`r-markdown`  :conda:package:`r-penalized`  :conda:package:`r-rsvd`  

   :required~by: |required_by_r-scimpute|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scimpute

   and update with::

      conda update r-scimpute

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-scimpute


.. |required_by_r-scimpute| conda:required_by:: r-scimpute
.. |downloads_r-scimpute| image:: https://img.shields.io/conda/dn/bioconda/r-scimpute.svg?style=flat
   :alt:   (downloads)
.. |docker_r-scimpute| image:: https://quay.io/repository/biocontainers/r-scimpute/status
   :target: https://quay.io/repository/biocontainers/r-scimpute







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scimpute/README.html


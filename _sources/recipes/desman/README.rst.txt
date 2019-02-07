.. title:: Package Recipe 'desman'
.. highlight: bash


desman
======

.. conda:recipe:: desman
   :replaces_section_title:

   De novo Extraction of Strains from MetAgeNomes

   :homepage: https://github.com/chrisquince/DESMAN
   :license: BSD
   :recipe: /`desman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1309-9`

   


.. conda:package:: desman

   |downloads_desman| |docker_desman|

   :versions: 2.1

   :depends: :conda:package:`bcbiogff`  :conda:package:`biopython`  :conda:package:`cython`  :conda:package:`gsl` 1.16* :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`perl` 5.22.0* :conda:package:`pysam`  :conda:package:`python` 3.5* :conda:package:`r-getopt`  :conda:package:`r-ggplot2`  :conda:package:`r-labeling`  :conda:package:`r-reshape`  :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_desman|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install desman

   and update with::

      conda update desman

   or use the docker container::

      docker pull quay.io/repository/biocontainers/desman


.. |required_by_desman| conda:required_by:: desman
.. |downloads_desman| image:: https://img.shields.io/conda/dn/bioconda/desman.svg?style=flat
   :alt:   (downloads)
.. |docker_desman| image:: https://quay.io/repository/biocontainers/desman/status
   :target: https://quay.io/repository/biocontainers/desman







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desman/README.html


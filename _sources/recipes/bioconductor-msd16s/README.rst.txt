.. title:: Package Recipe 'bioconductor-msd16s'
.. highlight: bash


bioconductor-msd16s
===================

.. conda:recipe:: bioconductor-msd16s
   :replaces_section_title:

   Gut 16S sequencing expression data from 992 healthy and moderate\-to\-severe diarrhetic samples used in \'Diarrhea in young children from low\-income countries leads to large\-scale alterations in intestinal microbiota composition\'.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/msd16s.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msd16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s/meta.yaml>`_

   


.. conda:package:: bioconductor-msd16s

   |downloads_bioconductor-msd16s| |docker_bioconductor-msd16s|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-metagenomeseq` >=1.24.0,<1.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-msd16s|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msd16s

   and update with::

      conda update bioconductor-msd16s

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-msd16s


.. |required_by_bioconductor-msd16s| conda:required_by:: bioconductor-msd16s
.. |downloads_bioconductor-msd16s| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msd16s.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-msd16s| image:: https://quay.io/repository/biocontainers/bioconductor-msd16s/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msd16s







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msd16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msd16s/README.html


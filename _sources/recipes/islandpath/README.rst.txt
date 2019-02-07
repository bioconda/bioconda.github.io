.. title:: Package Recipe 'islandpath'
.. highlight: bash


islandpath
==========

.. conda:recipe:: islandpath
   :replaces_section_title:

   IslandPath\-DIMOB is a standalone software to predict genomic islands in bacterial and archaeal genomes based on the presence of dinucleotide biases and mobility genes.

   Genomic islands \(GIs\) are clusters of genes in prokaryotic genomes of probable horizontal origin. GIs are disproportionately associated with microbial adaptations of medical or environmental interest.

   :homepage: http://www.pathogenomics.sfu.ca/islandpath/
   :license: GNU General Public License v3.0
   :recipe: /`islandpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/islandpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/islandpath/meta.yaml>`_

   


.. conda:package:: islandpath

   |downloads_islandpath| |docker_islandpath|

   :versions: 1.0.4, 1.0.3

   :depends: :conda:package:`hmmer`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-config-simple`  :conda:package:`perl-data-dumper`  :conda:package:`perl-log-log4perl`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-singleton`  

   :required~by: |required_by_islandpath|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install islandpath

   and update with::

      conda update islandpath

   or use the docker container::

      docker pull quay.io/repository/biocontainers/islandpath


.. |required_by_islandpath| conda:required_by:: islandpath
.. |downloads_islandpath| image:: https://img.shields.io/conda/dn/bioconda/islandpath.svg?style=flat
   :alt:   (downloads)
.. |docker_islandpath| image:: https://quay.io/repository/biocontainers/islandpath/status
   :target: https://quay.io/repository/biocontainers/islandpath







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/islandpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/islandpath/README.html


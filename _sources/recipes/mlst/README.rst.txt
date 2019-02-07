.. title:: Package Recipe 'mlst'
.. highlight: bash


mlst
====

.. conda:recipe:: mlst
   :replaces_section_title:

   Scan contig files against PubMLST typing schemes

   :homepage: https://github.com/tseemann/mlst
   :license: GPL / GPL-2.0
   :recipe: /`mlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlst/meta.yaml>`_
   :links: biotools: :biotools:`mlst`

   


.. conda:package:: mlst

   |downloads_mlst| |docker_mlst|

   :versions: 2.16.1, 2.16, 2.15.2, 2.15.1, 2.15, 2.14, 2.13, 2.12, 2.11, 2.10, 2.9, 2.6

   :depends: :conda:package:`blast` >=2.7.1 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-json`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-moo`  :conda:package:`zlib`  

   :required~by: |required_by_mlst|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mlst

   and update with::

      conda update mlst

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mlst


.. |required_by_mlst| conda:required_by:: mlst
.. |downloads_mlst| image:: https://img.shields.io/conda/dn/bioconda/mlst.svg?style=flat
   :alt:   (downloads)
.. |docker_mlst| image:: https://quay.io/repository/biocontainers/mlst/status
   :target: https://quay.io/repository/biocontainers/mlst







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlst/README.html


.. title:: Package Recipe 'pindel'
.. highlight: bash


pindel
======

.. conda:recipe:: pindel
   :replaces_section_title:

   Pindel can detect breakpoints of large deletions\, medium sized insertions\, inversions\, tandem duplications and other structural variants at single\-based resolution from next\-gen sequence data

   :homepage: http://gmt.genome.wustl.edu/packages/pindel/index.html
   :license: GPLv3
   :recipe: /`pindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pindel/meta.yaml>`_
   :links: biotools: :biotools:`pindel`

   


.. conda:package:: pindel

   |downloads_pindel| |docker_pindel|

   :versions: 0.2.5b9, 0.2.5b8

   :depends: :conda:package:`htslib` >=1.7,<1.8.0a0 :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_pindel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pindel

   and update with::

      conda update pindel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pindel


.. |required_by_pindel| conda:required_by:: pindel
.. |downloads_pindel| image:: https://img.shields.io/conda/dn/bioconda/pindel.svg?style=flat
   :alt:   (downloads)
.. |docker_pindel| image:: https://quay.io/repository/biocontainers/pindel/status
   :target: https://quay.io/repository/biocontainers/pindel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pindel/README.html


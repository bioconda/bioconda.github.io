.. title:: Package Recipe 'gubbins'
.. highlight: bash


gubbins
=======

.. conda:recipe:: gubbins
   :replaces_section_title:

   Rapid phylogenetic analysis of large samples of recombinant bacterial whole genome sequences using Gubbins.

   :homepage: https://github.com/sanger-pathogens/gubbins
   :license: GPL-2.0
   :recipe: /`gubbins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins/meta.yaml>`_

   


.. conda:package:: gubbins

   |downloads_gubbins| |docker_gubbins|

   :versions: 2.3.4, 2.3.2, 2.3.1, 2.2.1

   :depends: :conda:package:`biopython` >=1.59 :conda:package:`dendropy` >=4.0.2 :conda:package:`fasttree`  :conda:package:`nose` >=1.3 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`raxml`  :conda:package:`reportlab` >=3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_gubbins|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gubbins

   and update with::

      conda update gubbins

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gubbins


.. |required_by_gubbins| conda:required_by:: gubbins
.. |downloads_gubbins| image:: https://img.shields.io/conda/dn/bioconda/gubbins.svg?style=flat
   :alt:   (downloads)
.. |docker_gubbins| image:: https://quay.io/repository/biocontainers/gubbins/status
   :target: https://quay.io/repository/biocontainers/gubbins







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gubbins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gubbins/README.html


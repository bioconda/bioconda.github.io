.. title:: Package Recipe 'gffmunger'
.. highlight: bash


gffmunger
=========

.. conda:recipe:: gffmunger
   :replaces_section_title:

   Munges GFF3 files exported from Chado database to make them suitable for loading into WebApollo

   :homepage: https://github.com/sanger-pathogens/gffmunger
   :license: GPL / GPL-3.0
   :recipe: /`gffmunger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffmunger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffmunger/meta.yaml>`_

   


.. conda:package:: gffmunger

   |downloads_gffmunger| |docker_gffmunger|

   :versions: 0.0.1

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`gffutils`  :conda:package:`python` >=3.6 :conda:package:`pyyaml`  

   :required~by: |required_by_gffmunger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffmunger

   and update with::

      conda update gffmunger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gffmunger


.. |required_by_gffmunger| conda:required_by:: gffmunger
.. |downloads_gffmunger| image:: https://img.shields.io/conda/dn/bioconda/gffmunger.svg?style=flat
   :alt:   (downloads)
.. |docker_gffmunger| image:: https://quay.io/repository/biocontainers/gffmunger/status
   :target: https://quay.io/repository/biocontainers/gffmunger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffmunger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffmunger/README.html


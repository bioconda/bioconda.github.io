.. title:: Package Recipe 'stereogene'
.. highlight: bash


stereogene
==========

.. conda:recipe:: stereogene
   :replaces_section_title:

   StereoGene\: Rapid Estimation of Genomewide Correlation of Continuous or Interval Feature Data

   :homepage: http://stereogene.bioinf.fbb.msu.ru
   :license: MIT / Artistic-2.0
   :recipe: /`stereogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stereogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stereogene/meta.yaml>`_
   :links: doi: :doi:`10.1101/059584`

   


.. conda:package:: stereogene

   |downloads_stereogene| |docker_stereogene|

   :versions: 2.20

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_stereogene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stereogene

   and update with::

      conda update stereogene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/stereogene


.. |required_by_stereogene| conda:required_by:: stereogene
.. |downloads_stereogene| image:: https://img.shields.io/conda/dn/bioconda/stereogene.svg?style=flat
   :alt:   (downloads)
.. |docker_stereogene| image:: https://quay.io/repository/biocontainers/stereogene/status
   :target: https://quay.io/repository/biocontainers/stereogene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stereogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stereogene/README.html


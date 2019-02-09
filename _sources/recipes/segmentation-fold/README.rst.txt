.. title:: Package Recipe 'segmentation-fold'
.. highlight: bash


segmentation-fold
=================

.. conda:recipe:: segmentation-fold
   :replaces_section_title:

   RNA\-Folding with predefined segments including K\-turns and loop\-E\-motifs

   :homepage: https://github.com/yhoogstrate/segmentation-fold
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`segmentation-fold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold/meta.yaml>`_

   


.. conda:package:: segmentation-fold

   |downloads_segmentation-fold| |docker_segmentation-fold|

   :versions: 1.7.0, 1.6.8

   :depends: :conda:package:`boost` ==1.63.0 :conda:package:`click` >=4.0 :conda:package:`htseq` >=0.6.1 :conda:package:`libcxx`  :conda:package:`pysam` >=0.8.1,<=0.8.3 :conda:package:`python` ==2.7.12 

   :required~by: |required_by_segmentation-fold|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segmentation-fold

   and update with::

      conda update segmentation-fold

   or use the docker container::

      docker pull quay.io/repository/biocontainers/segmentation-fold


.. |required_by_segmentation-fold| conda:required_by:: segmentation-fold
.. |downloads_segmentation-fold| image:: https://img.shields.io/conda/dn/bioconda/segmentation-fold.svg?style=flat
   :alt:   (downloads)
.. |docker_segmentation-fold| image:: https://quay.io/repository/biocontainers/segmentation-fold/status
   :target: https://quay.io/repository/biocontainers/segmentation-fold







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmentation-fold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmentation-fold/README.html


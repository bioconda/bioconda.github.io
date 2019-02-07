.. title:: Package Recipe 'shapemapper'
.. highlight: bash


shapemapper
===========

.. conda:recipe:: shapemapper
   :replaces_section_title:

   ShapeMapper converts raw sequencing files into mutational profiles\, creates SHAPE reactivity plots\, and provides extensive diagnostic information useful for experiment analysis and troubleshooting.

   :homepage: http://www.chem.unc.edu/rna/software.html
   :license: GPL
   :recipe: /`shapemapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapemapper/meta.yaml>`_

   


.. conda:package:: shapemapper

   |downloads_shapemapper| |docker_shapemapper|

   :versions: 1.2

   :depends: :conda:package:`bowtie2`  :conda:package:`httplib2`  :conda:package:`libgcc`  :conda:package:`matplotlib`  :conda:package:`python` 2.7* :conda:package:`rnastructure`  

   :required~by: |required_by_shapemapper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shapemapper

   and update with::

      conda update shapemapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shapemapper


.. |required_by_shapemapper| conda:required_by:: shapemapper
.. |downloads_shapemapper| image:: https://img.shields.io/conda/dn/bioconda/shapemapper.svg?style=flat
   :alt:   (downloads)
.. |docker_shapemapper| image:: https://quay.io/repository/biocontainers/shapemapper/status
   :target: https://quay.io/repository/biocontainers/shapemapper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapemapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapemapper/README.html


.. title:: Package Recipe 'rpkmforgenes'
.. highlight: bash


rpkmforgenes
============

.. conda:recipe:: rpkmforgenes
   :replaces_section_title:

   Calculates gene expression from a read mapping file

   :homepage: https://github.com/danielramskold/S3_species-specific_sequencing
   :license: Creative Commons Attribution License
   :recipe: /`rpkmforgenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpkmforgenes/meta.yaml>`_

   


.. conda:package:: rpkmforgenes

   |downloads_rpkmforgenes| |docker_rpkmforgenes|

   :versions: 1.0.1

   :depends: :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7* 

   :required~by: |required_by_rpkmforgenes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rpkmforgenes

   and update with::

      conda update rpkmforgenes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rpkmforgenes


.. |required_by_rpkmforgenes| conda:required_by:: rpkmforgenes
.. |downloads_rpkmforgenes| image:: https://img.shields.io/conda/dn/bioconda/rpkmforgenes.svg?style=flat
   :alt:   (downloads)
.. |docker_rpkmforgenes| image:: https://quay.io/repository/biocontainers/rpkmforgenes/status
   :target: https://quay.io/repository/biocontainers/rpkmforgenes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpkmforgenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpkmforgenes/README.html


.. title:: Package Recipe 'valet'
.. highlight: bash


valet
=====

.. conda:recipe:: valet
   :replaces_section_title:

   Pipeline for detecting mis\-assemblies in metagenomic assemblies

   :homepage: https://github.com/marbl/VALET
   :license: MIT
   :recipe: /`valet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/valet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/valet/meta.yaml>`_

   


.. conda:package:: valet

   |downloads_valet| |docker_valet|

   :versions: 1.0

   :depends: :conda:package:`bedtools`  :conda:package:`bowtie2`  :conda:package:`numpy`  :conda:package:`perl`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  :conda:package:`samtools`  :conda:package:`scipy`  

   :required~by: |required_by_valet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install valet

   and update with::

      conda update valet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/valet


.. |required_by_valet| conda:required_by:: valet
.. |downloads_valet| image:: https://img.shields.io/conda/dn/bioconda/valet.svg?style=flat
   :alt:   (downloads)
.. |docker_valet| image:: https://quay.io/repository/biocontainers/valet/status
   :target: https://quay.io/repository/biocontainers/valet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/valet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/valet/README.html


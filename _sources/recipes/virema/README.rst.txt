.. title:: Package Recipe 'virema'
.. highlight: bash


virema
======

.. conda:recipe:: virema
   :replaces_section_title:

   ViReMa \(Viral Recombination Mapper\) detects and reports recombination or fusion events in virus genomes using deep sequencing datasets.

   :homepage: https://sourceforge.net/projects/virema/
   :license: Custom OSS
   :recipe: /`virema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virema/meta.yaml>`_

   


.. conda:package:: virema

   |downloads_virema| |docker_virema|

   :versions: 0.6

   :depends: :conda:package:`bowtie` <=1.0.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_virema|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virema

   and update with::

      conda update virema

   or use the docker container::

      docker pull quay.io/repository/biocontainers/virema


.. |required_by_virema| conda:required_by:: virema
.. |downloads_virema| image:: https://img.shields.io/conda/dn/bioconda/virema.svg?style=flat
   :alt:   (downloads)
.. |docker_virema| image:: https://quay.io/repository/biocontainers/virema/status
   :target: https://quay.io/repository/biocontainers/virema







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virema/README.html


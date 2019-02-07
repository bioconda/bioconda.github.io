.. title:: Package Recipe 'strelka'
.. highlight: bash


strelka
=======

.. conda:recipe:: strelka
   :replaces_section_title:

   Strelka calls somatic and germline small variants from mapped sequencing reads

   :homepage: https://github.com/Illumina/strelka
   :license: GPL / GPL-3.0
   :recipe: /`strelka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka/meta.yaml>`_
   :links: biotools: :biotools:`strelka`

   


.. conda:package:: strelka

   |downloads_strelka| |docker_strelka|

   :versions: 2.9.10, 2.9.7, 2.9.4, 2.9.3, 2.9.2, 2.8.4, 2.8.2, 2.7.1

   :depends: :conda:package:`python` 2.7.* 

   :required~by: |required_by_strelka|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strelka

   and update with::

      conda update strelka

   or use the docker container::

      docker pull quay.io/repository/biocontainers/strelka


.. |required_by_strelka| conda:required_by:: strelka
.. |downloads_strelka| image:: https://img.shields.io/conda/dn/bioconda/strelka.svg?style=flat
   :alt:   (downloads)
.. |docker_strelka| image:: https://quay.io/repository/biocontainers/strelka/status
   :target: https://quay.io/repository/biocontainers/strelka







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strelka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strelka/README.html


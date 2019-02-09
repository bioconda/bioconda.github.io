.. title:: Package Recipe 'amused'
.. highlight: bash


amused
======

.. conda:recipe:: amused
   :replaces_section_title:

   Auditing Motifs Using Statistical Enrichment \& Depletion

   :homepage: https://github.com/Carldeboer/AMUSED
   :license: GPL-2.0
   :recipe: /`amused <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused/meta.yaml>`_

   


.. conda:package:: amused

   |downloads_amused| |docker_amused|

   :versions: 1.0

   :depends: :conda:package:`jemalloc`  :conda:package:`ruby` >=2.4 :conda:package:`ruby-dna-tools`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_amused|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amused

   and update with::

      conda update amused

   or use the docker container::

      docker pull quay.io/repository/biocontainers/amused


.. |required_by_amused| conda:required_by:: amused
.. |downloads_amused| image:: https://img.shields.io/conda/dn/bioconda/amused.svg?style=flat
   :alt:   (downloads)
.. |docker_amused| image:: https://quay.io/repository/biocontainers/amused/status
   :target: https://quay.io/repository/biocontainers/amused







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amused/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amused/README.html


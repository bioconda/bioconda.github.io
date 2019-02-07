.. title:: Package Recipe 'artemis'
.. highlight: bash


artemis
=======

.. conda:recipe:: artemis
   :replaces_section_title:

   A set of Java genome visualization tools including the Artemis genome browser \& annotation tool\, ACT DNA sequence comparison viewer\, DNA Plotter image generation tool and the BamView BAM\/CRAM file viewer.

   :homepage: http://sanger-pathogens.github.io/Artemis/
   :license: GPL / GPL-3.0
   :recipe: /`artemis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis/meta.yaml>`_
   :links: biotools: :biotools:`artemis`

   


.. conda:package:: artemis

   |downloads_artemis| |docker_artemis|

   :versions: 18.0.2, 18.0.1

   :depends: :conda:package:`openjdk` >=9 

   :required~by: |required_by_artemis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install artemis

   and update with::

      conda update artemis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/artemis


.. |required_by_artemis| conda:required_by:: artemis
.. |downloads_artemis| image:: https://img.shields.io/conda/dn/bioconda/artemis.svg?style=flat
   :alt:   (downloads)
.. |docker_artemis| image:: https://quay.io/repository/biocontainers/artemis/status
   :target: https://quay.io/repository/biocontainers/artemis






Notes
-----
The applications can be run using the following commands\: art\, act\, dnaplotter or bamview


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artemis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artemis/README.html


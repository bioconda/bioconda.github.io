:orphan:  .. only available via index, not via toctree

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

   :versions: 18.1.0-0, 18.0.3-0, 18.0.2-0, 18.0.1-0
   
   :depends openjdk: >=9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install artemis

   and update with::

      conda update artemis

   or use the docker container::

      docker pull quay.io/biocontainers/artemis:<tag>

   (see `artemis/tags`_ for valid values for ``<tag>``)


.. |downloads_artemis| image:: https://img.shields.io/conda/dn/bioconda/artemis.svg?style=flat
   :target: https://anaconda.org/bioconda/artemis
   :alt:   (downloads)
.. |docker_artemis| image:: https://quay.io/repository/biocontainers/artemis/status
   :target: https://quay.io/repository/biocontainers/artemis
.. _`artemis/tags`: https://quay.io/repository/biocontainers/artemis?tab=tags






Notes
-----
The applications can be run using the following commands\: art\, act\, dnaplotter or bamview


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artemis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artemis/README.html
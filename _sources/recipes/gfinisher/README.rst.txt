:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfinisher'
.. highlight: bash

gfinisher
=========

.. conda:recipe:: gfinisher
   :replaces_section_title:

   GFinisher is an application tools for refinement and finalization of prokaryotic genomes assemblies using the bias of GC Skew to identify assembly errors and organizes the contigs\/scaffolds with genomes references.

   :homepage: https://sourceforge.net/projects/gfinisher/
   :license: Unknown
   :recipe: /`gfinisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher/meta.yaml>`_

   


.. conda:package:: gfinisher

   |downloads_gfinisher| |docker_gfinisher|

   :versions: 1.4-0
   
   :depends java-jdk: >=6
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfinisher

   and update with::

      conda update gfinisher

   or use the docker container::

      docker pull quay.io/biocontainers/gfinisher:<tag>

   (see `gfinisher/tags`_ for valid values for ``<tag>``)


.. |downloads_gfinisher| image:: https://img.shields.io/conda/dn/bioconda/gfinisher.svg?style=flat
   :alt:   (downloads)
.. |docker_gfinisher| image:: https://quay.io/repository/biocontainers/gfinisher/status
   :target: https://quay.io/repository/biocontainers/gfinisher
.. _`gfinisher/tags`: https://quay.io/repository/biocontainers/gfinisher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfinisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfinisher/README.html
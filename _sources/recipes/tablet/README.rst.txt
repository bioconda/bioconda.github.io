:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tablet'
.. highlight: bash

tablet
======

.. conda:recipe:: tablet
   :replaces_section_title:

   Tablet is a lightweight\, high\-performance graphical viewer for next generation sequence assemblies and alignments.

   :homepage: https://ics.hutton.ac.uk/tablet
   :license: BSD-2-Clause
   :recipe: /`tablet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tablet/meta.yaml>`_

   


.. conda:package:: tablet

   |downloads_tablet| |docker_tablet|

   :versions: 1.17.08.17-1, 1.17.08.17-0
   
   :depends openjdk: >=8,<9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tablet

   and update with::

      conda update tablet

   or use the docker container::

      docker pull quay.io/biocontainers/tablet:<tag>

   (see `tablet/tags`_ for valid values for ``<tag>``)


.. |downloads_tablet| image:: https://img.shields.io/conda/dn/bioconda/tablet.svg?style=flat
   :alt:   (downloads)
.. |docker_tablet| image:: https://quay.io/repository/biocontainers/tablet/status
   :target: https://quay.io/repository/biocontainers/tablet
.. _`tablet/tags`: https://quay.io/repository/biocontainers/tablet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tablet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tablet/README.html
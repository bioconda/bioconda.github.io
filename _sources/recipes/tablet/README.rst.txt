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

   :versions: 1.17.08.17

   :depends: :conda:package:`openjdk` >=8,<9 

   :required~by: |required_by_tablet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tablet

   and update with::

      conda update tablet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tablet


.. |required_by_tablet| conda:required_by:: tablet
.. |downloads_tablet| image:: https://img.shields.io/conda/dn/bioconda/tablet.svg?style=flat
   :alt:   (downloads)
.. |docker_tablet| image:: https://quay.io/repository/biocontainers/tablet/status
   :target: https://quay.io/repository/biocontainers/tablet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tablet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tablet/README.html


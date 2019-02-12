.. title:: Package Recipe 'bbmap'
.. highlight: bash


bbmap
=====

.. conda:recipe:: bbmap
   :replaces_section_title:

   BBMap is a short read aligner\, as well as various other bioinformatic tools.

   :homepage: https://sourceforge.net/projects/bbmap
   :documentation: https://jgi.doe.gov/data-and-tools/bbtools/bb-tools-user-guide/
   
   :license: UC-LBL license (see package)
   :recipe: /`bbmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap/meta.yaml>`_
   :links: biotools: :biotools:`bbmap`, doi: :doi:`10.1371/journal.pone.0185056`

   


.. conda:package:: bbmap

   |downloads_bbmap| |docker_bbmap|

   :versions: 38.22, 38.20, 38.19, 38.18, 38.16, 38.06, 37.99, 37.96, 37.95, 37.90, 37.78, 37.77, 37.75, 37.66, 37.62, 37.52, 37.17, 37.10, 37.02, 36.84, 36.32, 35.85

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`openjdk` >=7.0 

   :required~by: |required_by_bbmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bbmap

   and update with::

      conda update bbmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bbmap


.. |required_by_bbmap| conda:required_by:: bbmap
.. |downloads_bbmap| image:: https://img.shields.io/conda/dn/bioconda/bbmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bbmap| image:: https://quay.io/repository/biocontainers/bbmap/status
   :target: https://quay.io/repository/biocontainers/bbmap






Notes
-----
BBMap is a series of Java programs\, but they come with a number of custom
wrapper shell scripts. Each of these is symlinked to the conda bin directory
during install.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmap/README.html


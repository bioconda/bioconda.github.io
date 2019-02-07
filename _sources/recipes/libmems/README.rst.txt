.. title:: Package Recipe 'libmems'
.. highlight: bash


libmems
=======

.. conda:recipe:: libmems
   :replaces_section_title:

   libMems is a freely available software development library to support DNA string matching and comparative genomics.

   :homepage: http://darlinglab.org/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`libmems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmems/meta.yaml>`_

   


.. conda:package:: libmems

   |downloads_libmems| |docker_libmems|

   :versions: 1.6.0

   :depends: :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_libmems|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libmems

   and update with::

      conda update libmems

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libmems


.. |required_by_libmems| conda:required_by:: libmems
.. |downloads_libmems| image:: https://img.shields.io/conda/dn/bioconda/libmems.svg?style=flat
   :alt:   (downloads)
.. |docker_libmems| image:: https://quay.io/repository/biocontainers/libmems/status
   :target: https://quay.io/repository/biocontainers/libmems







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmems/README.html


.. title:: Package Recipe 'libstatgen'
.. highlight: bash


libstatgen
==========

.. conda:recipe:: libstatgen
   :replaces_section_title:

   Useful set of classes for creating statistical genetic programs.

   :homepage: https://genome.sph.umich.edu/wiki/C++_Library:_libStatGen
   :developer docs: https://github.com/statgen/libStatGen
   :license: GPL3
   :recipe: /`libstatgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen/meta.yaml>`_

   


.. conda:package:: libstatgen

   |downloads_libstatgen| |docker_libstatgen|

   :versions: 1.0.14, 1.0.5

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_libstatgen|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libstatgen

   and update with::

      conda update libstatgen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libstatgen


.. |required_by_libstatgen| conda:required_by:: libstatgen
.. |downloads_libstatgen| image:: https://img.shields.io/conda/dn/bioconda/libstatgen.svg?style=flat
   :alt:   (downloads)
.. |docker_libstatgen| image:: https://quay.io/repository/biocontainers/libstatgen/status
   :target: https://quay.io/repository/biocontainers/libstatgen







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libstatgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libstatgen/README.html


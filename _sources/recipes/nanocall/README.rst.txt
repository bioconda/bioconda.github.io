.. title:: Package Recipe 'nanocall'
.. highlight: bash


nanocall
========

.. conda:recipe:: nanocall
   :replaces_section_title:

   An Oxford Nanopore Basecaller

   :homepage: https://github.com/mateidavid/nanocall
   :license: MIT
   :recipe: /`nanocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall/meta.yaml>`_

   


.. conda:package:: nanocall

   |downloads_nanocall| |docker_nanocall|

   :versions: v0.7.4, v0.6.14, v0.6.13, v0.6.5

   :depends: :conda:package:`hdf5`  :conda:package:`libgcc`  

   :required~by: |required_by_nanocall|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocall

   and update with::

      conda update nanocall

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanocall


.. |required_by_nanocall| conda:required_by:: nanocall
.. |downloads_nanocall| image:: https://img.shields.io/conda/dn/bioconda/nanocall.svg?style=flat
   :alt:   (downloads)
.. |docker_nanocall| image:: https://quay.io/repository/biocontainers/nanocall/status
   :target: https://quay.io/repository/biocontainers/nanocall







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocall/README.html


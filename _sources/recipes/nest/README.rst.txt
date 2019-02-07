.. title:: Package Recipe 'nest'
.. highlight: bash


nest
====

.. conda:recipe:: nest
   :replaces_section_title:

   NEST is a simulator for spiking neural network models.

   :homepage: http://www.nest-simulator.org/
   :license: GPL
   :recipe: /`nest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nest/meta.yaml>`_

   


.. conda:package:: nest

   |downloads_nest| |docker_nest|

   :versions: 2.14.0, 2.12.0

   :depends: :conda:package:`cython`  :conda:package:`gsl` 1.16* :conda:package:`ipython`  :conda:package:`libgcc`  :conda:package:`libtool`  :conda:package:`matplotlib`  :conda:package:`mkl`  :conda:package:`ncurses` 5.9* :conda:package:`numpy`  :conda:package:`openmpi` >=2.1 :conda:package:`python` 2.7* :conda:package:`readline` 6.2* :conda:package:`scipy`  

   :required~by: |required_by_nest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nest

   and update with::

      conda update nest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nest


.. |required_by_nest| conda:required_by:: nest
.. |downloads_nest| image:: https://img.shields.io/conda/dn/bioconda/nest.svg?style=flat
   :alt:   (downloads)
.. |docker_nest| image:: https://quay.io/repository/biocontainers/nest/status
   :target: https://quay.io/repository/biocontainers/nest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nest/README.html


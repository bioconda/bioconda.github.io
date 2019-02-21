:orphan:  .. only available via index, not via toctree

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

   :versions: 2.14.0-3, 2.14.0-2, 2.14.0-1, 2.14.0-0, 2.12.0-0
   
   :depends cython: 
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends ipython: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libtool: 
   
   :depends matplotlib: 
   
   :depends mkl: >=2018.0.3,<2019.0a0
   
   :depends ncurses: >=5.9,<5.10.0a0
   
   :depends numpy: 
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends openmpi: >=2.1,<3
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends readline: >=6.2,<6.3.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nest

   and update with::

      conda update nest

   or use the docker container::

      docker pull quay.io/biocontainers/nest:<tag>

   (see `nest/tags`_ for valid values for ``<tag>``)


.. |downloads_nest| image:: https://img.shields.io/conda/dn/bioconda/nest.svg?style=flat
   :alt:   (downloads)
.. |docker_nest| image:: https://quay.io/repository/biocontainers/nest/status
   :target: https://quay.io/repository/biocontainers/nest
.. _`nest/tags`: https://quay.io/repository/biocontainers/nest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nest/README.html
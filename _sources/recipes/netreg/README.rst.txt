:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netreg'
.. highlight: bash

netreg
======

.. conda:recipe:: netreg
   :replaces_section_title:

   netReg fits linear regression models using network\-penalization.

   :homepage: https://github.com/dirmeier/netReg
   :documentation: https://dirmeier.github.io/netReg/
   
   :license: GPL3
   :recipe: /`netreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netreg/meta.yaml>`_

   


.. conda:package:: netreg

   |downloads_netreg| |docker_netreg|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-2, 1.4.0-1, 1.2.0-1, 1.2.0-0, 1.0.0-0
   
   :depends armadillo: >=7.800.1
   :depends armadillo: >=9.200,<10.0a0
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends hdf5: >=1.10.5,<1.10.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openblas: >=0.3.7,<0.3.8.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install netreg

   and update with::

      conda update netreg

   or use the docker container::

      docker pull quay.io/biocontainers/netreg:<tag>

   (see `netreg/tags`_ for valid values for ``<tag>``)


.. |downloads_netreg| image:: https://img.shields.io/conda/dn/bioconda/netreg.svg?style=flat
   :target: https://anaconda.org/bioconda/netreg
   :alt:   (downloads)
.. |docker_netreg| image:: https://quay.io/repository/biocontainers/netreg/status
   :target: https://quay.io/repository/biocontainers/netreg
.. _`netreg/tags`: https://quay.io/repository/biocontainers/netreg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netreg/README.html
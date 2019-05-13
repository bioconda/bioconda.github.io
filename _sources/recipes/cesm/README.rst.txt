:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cesm'
.. highlight: bash

cesm
====

.. conda:recipe:: cesm
   :replaces_section_title:

   The Community Earth System Model \(CESM\) is a coupled climate model for simulating Earth’s climate system

   :homepage: https://github.com/ESCOMP/cesm
   :documentation: http://www.cesm.ucar.edu/
   
   :license: BSD / BSD 3-Clause
   :recipe: /`cesm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cesm/meta.yaml>`_

   


.. conda:package:: cesm

   |downloads_cesm| |docker_cesm|

   :versions: 2.1.0-0
   
   :depends cmake: 
   :depends gcc_linux-64: 
   :depends gfortran_linux-64: 
   :depends hdf5: >=1.10.4,<1.10.5.0a0
   :depends lapack: 
   :depends libgcc-ng: >=7.3.0
   :depends libiconv: 
   :depends libxml2: 
   :depends make: 
   :depends mpich: >=3.2,<3.3.0a0
   :depends netcdf-fortran: >=4.4.5,<4.5.0a0
   :depends perl-xml-libxml: 
   :depends python: >=3.7,<3.8.0a0
   :depends tcsh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cesm

   and update with::

      conda update cesm

   or use the docker container::

      docker pull quay.io/biocontainers/cesm:<tag>

   (see `cesm/tags`_ for valid values for ``<tag>``)


.. |downloads_cesm| image:: https://img.shields.io/conda/dn/bioconda/cesm.svg?style=flat
   :target: https://anaconda.org/bioconda/cesm
   :alt:   (downloads)
.. |docker_cesm| image:: https://quay.io/repository/biocontainers/cesm/status
   :target: https://quay.io/repository/biocontainers/cesm
.. _`cesm/tags`: https://quay.io/repository/biocontainers/cesm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cesm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cesm/README.html
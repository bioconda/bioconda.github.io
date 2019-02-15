:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs'
.. highlight: bash

gromacs
=======

.. conda:recipe:: gromacs
   :replaces_section_title:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: http://www.gromacs.org/
   :license: GNU Lesser General Public License (LGPL)
   :recipe: /`gromacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs/meta.yaml>`_
   :links: biotools: :biotools:`gromacs`, doi: :doi:`10.1016/j.softx.2015.06.001`, rrid: :rrid:`RRID:SCR_014565`

   


.. conda:package:: gromacs

   |downloads_gromacs| |docker_gromacs|

   :versions: 2018.4-0, 2018.3-0, 2018.2-0, 2018-3, 2018-2, 2018-1, 2018-0, 4.6.5-0
   
   :depends fftw: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libhwloc: 1.*
   
   :depends ocl-icd: 
   
   :depends openmp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gromacs

   and update with::

      conda update gromacs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gromacs:<tag>

   (see `gromacs/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs| image:: https://img.shields.io/conda/dn/bioconda/gromacs.svg?style=flat
   :alt:   (downloads)
.. |docker_gromacs| image:: https://quay.io/repository/biocontainers/gromacs/status
   :target: https://quay.io/repository/biocontainers/gromacs
.. _`gromacs/tags`: https://quay.io/repository/biocontainers/gromacs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs/README.html
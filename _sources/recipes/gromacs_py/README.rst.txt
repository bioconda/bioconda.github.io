:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_py'
.. highlight: bash

gromacs_py
==========

.. conda:recipe:: gromacs_py
   :replaces_section_title:

   Gromacs\_py is a python library allowing a simplified use of the gromacs MD simulation software.

   :homepage: https://github.com/samuelmurail/gromacs_py
   :documentation: https://gromacs-py.readthedocs.io/en/latest/
   
   :developer docs: https://gromacs-py.readthedocs.io/en/latest/contributing.html
   :license: GPL-2.0-only
   :recipe: /`gromacs_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_py/meta.yaml>`_

   


.. conda:package:: gromacs_py

   |downloads_gromacs_py| |docker_gromacs_py|

   :versions: 1.1.1-0
   
   :depends gromacs: <2020
   :depends matplotlib-base: 
   :depends numpy: 
   :depends os_command_py: 
   :depends pandas: 
   :depends pdb2pqr_htmd_propka30: 
   :depends pdb_manip_py: 
   :depends python: >=3.5
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gromacs_py

   and update with::

      conda update gromacs_py

   or use the docker container::

      docker pull quay.io/biocontainers/gromacs_py:<tag>

   (see `gromacs_py/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs_py| image:: https://img.shields.io/conda/dn/bioconda/gromacs_py.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_py
   :alt:   (downloads)
.. |docker_gromacs_py| image:: https://quay.io/repository/biocontainers/gromacs_py/status
   :target: https://quay.io/repository/biocontainers/gromacs_py
.. _`gromacs_py/tags`: https://quay.io/repository/biocontainers/gromacs_py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_py/README.html
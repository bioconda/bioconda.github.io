:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'docking_py'
.. highlight: bash

docking_py
==========

.. conda:recipe:: docking_py
   :replaces_section_title:

   Docking\_py is a python library allowing a simplified use of the Smina\, vina\, qvina2 and qvinaw docking software. Docking\_py can be easily automatize and scripted.

   :homepage: https://github.com/samuelmurail/docking_py
   :documentation: https://docking-py.readthedocs.io/en/latest/
   
   :developer docs: https://docking-py.readthedocs.io/en/latest/contributing.html
   :license: GPL-2.0-only
   :recipe: /`docking_py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/docking_py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/docking_py/meta.yaml>`_

   


.. conda:package:: docking_py

   |downloads_docking_py| |docker_docking_py|

   :versions: 0.2.3-0
   
   :depends autodock-vina: 
   :depends mgltools: 1.5.6.*
   :depends numpy: 
   :depends os_command_py: 
   :depends pdb2pqr_htmd_propka30: 
   :depends pdb_manip_py: 
   :depends python: >=3.5
   :depends qvina: 
   :depends smina: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install docking_py

   and update with::

      conda update docking_py

   or use the docker container::

      docker pull quay.io/biocontainers/docking_py:<tag>

   (see `docking_py/tags`_ for valid values for ``<tag>``)


.. |downloads_docking_py| image:: https://img.shields.io/conda/dn/bioconda/docking_py.svg?style=flat
   :target: https://anaconda.org/bioconda/docking_py
   :alt:   (downloads)
.. |docker_docking_py| image:: https://quay.io/repository/biocontainers/docking_py/status
   :target: https://quay.io/repository/biocontainers/docking_py
.. _`docking_py/tags`: https://quay.io/repository/biocontainers/docking_py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/docking_py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/docking_py/README.html
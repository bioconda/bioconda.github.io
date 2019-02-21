:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icqsol'
.. highlight: bash

icqsol
======

.. conda:recipe:: icqsol
   :replaces_section_title:

   A collection of utilities for constructing complex geometries from primitive shapes

   :homepage: https://github.com/pletzer/icqsol
   :license: MIT
   :recipe: /`icqsol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol/meta.yaml>`_

   


.. conda:package:: icqsol

   |downloads_icqsol| |docker_icqsol|

   :versions: 0.3.26-1, 0.3.26-0, 0.3.20-0
   
   :depends numpy: 
   
   :depends pycsg: 0.3.12
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pytriangle: 1.0.9
   
   :depends vtk: 6.3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install icqsol

   and update with::

      conda update icqsol

   or use the docker container::

      docker pull quay.io/biocontainers/icqsol:<tag>

   (see `icqsol/tags`_ for valid values for ``<tag>``)


.. |downloads_icqsol| image:: https://img.shields.io/conda/dn/bioconda/icqsol.svg?style=flat
   :alt:   (downloads)
.. |docker_icqsol| image:: https://quay.io/repository/biocontainers/icqsol/status
   :target: https://quay.io/repository/biocontainers/icqsol
.. _`icqsol/tags`: https://quay.io/repository/biocontainers/icqsol?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icqsol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icqsol/README.html
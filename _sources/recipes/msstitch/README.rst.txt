:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msstitch'
.. highlight: bash

msstitch
========

.. conda:recipe:: msstitch
   :replaces_section_title:

   MS proteomics post processing utilities

   :homepage: https://github.com/glormph/msstitch
   :license: MIT / MIT License
   :recipe: /`msstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch/meta.yaml>`_

   


.. conda:package:: msstitch

   |downloads_msstitch| |docker_msstitch|

   :versions: 2.14-0, 2.13-1, 2.13-0, 2.12-0, 2.11-0, 2.10-0, 2.9-0, 2.8-0, 2.7-0, 2.6-0, 2.5-0, 2.4-0, 2.3-0, 2.2-0, 1.0-1, 1.0-0
   
   :depends biopython: >=1.69
   :depends lxml: 
   :depends numpy: 
   :depends python: >=3
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msstitch

   and update with::

      conda update msstitch

   or use the docker container::

      docker pull quay.io/biocontainers/msstitch:<tag>

   (see `msstitch/tags`_ for valid values for ``<tag>``)


.. |downloads_msstitch| image:: https://img.shields.io/conda/dn/bioconda/msstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/msstitch
   :alt:   (downloads)
.. |docker_msstitch| image:: https://quay.io/repository/biocontainers/msstitch/status
   :target: https://quay.io/repository/biocontainers/msstitch
.. _`msstitch/tags`: https://quay.io/repository/biocontainers/msstitch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msstitch/README.html
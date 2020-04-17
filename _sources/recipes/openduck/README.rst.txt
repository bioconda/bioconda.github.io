:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openduck'
.. highlight: bash

openduck
========

.. conda:recipe:: openduck
   :replaces_section_title:

   Open source library for dynamic undocking \(DUck\)

   :homepage: https://github.com/galaxycomputationalchemistry/duck
   :license: Apache / Apache 2.0
   :recipe: /`openduck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck/meta.yaml>`_

   


.. conda:package:: openduck

   |downloads_openduck| |docker_openduck|

   :versions: 0.1.1-0
   
   :depends cudatoolkit: 
   :depends networkx: 
   :depends python: 
   :depends rdkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openduck

   and update with::

      conda update openduck

   or use the docker container::

      docker pull quay.io/biocontainers/openduck:<tag>

   (see `openduck/tags`_ for valid values for ``<tag>``)


.. |downloads_openduck| image:: https://img.shields.io/conda/dn/bioconda/openduck.svg?style=flat
   :target: https://anaconda.org/bioconda/openduck
   :alt:   (downloads)
.. |docker_openduck| image:: https://quay.io/repository/biocontainers/openduck/status
   :target: https://quay.io/repository/biocontainers/openduck
.. _`openduck/tags`: https://quay.io/repository/biocontainers/openduck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openduck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openduck/README.html
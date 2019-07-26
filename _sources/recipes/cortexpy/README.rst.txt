:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cortexpy'
.. highlight: bash

cortexpy
========

.. conda:recipe:: cortexpy
   :replaces_section_title:

   A Python API for manipulating \(Mc\)Cortex de novo assembly graph and link data

   :homepage: https://github.com/winni2k/cortexpy
   :documentation: https://cortexpy.readthedocs.io/en/v0.46.4/
   
   :license: APACHE / Apache Software
   :recipe: /`cortexpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy/meta.yaml>`_

   


.. conda:package:: cortexpy

   |downloads_cortexpy| |docker_cortexpy|

   :versions: 0.46.4-0, 0.45.7-0, 0.45.6-0, 0.44.0-0, 0.41.1-0
   
   :depends attrs: 
   :depends biopython: 
   :depends delegation: 
   :depends libcxx: >=4.0.1
   :depends msgpack-python: 
   :depends networkx: 
   :depends numpy: 
   :depends python: >=3.7,<3.8.0a0
   :depends pyyaml: 
   :depends schema: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cortexpy

   and update with::

      conda update cortexpy

   or use the docker container::

      docker pull quay.io/biocontainers/cortexpy:<tag>

   (see `cortexpy/tags`_ for valid values for ``<tag>``)


.. |downloads_cortexpy| image:: https://img.shields.io/conda/dn/bioconda/cortexpy.svg?style=flat
   :target: https://anaconda.org/bioconda/cortexpy
   :alt:   (downloads)
.. |docker_cortexpy| image:: https://quay.io/repository/biocontainers/cortexpy/status
   :target: https://quay.io/repository/biocontainers/cortexpy
.. _`cortexpy/tags`: https://quay.io/repository/biocontainers/cortexpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortexpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortexpy/README.html
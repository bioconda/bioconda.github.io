:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chap'
.. highlight: bash

chap
====

.. conda:recipe:: chap
   :replaces_section_title:
   :noindex:

   CHAP is a tool for the functional annotation of ion channel structures

   :homepage: https://github.com/channotation/chap
   :license: MIT
   :recipe: /`chap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap/meta.yaml>`_

   


.. conda:package:: chap

   |downloads_chap| |docker_chap|

   :versions:
      
      

      ``0.9.1-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends gromacs: ``2018.6.*``
   :depends intel-compute-runtime: 
   :depends libcblas: ``3.8.0 8_*_netlib``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapacke: ``3.8.0 8_*_netlib``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends rapidjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chap

   and update with::

      conda update chap

   or use the docker container::

      docker pull quay.io/biocontainers/chap:<tag>

   (see `chap/tags`_ for valid values for ``<tag>``)


.. |downloads_chap| image:: https://img.shields.io/conda/dn/bioconda/chap.svg?style=flat
   :target: https://anaconda.org/bioconda/chap
   :alt:   (downloads)
.. |docker_chap| image:: https://quay.io/repository/biocontainers/chap/status
   :target: https://quay.io/repository/biocontainers/chap
.. _`chap/tags`: https://quay.io/repository/biocontainers/chap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chap/README.html
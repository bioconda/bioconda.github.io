:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifive'
.. highlight: bash

hifive
======

.. conda:recipe:: hifive
   :replaces_section_title:

   Python library for normalizing and analyzing HiC and 5C data

   :homepage: https://github.com/bxlab/hifive
   :license: MIT / MIT
   :recipe: /`hifive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive/meta.yaml>`_

   


.. conda:package:: hifive

   |downloads_hifive| |docker_hifive|

   :versions: 1.5.7-0, 1.5.6-2, 1.5.6-0, 1.5.3-0, 1.5.1-0, 1.4.0-0, 1.3.1-0, 1.3.0-0, 1.2.1-0
   
   :depends cython: 
   
   :depends h5py: 
   
   :depends numpy: 
   
   :depends pil: 
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyx: 0.12.1
   
   :depends scipy: 
   
   :depends setuptools_cython: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hifive

   and update with::

      conda update hifive

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hifive:<tag>

   (see `hifive/tags`_ for valid values for ``<tag>``)


.. |downloads_hifive| image:: https://img.shields.io/conda/dn/bioconda/hifive.svg?style=flat
   :alt:   (downloads)
.. |docker_hifive| image:: https://quay.io/repository/biocontainers/hifive/status
   :target: https://quay.io/repository/biocontainers/hifive
.. _`hifive/tags`: https://quay.io/repository/biocontainers/hifive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifive/README.html
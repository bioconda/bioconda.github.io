:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomelake'
.. highlight: bash

genomelake
==========

.. conda:recipe:: genomelake
   :replaces_section_title:
   :noindex:

   Simple and efficient random access to genomic data for deep learning models.

   :homepage: https://github.com/kundajelab/genomelake
   :license: BSD / BSD License
   :recipe: /`genomelake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomelake/meta.yaml>`_

   Simple and efficient random access to genomic data for deep learning models.


.. conda:package:: genomelake

   |downloads_genomelake| |docker_genomelake|

   :versions:
      
      

      ``0.1.4-4``,  ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends bcolz: ``>=1.1``
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomelake

   and update with::

      conda update genomelake

   or use the docker container::

      docker pull quay.io/biocontainers/genomelake:<tag>

   (see `genomelake/tags`_ for valid values for ``<tag>``)


.. |downloads_genomelake| image:: https://img.shields.io/conda/dn/bioconda/genomelake.svg?style=flat
   :target: https://anaconda.org/bioconda/genomelake
   :alt:   (downloads)
.. |docker_genomelake| image:: https://quay.io/repository/biocontainers/genomelake/status
   :target: https://quay.io/repository/biocontainers/genomelake
.. _`genomelake/tags`: https://quay.io/repository/biocontainers/genomelake?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomelake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomelake/README.html
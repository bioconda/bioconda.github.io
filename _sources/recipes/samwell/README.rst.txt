:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samwell'
.. highlight: bash

samwell
=======

.. conda:recipe:: samwell
   :replaces_section_title:
   :noindex:

   Useful utilities for biological data formats and analyses

   :homepage: https://pypi.org/project/samwell/
   :license: MIT
   :recipe: /`samwell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samwell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samwell/meta.yaml>`_

   


.. conda:package:: samwell

   |downloads_samwell| |docker_samwell|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends attrs: ``>=19.3.0``
   :depends cython: 
   :depends defopt: ``>=6.0``
   :depends intervaltree: ``>=3.0.2``
   :depends libgcc-ng: ``>=7.5.0``
   :depends mypy_extensions: ``>=0.4.3``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends typing_extensions: ``>=3.7.4``
   :depends typing_inspect: ``>=0.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samwell

   and update with::

      conda update samwell

   or use the docker container::

      docker pull quay.io/biocontainers/samwell:<tag>

   (see `samwell/tags`_ for valid values for ``<tag>``)


.. |downloads_samwell| image:: https://img.shields.io/conda/dn/bioconda/samwell.svg?style=flat
   :target: https://anaconda.org/bioconda/samwell
   :alt:   (downloads)
.. |docker_samwell| image:: https://quay.io/repository/biocontainers/samwell/status
   :target: https://quay.io/repository/biocontainers/samwell
.. _`samwell/tags`: https://quay.io/repository/biocontainers/samwell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samwell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samwell/README.html
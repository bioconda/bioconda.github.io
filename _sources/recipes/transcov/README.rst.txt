:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transcov'
.. highlight: bash

transcov
========

.. conda:recipe:: transcov
   :replaces_section_title:

   A software for mapping coverage around transcription start sites

   :homepage: https://github.com/hogfeldt/transcov
   :documentation: https://transcov.readthedocs.io/en/stable/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`transcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcov/meta.yaml>`_

   


.. conda:package:: transcov

   |downloads_transcov| |docker_transcov|

   :versions: 1.1.3-0, 1.1.2-0, 1.1.1-0, 1.0.7-0, 1.0.6-0, 1.0.5-0, 1.0.4-0, 1.0.2-0
   
   :depends attrs: 
   :depends click: >=7.0
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: >=3.6
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transcov

   and update with::

      conda update transcov

   or use the docker container::

      docker pull quay.io/biocontainers/transcov:<tag>

   (see `transcov/tags`_ for valid values for ``<tag>``)


.. |downloads_transcov| image:: https://img.shields.io/conda/dn/bioconda/transcov.svg?style=flat
   :target: https://anaconda.org/bioconda/transcov
   :alt:   (downloads)
.. |docker_transcov| image:: https://quay.io/repository/biocontainers/transcov/status
   :target: https://quay.io/repository/biocontainers/transcov
.. _`transcov/tags`: https://quay.io/repository/biocontainers/transcov?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcov/README.html
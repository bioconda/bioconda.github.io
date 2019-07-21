:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinosaur'
.. highlight: bash

dinosaur
========

.. conda:recipe:: dinosaur
   :replaces_section_title:

   Feature finding algorithm for detection of isotope patterns in HPLC mass spectrometry data.

   :homepage: https://github.com/fickludd/dinosaur
   :license: Apache / Apache-2.0
   :recipe: /`dinosaur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinosaur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinosaur/meta.yaml>`_

   


.. conda:package:: dinosaur

   |downloads_dinosaur| |docker_dinosaur|

   :versions: 1.1.3-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dinosaur

   and update with::

      conda update dinosaur

   or use the docker container::

      docker pull quay.io/biocontainers/dinosaur:<tag>

   (see `dinosaur/tags`_ for valid values for ``<tag>``)


.. |downloads_dinosaur| image:: https://img.shields.io/conda/dn/bioconda/dinosaur.svg?style=flat
   :target: https://anaconda.org/bioconda/dinosaur
   :alt:   (downloads)
.. |docker_dinosaur| image:: https://quay.io/repository/biocontainers/dinosaur/status
   :target: https://quay.io/repository/biocontainers/dinosaur
.. _`dinosaur/tags`: https://quay.io/repository/biocontainers/dinosaur?tab=tags






Notes
-----
This recipe supplies a wrapper shell script around the Dinosaur Java program.
By default\, Java is called without specifying heap size. If you want to overwrite 
it you can specify these values after calling the wrapper. If you have 
\_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"dinosaur \-Xmx4g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinosaur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinosaur/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-bioformats'
.. highlight: bash

python-bioformats
=================

.. conda:recipe:: python-bioformats
   :replaces_section_title:
   :noindex:

   Python\-bioformats is a Python wrapper for Bio\-Formats\, a standalone Java library for reading and writing life sciences image file formats.

   :homepage: https://github.com/CellProfiler/python-bioformats
   :license: BSD / 3-clause BSD license
   :recipe: /`python-bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats/meta.yaml>`_

   


.. conda:package:: python-bioformats

   |downloads_python-bioformats| |docker_python-bioformats|

   :versions:
      
      

      ``1.5.2-0``

      

   
   :depends boto3: 
   :depends javabridge: ``>=1.0``
   :depends openjdk: ``8.*``
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-bioformats

   and update with::

      conda update python-bioformats

   or use the docker container::

      docker pull quay.io/biocontainers/python-bioformats:<tag>

   (see `python-bioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_python-bioformats| image:: https://img.shields.io/conda/dn/bioconda/python-bioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/python-bioformats
   :alt:   (downloads)
.. |docker_python-bioformats| image:: https://quay.io/repository/biocontainers/python-bioformats/status
   :target: https://quay.io/repository/biocontainers/python-bioformats
.. _`python-bioformats/tags`: https://quay.io/repository/biocontainers/python-bioformats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-bioformats/README.html
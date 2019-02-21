:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-levenshtein'
.. highlight: bash

python-levenshtein
==================

.. conda:recipe:: python-levenshtein
   :replaces_section_title:

   Python extension for computing string edit distances and similarities.

   :homepage: https://pypi.python.org/pypi/python-Levenshtein/
   :license: GPL
   :recipe: /`python-levenshtein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-levenshtein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-levenshtein/meta.yaml>`_

   


.. conda:package:: python-levenshtein

   |downloads_python-levenshtein| |docker_python-levenshtein|

   :versions: 0.12.0-1, 0.12.0-0
   
   :depends cython: 
   
   :depends nose: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-levenshtein

   and update with::

      conda update python-levenshtein

   or use the docker container::

      docker pull quay.io/biocontainers/python-levenshtein:<tag>

   (see `python-levenshtein/tags`_ for valid values for ``<tag>``)


.. |downloads_python-levenshtein| image:: https://img.shields.io/conda/dn/bioconda/python-levenshtein.svg?style=flat
   :alt:   (downloads)
.. |docker_python-levenshtein| image:: https://quay.io/repository/biocontainers/python-levenshtein/status
   :target: https://quay.io/repository/biocontainers/python-levenshtein
.. _`python-levenshtein/tags`: https://quay.io/repository/biocontainers/python-levenshtein?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-levenshtein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-levenshtein/README.html
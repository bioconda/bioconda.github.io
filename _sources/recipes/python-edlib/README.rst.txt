:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-edlib'
.. highlight: bash

python-edlib
============

.. conda:recipe:: python-edlib
   :replaces_section_title:

   Lightweight\, super fast C\/C\+\+ \(\& Python\) library for sequence alignment using edit \(Levenshtein\) distance.

   :homepage: https://github.com/Martinsos/edlib
   :license: MIT / MIT License
   :recipe: /`python-edlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib/meta.yaml>`_

   


.. conda:package:: python-edlib

   |downloads_python-edlib| |docker_python-edlib|

   :versions: 1.3.4-0, 1.2.4.post1-0, 1.2.4-0, 1.2.3.post1-0, 1.2.3-1, 1.2.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-edlib

   and update with::

      conda update python-edlib

   or use the docker container::

      docker pull quay.io/biocontainers/python-edlib:<tag>

   (see `python-edlib/tags`_ for valid values for ``<tag>``)


.. |downloads_python-edlib| image:: https://img.shields.io/conda/dn/bioconda/python-edlib.svg?style=flat
   :target: https://anaconda.org/bioconda/python-edlib
   :alt:   (downloads)
.. |docker_python-edlib| image:: https://quay.io/repository/biocontainers/python-edlib/status
   :target: https://quay.io/repository/biocontainers/python-edlib
.. _`python-edlib/tags`: https://quay.io/repository/biocontainers/python-edlib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-edlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-edlib/README.html
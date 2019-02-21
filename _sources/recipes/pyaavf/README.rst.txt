:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyaavf'
.. highlight: bash

pyaavf
======

.. conda:recipe:: pyaavf
   :replaces_section_title:

   An amino acid variant format parser for Python.

   :homepage: http://github.com/winhiv/PyAAVF
   :license: Apache License, Version 2.0
   :recipe: /`pyaavf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyaavf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyaavf/meta.yaml>`_

   


.. conda:package:: pyaavf

   |downloads_pyaavf| |docker_pyaavf|

   :versions: 0.1.0-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyaavf

   and update with::

      conda update pyaavf

   or use the docker container::

      docker pull quay.io/biocontainers/pyaavf:<tag>

   (see `pyaavf/tags`_ for valid values for ``<tag>``)


.. |downloads_pyaavf| image:: https://img.shields.io/conda/dn/bioconda/pyaavf.svg?style=flat
   :alt:   (downloads)
.. |docker_pyaavf| image:: https://quay.io/repository/biocontainers/pyaavf/status
   :target: https://quay.io/repository/biocontainers/pyaavf
.. _`pyaavf/tags`: https://quay.io/repository/biocontainers/pyaavf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyaavf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyaavf/README.html
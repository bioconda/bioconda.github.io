:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydemult'
.. highlight: bash

pydemult
========

.. conda:recipe:: pydemult
   :replaces_section_title:

   Streamed and parallel demultiplexing of fastq files in python

   :homepage: https://github.com/jenzopr/pydemult
   :license: MIT / MIT
   :recipe: /`pydemult <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydemult>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydemult/meta.yaml>`_

   


.. conda:package:: pydemult

   |downloads_pydemult| |docker_pydemult|

   :versions: 0.5-1, 0.5-0, 0.4.1-1, 0.4.1-0
   
   :depends mputil: 
   :depends pandas: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydemult

   and update with::

      conda update pydemult

   or use the docker container::

      docker pull quay.io/biocontainers/pydemult:<tag>

   (see `pydemult/tags`_ for valid values for ``<tag>``)


.. |downloads_pydemult| image:: https://img.shields.io/conda/dn/bioconda/pydemult.svg?style=flat
   :target: https://anaconda.org/bioconda/pydemult
   :alt:   (downloads)
.. |docker_pydemult| image:: https://quay.io/repository/biocontainers/pydemult/status
   :target: https://quay.io/repository/biocontainers/pydemult
.. _`pydemult/tags`: https://quay.io/repository/biocontainers/pydemult?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydemult/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydemult/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyranges'
.. highlight: bash

pyranges
========

.. conda:recipe:: pyranges
   :replaces_section_title:

   GenomicRanges for Python.

   :homepage: http://github.com/endrebak/pyranges
   :license: MIT
   :recipe: /`pyranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges/meta.yaml>`_

   


.. conda:package:: pyranges

   |downloads_pyranges| |docker_pyranges|

   :versions: 0.0.69-0, 0.0.67-0, 0.0.66-0, 0.0.65-0, 0.0.64-0, 0.0.63-0, 0.0.62-0, 0.0.61-0, 0.0.60-0, 0.0.59-0, 0.0.58-0, 0.0.57-0, 0.0.56-0, 0.0.55-0, 0.0.54-0, 0.0.53-0, 0.0.52-0, 0.0.51-1, 0.0.51-0, 0.0.50-0, 0.0.49-0, 0.0.48-0, 0.0.45-0, 0.0.44-0, 0.0.43-0, 0.0.42-0, 0.0.41-0, 0.0.40-0, 0.0.39-0
   
   :depends natsort: 
   :depends ncls: >=0.0.50
   :depends pandas: 
   :depends pyrle: 
   :depends python: 
   :depends sorted_nearest: >=0.0.30
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyranges

   and update with::

      conda update pyranges

   or use the docker container::

      docker pull quay.io/biocontainers/pyranges:<tag>

   (see `pyranges/tags`_ for valid values for ``<tag>``)


.. |downloads_pyranges| image:: https://img.shields.io/conda/dn/bioconda/pyranges.svg?style=flat
   :target: https://anaconda.org/bioconda/pyranges
   :alt:   (downloads)
.. |docker_pyranges| image:: https://quay.io/repository/biocontainers/pyranges/status
   :target: https://quay.io/repository/biocontainers/pyranges
.. _`pyranges/tags`: https://quay.io/repository/biocontainers/pyranges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyranges/README.html
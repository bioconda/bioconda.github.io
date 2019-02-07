.. title:: Package Recipe 'segtools'
.. highlight: bash


segtools
========

.. conda:recipe:: segtools
   :replaces_section_title:

   a python package for analyzing genomic segmentations

   :homepage: http://segtools.hoffmanlab.org/
   :license: GPL2
   :recipe: /`segtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segtools/meta.yaml>`_

   


.. conda:package:: segtools

   |downloads_segtools| |docker_segtools|

   :versions: 1.2.1, 1.1.14

   :depends: :conda:package:`genomedata`  :conda:package:`gmtk`  :conda:package:`graphviz`  :conda:package:`numpy`  :conda:package:`pygraphviz`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-cairo`  :conda:package:`r-cluster`  :conda:package:`r-latticeextra`  :conda:package:`r-reshape2`  :conda:package:`rpy2` >=2.6.0,<2.9 

   :required~by: |required_by_segtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segtools

   and update with::

      conda update segtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/segtools


.. |required_by_segtools| conda:required_by:: segtools
.. |downloads_segtools| image:: https://img.shields.io/conda/dn/bioconda/segtools.svg?style=flat
   :alt:   (downloads)
.. |docker_segtools| image:: https://quay.io/repository/biocontainers/segtools/status
   :target: https://quay.io/repository/biocontainers/segtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segtools/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'presto'
.. highlight: bash

presto
======

.. conda:recipe:: presto
   :replaces_section_title:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data.

   :homepage: http://presto.readthedocs.io
   :license: OTHER / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
   :recipe: /`presto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/presto/meta.yaml>`_

   


.. conda:package:: presto

   |downloads_presto| |docker_presto|

   :versions: 0.5.10-0, 0.5.4-1, 0.5.4-0
   
   :depends biopython: >=1.65
   :depends blast: >=2.5
   :depends muscle: >=3.8
   :depends numpy: >=1.8
   :depends pandas: >=0.15
   :depends python: >=3.5,<3.6.0a0
   :depends scipy: >=0.14
   :depends vsearch: >=2.3.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install presto

   and update with::

      conda update presto

   or use the docker container::

      docker pull quay.io/biocontainers/presto:<tag>

   (see `presto/tags`_ for valid values for ``<tag>``)


.. |downloads_presto| image:: https://img.shields.io/conda/dn/bioconda/presto.svg?style=flat
   :alt:   (downloads)
.. |docker_presto| image:: https://quay.io/repository/biocontainers/presto/status
   :target: https://quay.io/repository/biocontainers/presto
.. _`presto/tags`: https://quay.io/repository/biocontainers/presto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/presto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/presto/README.html
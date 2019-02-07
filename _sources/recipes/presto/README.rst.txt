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

   :versions: 0.5.10, 0.5.4

   :depends: :conda:package:`biopython` >=1.65 :conda:package:`blast` >=2.5 :conda:package:`muscle` >=3.8 :conda:package:`numpy` >=1.8 :conda:package:`pandas` >=0.15 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scipy` >=0.14 :conda:package:`vsearch` >=2.3.2 

   :required~by: |required_by_presto|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install presto

   and update with::

      conda update presto

   or use the docker container::

      docker pull quay.io/repository/biocontainers/presto


.. |required_by_presto| conda:required_by:: presto
.. |downloads_presto| image:: https://img.shields.io/conda/dn/bioconda/presto.svg?style=flat
   :alt:   (downloads)
.. |docker_presto| image:: https://quay.io/repository/biocontainers/presto/status
   :target: https://quay.io/repository/biocontainers/presto







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/presto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/presto/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesapp'
.. highlight: bash

treesapp
========

.. conda:recipe:: treesapp
   :replaces_section_title:

   TreeSAPP is a functional and taxonomic annotation tool for microbial genomes and proteins

   :homepage: https://github.com/hallamlab/TreeSAPP
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`treesapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp/meta.yaml>`_

   


.. conda:package:: treesapp

   |downloads_treesapp| |docker_treesapp|

   :versions: 0.6.8-0, 0.6.7-0, 0.6.6-0, 0.6.5-0
   
   :depends biopython: >=1.68
   :depends bwa: >=0.7.3
   :depends ete3: >=3.1.1
   :depends fasttree: >=2.1.9
   :depends hmmer: >=3.1
   :depends joblib: >=0.14.1
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mafft: >=7.407
   :depends matplotlib-base: >=3.1.2
   :depends numpy: 
   :depends prodigal: >=2.6.2
   :depends pyfastx: 0.6.10
   :depends pygtrie: >=2.3.2
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends raxml: 8.2.12
   :depends samsum: 0.1.2
   :depends scipy: >=1.4.1
   :depends seaborn: >=0.9.0
   :depends six: >=1.14.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treesapp

   and update with::

      conda update treesapp

   or use the docker container::

      docker pull quay.io/biocontainers/treesapp:<tag>

   (see `treesapp/tags`_ for valid values for ``<tag>``)


.. |downloads_treesapp| image:: https://img.shields.io/conda/dn/bioconda/treesapp.svg?style=flat
   :target: https://anaconda.org/bioconda/treesapp
   :alt:   (downloads)
.. |docker_treesapp| image:: https://quay.io/repository/biocontainers/treesapp/status
   :target: https://quay.io/repository/biocontainers/treesapp
.. _`treesapp/tags`: https://quay.io/repository/biocontainers/treesapp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesapp/README.html
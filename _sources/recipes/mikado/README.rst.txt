:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikado'
.. highlight: bash

mikado
======

.. conda:recipe:: mikado
   :replaces_section_title:

   A Python3 annotation program to select the best gene model in each locus

   :homepage: https://github.com/lucventurini/mikado
   :license: LGPL / GNU Lesser General Public License v3 or later (LGPLv3+)
   :recipe: /`mikado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado/meta.yaml>`_

   


.. conda:package:: mikado

   |downloads_mikado| |docker_mikado|

   :versions: 1.2.4-0, 1.2.3-1, 1.2.2-1, 1.2.2-0, 1.2.1-0, 1.1.1-0, 1.0.2-0
   
   :depends biopython: >=1.66
   
   :depends cython: >=0.28.2
   
   :depends docutils: !=0.13.1
   
   :depends drmaa: 
   
   :depends frozendict: 
   
   :depends intervaltree: 
   
   :depends jsonschema: 
   
   :depends libmagic: 
   
   :depends networkx: >=1.10
   
   :depends nose: 
   
   :depends numpy: 
   
   :depends portcullis: 
   
   :depends pyfaidx: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends python-magic: 
   
   :depends pyyaml: 
   
   :depends scikit-learn: >=0.17.0
   
   :depends scipy: >=0.15.0
   
   :depends simplejson: 
   
   :depends snakemake: 
   
   :depends sqlalchemy: >=1
   
   :depends sqlalchemy-utils: 
   
   :depends tabulate: 
   
   :depends typing: 
   
   :depends ujson: 
   
   :depends wheel: >=0.28.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mikado

   and update with::

      conda update mikado

   or use the docker container::

      docker pull quay.io/biocontainers/mikado:<tag>

   (see `mikado/tags`_ for valid values for ``<tag>``)


.. |downloads_mikado| image:: https://img.shields.io/conda/dn/bioconda/mikado.svg?style=flat
   :alt:   (downloads)
.. |docker_mikado| image:: https://quay.io/repository/biocontainers/mikado/status
   :target: https://quay.io/repository/biocontainers/mikado
.. _`mikado/tags`: https://quay.io/repository/biocontainers/mikado?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikado/README.html
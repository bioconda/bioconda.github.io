:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast'
.. highlight: bash

dfast
=====

.. conda:recipe:: dfast
   :replaces_section_title:
   :noindex:

   DDBJ Fast Annotation and Submission Tool \- Prokaryotic genome annotation pipeline

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_core
   :license: GPLv3
   :recipe: /`dfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast/meta.yaml>`_
   :links: biotools: :biotools:`dfast`, doi: :doi:`10.1093/bioinformatics/btx713`

   


.. conda:package:: dfast

   |downloads_dfast| |docker_dfast|

   :versions:
      
      

      ``1.2.10-0``,  ``1.2.7-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends aragorn: 
   :depends barrnap: 
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends ghostx: 
   :depends hmmer: ``>=3.1b2``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends metagene_annotator: ``>=1.0``
   :depends openjdk: 
   :depends python: ``>=3.6``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dfast

   and update with::

      conda update dfast

   or use the docker container::

      docker pull quay.io/biocontainers/dfast:<tag>

   (see `dfast/tags`_ for valid values for ``<tag>``)


.. |downloads_dfast| image:: https://img.shields.io/conda/dn/bioconda/dfast.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast
   :alt:   (downloads)
.. |docker_dfast| image:: https://quay.io/repository/biocontainers/dfast/status
   :target: https://quay.io/repository/biocontainers/dfast
.. _`dfast/tags`: https://quay.io/repository/biocontainers/dfast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapi'
.. highlight: bash

metapi
======

.. conda:recipe:: metapi
   :replaces_section_title:
   :noindex:

   A general metagenomics data mining system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/metapi
   :license: GPL / GPL3
   :recipe: /`metapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi/meta.yaml>`_
   :links: biotools: :biotools:`metapi`

   


.. conda:package:: metapi

   |downloads_metapi| |docker_metapi|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends ruamel.yaml: 
   :depends seaborn: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metapi

   and update with::

      conda update metapi

   or use the docker container::

      docker pull quay.io/biocontainers/metapi:<tag>

   (see `metapi/tags`_ for valid values for ``<tag>``)


.. |downloads_metapi| image:: https://img.shields.io/conda/dn/bioconda/metapi.svg?style=flat
   :target: https://anaconda.org/bioconda/metapi
   :alt:   (downloads)
.. |docker_metapi| image:: https://quay.io/repository/biocontainers/metapi/status
   :target: https://quay.io/repository/biocontainers/metapi
.. _`metapi/tags`: https://quay.io/repository/biocontainers/metapi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapi/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abritamr'
.. highlight: bash

abritamr
========

.. conda:recipe:: abritamr
   :replaces_section_title:
   :noindex:

   Running AMRFinderPlus for MDU

   :homepage: https://github.com/MDU-PHL/abritamr
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`abritamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr/meta.yaml>`_

   


.. conda:package:: abritamr

   |downloads_abritamr| |docker_abritamr|

   :versions:
      
      

      ``0.2.2-0``,  ``0.1.0-0``

      

   
   :depends blast: 
   :depends click: 
   :depends hmmer: 
   :depends jinja2: 
   :depends libcurl: 
   :depends ncbi-amrfinderplus: 
   :depends pandas: 
   :depends python: ``3.7.*``
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abritamr

   and update with::

      conda update abritamr

   or use the docker container::

      docker pull quay.io/biocontainers/abritamr:<tag>

   (see `abritamr/tags`_ for valid values for ``<tag>``)


.. |downloads_abritamr| image:: https://img.shields.io/conda/dn/bioconda/abritamr.svg?style=flat
   :target: https://anaconda.org/bioconda/abritamr
   :alt:   (downloads)
.. |docker_abritamr| image:: https://quay.io/repository/biocontainers/abritamr/status
   :target: https://quay.io/repository/biocontainers/abritamr
.. _`abritamr/tags`: https://quay.io/repository/biocontainers/abritamr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abritamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abritamr/README.html
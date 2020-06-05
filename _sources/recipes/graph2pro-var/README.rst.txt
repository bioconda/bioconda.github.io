:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graph2pro-var'
.. highlight: bash

graph2pro-var
=============

.. conda:recipe:: graph2pro-var
   :replaces_section_title:
   :noindex:

   meta\-proteogenomic identification from mass spec and metagenomic\/transcriptomic data

   :homepage: https://github.com/COL-IU/graph2pro-var
   :license: GPL / GPL-3.0
   :recipe: /`graph2pro-var <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph2pro-var>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph2pro-var/meta.yaml>`_

   


.. conda:package:: graph2pro-var

   |downloads_graph2pro-var| |docker_graph2pro-var|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bowtie2: 
   :depends cd-hit: 
   :depends dbgraph: 
   :depends fraggenescan: 
   :depends gawk: 
   :depends msgf_plus: 
   :depends python: 
   :depends rapsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graph2pro-var

   and update with::

      conda update graph2pro-var

   or use the docker container::

      docker pull quay.io/biocontainers/graph2pro-var:<tag>

   (see `graph2pro-var/tags`_ for valid values for ``<tag>``)


.. |downloads_graph2pro-var| image:: https://img.shields.io/conda/dn/bioconda/graph2pro-var.svg?style=flat
   :target: https://anaconda.org/bioconda/graph2pro-var
   :alt:   (downloads)
.. |docker_graph2pro-var| image:: https://quay.io/repository/biocontainers/graph2pro-var/status
   :target: https://quay.io/repository/biocontainers/graph2pro-var
.. _`graph2pro-var/tags`: https://quay.io/repository/biocontainers/graph2pro-var?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graph2pro-var/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graph2pro-var/README.html
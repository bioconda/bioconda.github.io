:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligotyping'
.. highlight: bash

oligotyping
===========

.. conda:recipe:: oligotyping
   :replaces_section_title:

   The oligotyping and minimum entropy decomposition \(MED\) pipeline for the analysis of marker gene amplicons

   :homepage: http://oligotyping.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`oligotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping/meta.yaml>`_

   


.. conda:package:: oligotyping

   |downloads_oligotyping| |docker_oligotyping|

   :versions: 2.1-0, 2.0-0
   
   :depends biopython: 
   
   :depends blast: 
   
   :depends django: 
   
   :depends matplotlib: 
   
   :depends python: 2.7*
   
   :depends r-compute.es: 
   
   :depends r-ggplot2: 
   
   :depends r-gplots: 
   
   :depends r-gtools: 
   
   :depends r-optparse: 
   
   :depends r-pheatmap: 
   
   :depends r-rcolorbrewer: 
   
   :depends r-reshape: 
   
   :depends r-vegan: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oligotyping

   and update with::

      conda update oligotyping

   or use the docker container::

      docker pull quay.io/biocontainers/oligotyping:<tag>

   (see `oligotyping/tags`_ for valid values for ``<tag>``)


.. |downloads_oligotyping| image:: https://img.shields.io/conda/dn/bioconda/oligotyping.svg?style=flat
   :alt:   (downloads)
.. |docker_oligotyping| image:: https://quay.io/repository/biocontainers/oligotyping/status
   :target: https://quay.io/repository/biocontainers/oligotyping
.. _`oligotyping/tags`: https://quay.io/repository/biocontainers/oligotyping?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligotyping/README.html
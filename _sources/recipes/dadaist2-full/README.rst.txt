:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadaist2-full'
.. highlight: bash

dadaist2-full
=============

.. conda:recipe:: dadaist2-full
   :replaces_section_title:
   :noindex:

   Meta\-package for Dadaist2 with full R packages\, VSEARCH and MultiQC

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`dadaist2-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full/meta.yaml>`_

   


.. conda:package:: dadaist2-full

   |downloads_dadaist2-full| |docker_dadaist2-full|

   :versions:
      
      

      ``0.7-1``,  ``0.7-0``

      

   
   :depends dadaist2: 
   :depends multiqc: 
   :depends r-ade4: 
   :depends r-cluster: 
   :depends r-corrplot: 
   :depends r-fpc: 
   :depends r-hmisc: 
   :depends r-phangorn: 
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dadaist2-full

   and update with::

      conda update dadaist2-full

   or use the docker container::

      docker pull quay.io/biocontainers/dadaist2-full:<tag>

   (see `dadaist2-full/tags`_ for valid values for ``<tag>``)


.. |downloads_dadaist2-full| image:: https://img.shields.io/conda/dn/bioconda/dadaist2-full.svg?style=flat
   :target: https://anaconda.org/bioconda/dadaist2-full
   :alt:   (downloads)
.. |docker_dadaist2-full| image:: https://quay.io/repository/biocontainers/dadaist2-full/status
   :target: https://quay.io/repository/biocontainers/dadaist2-full
.. _`dadaist2-full/tags`: https://quay.io/repository/biocontainers/dadaist2-full?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadaist2-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadaist2-full/README.html
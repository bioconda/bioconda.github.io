:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaseq-all'
.. highlight: bash

metaseq-all
===========

.. conda:recipe:: metaseq-all
   :replaces_section_title:
   :noindex:

   Meta\-package for metaseq including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`metaseq-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all/meta.yaml>`_

   


.. conda:package:: metaseq-all

   |downloads_metaseq-all| |docker_metaseq-all|

   :versions:
      
      

      ``0.5.6-3``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``

      

   
   :depends bedtools: 
   :depends metaseq: 
   :depends samtools: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-bigwigsummary: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaseq-all

   and update with::

      conda update metaseq-all

   or use the docker container::

      docker pull quay.io/biocontainers/metaseq-all:<tag>

   (see `metaseq-all/tags`_ for valid values for ``<tag>``)


.. |downloads_metaseq-all| image:: https://img.shields.io/conda/dn/bioconda/metaseq-all.svg?style=flat
   :target: https://anaconda.org/bioconda/metaseq-all
   :alt:   (downloads)
.. |docker_metaseq-all| image:: https://quay.io/repository/biocontainers/metaseq-all/status
   :target: https://quay.io/repository/biocontainers/metaseq-all
.. _`metaseq-all/tags`: https://quay.io/repository/biocontainers/metaseq-all?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq-all/README.html
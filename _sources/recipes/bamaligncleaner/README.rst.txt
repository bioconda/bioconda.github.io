:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamaligncleaner'
.. highlight: bash

bamaligncleaner
===============

.. conda:recipe:: bamaligncleaner
   :replaces_section_title:
   :noindex:

   Removes unaligned references in BAM alignment file

   :homepage: https://github.com/maxibor/bamAlignCleaner
   :license: GPL-3.0
   :recipe: /`bamaligncleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaligncleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamaligncleaner/meta.yaml>`_

   


.. conda:package:: bamaligncleaner

   |downloads_bamaligncleaner| |docker_bamaligncleaner|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends click: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamaligncleaner

   and update with::

      conda update bamaligncleaner

   or use the docker container::

      docker pull quay.io/biocontainers/bamaligncleaner:<tag>

   (see `bamaligncleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_bamaligncleaner| image:: https://img.shields.io/conda/dn/bioconda/bamaligncleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/bamaligncleaner
   :alt:   (downloads)
.. |docker_bamaligncleaner| image:: https://quay.io/repository/biocontainers/bamaligncleaner/status
   :target: https://quay.io/repository/biocontainers/bamaligncleaner
.. _`bamaligncleaner/tags`: https://quay.io/repository/biocontainers/bamaligncleaner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamaligncleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamaligncleaner/README.html
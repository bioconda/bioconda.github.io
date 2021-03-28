:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abundancebin'
.. highlight: bash

abundancebin
============

.. conda:recipe:: abundancebin
   :replaces_section_title:
   :noindex:

   Abundance\-based tool for binning metagenomic sequences

   :homepage: http://omics.informatics.indiana.edu/AbundanceBin/
   :license: copyright
   :recipe: /`abundancebin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-12683-3_35`

   AbundanceBin is an abundance\-based tool for binning metagenomic sequences\,
   such that the reads classified in a bin belong to species of identical or
   very similar abundances. AbundanceBin also gives estimations of species
   abundances and their genome sizes — two important characteristic parameters
   for a microbial community.



.. conda:package:: abundancebin

   |downloads_abundancebin| |docker_abundancebin|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abundancebin

   and update with::

      conda update abundancebin

   or use the docker container::

      docker pull quay.io/biocontainers/abundancebin:<tag>

   (see `abundancebin/tags`_ for valid values for ``<tag>``)


.. |downloads_abundancebin| image:: https://img.shields.io/conda/dn/bioconda/abundancebin.svg?style=flat
   :target: https://anaconda.org/bioconda/abundancebin
   :alt:   (downloads)
.. |docker_abundancebin| image:: https://quay.io/repository/biocontainers/abundancebin/status
   :target: https://quay.io/repository/biocontainers/abundancebin
.. _`abundancebin/tags`: https://quay.io/repository/biocontainers/abundancebin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abundancebin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abundancebin/README.html
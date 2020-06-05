:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-util-legacy'
.. highlight: bash

ncbi-util-legacy
================

.. conda:recipe:: ncbi-util-legacy
   :replaces_section_title:
   :noindex:

   NCBI software development toolkit

   :homepage: ftp://ftp.ncbi.nih.gov/toolbox/ncbi_tools/
   :license: Public Domain
   :recipe: /`ncbi-util-legacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-util-legacy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-util-legacy/meta.yaml>`_

   


.. conda:package:: ncbi-util-legacy

   |downloads_ncbi-util-legacy| |docker_ncbi-util-legacy|

   :versions:
      
      

      ``6.1-0``

      

   
   :depends gmp: ``>=6.1.2,<7.0a0``
   :depends gnutls: ``>=3.6.5,<3.7.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends openmotif: 
   :depends tcsh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-util-legacy

   and update with::

      conda update ncbi-util-legacy

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-util-legacy:<tag>

   (see `ncbi-util-legacy/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-util-legacy| image:: https://img.shields.io/conda/dn/bioconda/ncbi-util-legacy.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-util-legacy
   :alt:   (downloads)
.. |docker_ncbi-util-legacy| image:: https://quay.io/repository/biocontainers/ncbi-util-legacy/status
   :target: https://quay.io/repository/biocontainers/ncbi-util-legacy
.. _`ncbi-util-legacy/tags`: https://quay.io/repository/biocontainers/ncbi-util-legacy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-util-legacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-util-legacy/README.html
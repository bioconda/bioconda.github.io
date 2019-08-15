:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverm'
.. highlight: bash

coverm
======

.. conda:recipe:: coverm
   :replaces_section_title:

   CoverM aims to be a configurable\, easy to use and fast DNA read coverage and relative abundance calculator focused on metagenomics applications

   :homepage: https://github.com/wwood/coverm
   :license: GPL3
   :recipe: /`coverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm/meta.yaml>`_

   


.. conda:package:: coverm

   |downloads_coverm| |docker_coverm|

   :versions: 0.2.0.alpha7-0
   
   :depends bwa: >=0.7.17
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openblas: >=0.3.6,<0.3.7.0a0
   :depends samtools: >=1.9
   :depends starcode: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coverm

   and update with::

      conda update coverm

   or use the docker container::

      docker pull quay.io/biocontainers/coverm:<tag>

   (see `coverm/tags`_ for valid values for ``<tag>``)


.. |downloads_coverm| image:: https://img.shields.io/conda/dn/bioconda/coverm.svg?style=flat
   :target: https://anaconda.org/bioconda/coverm
   :alt:   (downloads)
.. |docker_coverm| image:: https://quay.io/repository/biocontainers/coverm/status
   :target: https://quay.io/repository/biocontainers/coverm
.. _`coverm/tags`: https://quay.io/repository/biocontainers/coverm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverm/README.html
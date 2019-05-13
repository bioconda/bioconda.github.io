:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genelendatabase'
.. highlight: bash

bioconductor-genelendatabase
============================

.. conda:recipe:: bioconductor-genelendatabase
   :replaces_section_title:

   Length of mRNA transcripts for a number of genomes and gene ID formats\, largely based on UCSC table browser

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/geneLenDataBase.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-genelendatabase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase/meta.yaml>`_

   


.. conda:package:: bioconductor-genelendatabase

   |downloads_bioconductor-genelendatabase| |docker_bioconductor-genelendatabase|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.6.0-0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genelendatabase

   and update with::

      conda update bioconductor-genelendatabase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genelendatabase:<tag>

   (see `bioconductor-genelendatabase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genelendatabase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genelendatabase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genelendatabase
   :alt:   (downloads)
.. |docker_bioconductor-genelendatabase| image:: https://quay.io/repository/biocontainers/bioconductor-genelendatabase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genelendatabase
.. _`bioconductor-genelendatabase/tags`: https://quay.io/repository/biocontainers/bioconductor-genelendatabase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html
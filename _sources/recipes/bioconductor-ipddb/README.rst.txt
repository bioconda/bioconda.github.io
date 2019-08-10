:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipddb'
.. highlight: bash

bioconductor-ipddb
==================

.. conda:recipe:: bioconductor-ipddb
   :replaces_section_title:

   All alleles from the IPD IMGT\/HLA \<https\:\/\/www.ebi.ac.uk\/ipd\/imgt\/hla\/\> and IPD KIR \<https\:\/\/www.ebi.ac.uk\/ipd\/kir\/\> database for Homo sapiens. Reference\: Robinson J\, Maccari G\, Marsh SGE\, Walter L\, Blokhuis J\, Bimber B\, Parham P\, De Groot NG\, Bontrop RE\, Guethlein LA\, and Hammond JA KIR Nomenclature in non\-human species Immunogenetics \(2018\)\, in preparation.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ipdDb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ipddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipddb/meta.yaml>`_

   


.. conda:package:: bioconductor-ipddb

   |downloads_bioconductor-ipddb| |docker_bioconductor-ipddb|

   :versions: 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-annotationhub: >=2.16.0,<2.17.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ipddb

   and update with::

      conda update bioconductor-ipddb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipddb:<tag>

   (see `bioconductor-ipddb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipddb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipddb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipddb
   :alt:   (downloads)
.. |docker_bioconductor-ipddb| image:: https://quay.io/repository/biocontainers/bioconductor-ipddb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipddb
.. _`bioconductor-ipddb/tags`: https://quay.io/repository/biocontainers/bioconductor-ipddb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipddb/README.html
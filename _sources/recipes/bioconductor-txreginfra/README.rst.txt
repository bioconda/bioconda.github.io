:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txreginfra'
.. highlight: bash

bioconductor-txreginfra
=======================

.. conda:recipe:: bioconductor-txreginfra
   :replaces_section_title:

   This package provides interfaces to genomic metadata employed in regulatory network creation\, with a focus on noSQL solutions.  Currently quantitative representations of eQTLs\, DnaseI hypersensitivity sites and digital genomic footprints are assembled using an out\-of\-memory extension of the RaggedExperiment API.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/TxRegInfra.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txreginfra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txreginfra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txreginfra/meta.yaml>`_

   


.. conda:package:: bioconductor-txreginfra

   |downloads_bioconductor-txreginfra| |docker_bioconductor-txreginfra|

   :versions: 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-raggedexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mongolite: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txreginfra

   and update with::

      conda update bioconductor-txreginfra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txreginfra:<tag>

   (see `bioconductor-txreginfra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txreginfra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txreginfra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txreginfra
   :alt:   (downloads)
.. |docker_bioconductor-txreginfra| image:: https://quay.io/repository/biocontainers/bioconductor-txreginfra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txreginfra
.. _`bioconductor-txreginfra/tags`: https://quay.io/repository/biocontainers/bioconductor-txreginfra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txreginfra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txreginfra/README.html
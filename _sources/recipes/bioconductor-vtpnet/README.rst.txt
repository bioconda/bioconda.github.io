:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vtpnet'
.. highlight: bash

bioconductor-vtpnet
===================

.. conda:recipe:: bioconductor-vtpnet
   :replaces_section_title:

   variant\-transcription factor\-phenotype networks

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/vtpnet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vtpnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vtpnet/meta.yaml>`_

   variant\-transcription factor\-phenotype networks\, inspired by Maurano et al.\, Science \(2012\)\, PMID 22955828


.. conda:package:: bioconductor-vtpnet

   |downloads_bioconductor-vtpnet| |docker_bioconductor-vtpnet|

   :versions: 0.28.0-0, 0.26.0-0, 0.24.0-1, 0.22.0-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-graph: >=1.66.0,<1.67.0
   :depends bioconductor-gwascat: >=2.20.0,<2.21.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vtpnet

   and update with::

      conda update bioconductor-vtpnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vtpnet:<tag>

   (see `bioconductor-vtpnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vtpnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vtpnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vtpnet
   :alt:   (downloads)
.. |docker_bioconductor-vtpnet| image:: https://quay.io/repository/biocontainers/bioconductor-vtpnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vtpnet
.. _`bioconductor-vtpnet/tags`: https://quay.io/repository/biocontainers/bioconductor-vtpnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vtpnet/README.html
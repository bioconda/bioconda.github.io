:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eatonetalchipseq'
.. highlight: bash

bioconductor-eatonetalchipseq
=============================

.. conda:recipe:: bioconductor-eatonetalchipseq
   :replaces_section_title:

   ChIP\-seq analysis subset from \"Conserved nucleosome positioning defines replication origins\" \(PMID 20351051\)

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/EatonEtAlChIPseq.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-eatonetalchipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq/meta.yaml>`_

   


.. conda:package:: bioconductor-eatonetalchipseq

   |downloads_bioconductor-eatonetalchipseq| |docker_bioconductor-eatonetalchipseq|

   :versions: 0.20.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-shortread: >=1.40.0,<1.41.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eatonetalchipseq

   and update with::

      conda update bioconductor-eatonetalchipseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eatonetalchipseq:<tag>

   (see `bioconductor-eatonetalchipseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eatonetalchipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eatonetalchipseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eatonetalchipseq
   :alt:   (downloads)
.. |docker_bioconductor-eatonetalchipseq| image:: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq
.. _`bioconductor-eatonetalchipseq/tags`: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html
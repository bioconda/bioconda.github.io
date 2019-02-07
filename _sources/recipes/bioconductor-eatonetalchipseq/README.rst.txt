.. title:: Package Recipe 'bioconductor-eatonetalchipseq'
.. highlight: bash


bioconductor-eatonetalchipseq
=============================

.. conda:recipe:: bioconductor-eatonetalchipseq
   :replaces_section_title:

   ChIP\-seq analysis subset from \"Conserved nucleosome positioning defines replication origins\" \(PMID 20351051\)

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/EatonEtAlChIPseq.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-eatonetalchipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq/meta.yaml>`_

   


.. conda:package:: bioconductor-eatonetalchipseq

   |downloads_bioconductor-eatonetalchipseq| |docker_bioconductor-eatonetalchipseq|

   :versions: 0.20.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-eatonetalchipseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eatonetalchipseq

   and update with::

      conda update bioconductor-eatonetalchipseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-eatonetalchipseq


.. |required_by_bioconductor-eatonetalchipseq| conda:required_by:: bioconductor-eatonetalchipseq
.. |downloads_bioconductor-eatonetalchipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eatonetalchipseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-eatonetalchipseq| image:: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html


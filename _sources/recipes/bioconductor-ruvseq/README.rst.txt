.. title:: Package Recipe 'bioconductor-ruvseq'
.. highlight: bash


bioconductor-ruvseq
===================

.. conda:recipe:: bioconductor-ruvseq
   :replaces_section_title:

   This package implements the remove unwanted variation \(RUV\) methods of Risso et al. \(2014\) for the normalization of RNA\-Seq read counts between samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RUVSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ruvseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvseq/meta.yaml>`_
   :links: biotools: :biotools:`ruvseq`

   


.. conda:package:: bioconductor-ruvseq

   |downloads_bioconductor-ruvseq| |docker_bioconductor-ruvseq|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-edaseq` >=2.16.0,<2.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-ruvseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ruvseq

   and update with::

      conda update bioconductor-ruvseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ruvseq


.. |required_by_bioconductor-ruvseq| conda:required_by:: bioconductor-ruvseq
.. |downloads_bioconductor-ruvseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ruvseq| image:: https://quay.io/repository/biocontainers/bioconductor-ruvseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvseq/README.html


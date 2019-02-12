.. title:: Package Recipe 'bioconductor-iseq'
.. highlight: bash


bioconductor-iseq
=================

.. conda:recipe:: bioconductor-iseq
   :replaces_section_title:

   Bayesian hidden Ising models are implemented to identify IP\-enriched genomic regions from ChIP\-seq data. They can be used to analyze ChIP\-seq data with and without controls and replicates.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iSeq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseq/meta.yaml>`_
   :links: biotools: :biotools:`iseq`, doi: :doi:`10.1111/j.1541-0420.2009.01379.x`

   


.. conda:package:: bioconductor-iseq

   |downloads_bioconductor-iseq| |docker_bioconductor-iseq|

   :versions: 1.34.0, 1.32.0, 1.30.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-iseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iseq

   and update with::

      conda update bioconductor-iseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iseq


.. |required_by_bioconductor-iseq| conda:required_by:: bioconductor-iseq
.. |downloads_bioconductor-iseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iseq| image:: https://quay.io/repository/biocontainers/bioconductor-iseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseq/README.html


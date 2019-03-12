:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nbpseq'
.. highlight: bash

r-nbpseq
========

.. conda:recipe:: r-nbpseq
   :replaces_section_title:

   Negative Binomial \(NB\) models for two\-group comparisons and regression inferences from RNA\-Sequencing Data.

   :homepage: https://CRAN.R-project.org/package=NBPSeq
   :license: GPL2 / GPL-2
   :recipe: /`r-nbpseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq/meta.yaml>`_

   


.. conda:package:: r-nbpseq

   |downloads_r-nbpseq| |docker_r-nbpseq|

   :versions: 0.3.0-0
   
   :depends bioconductor-qvalue: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nbpseq

   and update with::

      conda update r-nbpseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-nbpseq:<tag>

   (see `r-nbpseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nbpseq| image:: https://img.shields.io/conda/dn/bioconda/r-nbpseq.svg?style=flat
   :alt:   (downloads)
.. |docker_r-nbpseq| image:: https://quay.io/repository/biocontainers/r-nbpseq/status
   :target: https://quay.io/repository/biocontainers/r-nbpseq
.. _`r-nbpseq/tags`: https://quay.io/repository/biocontainers/r-nbpseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nbpseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nbpseq/README.html
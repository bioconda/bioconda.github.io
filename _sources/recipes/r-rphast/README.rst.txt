:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rphast'
.. highlight: bash

r-rphast
========

.. conda:recipe:: r-rphast
   :replaces_section_title:

   Provides an R interface to the \'PHAST\'\(\<http\:\/\/compgen.cshl.edu\/phast\/\>\) software \(Phylogenetic Analysis with Space\/Time Models\).  It can be used for many types of analysis in comparative and evolutionary genomics\, such as estimating models of evolution from sequence data\, scoring alignments for conservation or acceleration\, and predicting elements based on conservation or custom phylogenetic hidden Markov models.  It can also perform many basic operations on multiple sequence alignments and phylogenetic trees.

   :homepage: http://compgen.cshl.edu/rphast
   :license: BSD / BSD_3_clause
   :recipe: /`r-rphast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphast/meta.yaml>`_

   


.. conda:package:: r-rphast

   |downloads_r-rphast| |docker_r-rphast|

   :versions: 1.6.9-2, 1.6.9-1, 1.6.9-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rphast

   and update with::

      conda update r-rphast

   or use the docker container::

      docker pull quay.io/biocontainers/r-rphast:<tag>

   (see `r-rphast/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rphast| image:: https://img.shields.io/conda/dn/bioconda/r-rphast.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rphast
   :alt:   (downloads)
.. |docker_r-rphast| image:: https://quay.io/repository/biocontainers/r-rphast/status
   :target: https://quay.io/repository/biocontainers/r-rphast
.. _`r-rphast/tags`: https://quay.io/repository/biocontainers/r-rphast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rphast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rphast/README.html
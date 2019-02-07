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

   :versions: 1.6.9

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-rphast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rphast

   and update with::

      conda update r-rphast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rphast


.. |required_by_r-rphast| conda:required_by:: r-rphast
.. |downloads_r-rphast| image:: https://img.shields.io/conda/dn/bioconda/r-rphast.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rphast| image:: https://quay.io/repository/biocontainers/r-rphast/status
   :target: https://quay.io/repository/biocontainers/r-rphast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rphast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rphast/README.html


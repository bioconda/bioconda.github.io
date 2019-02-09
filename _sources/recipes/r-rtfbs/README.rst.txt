.. title:: Package Recipe 'r-rtfbs'
.. highlight: bash


r-rtfbs
=======

.. conda:recipe:: r-rtfbs
   :replaces_section_title:

   Identifies and scores possible Transcription Factor Binding Sites and allows for FDR analysis and pruning.  It supports splitting of sequences based on size or a specified GFF\, grouping by G\+C content\, and specification of Markov model order.  The heavy lifting is done in C while all results are made available via R.

   :homepage: http://compgen.cshl.edu/rtfbs
   :license: BSD / BSD_3_clause
   :recipe: /`r-rtfbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtfbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtfbs/meta.yaml>`_

   


.. conda:package:: r-rtfbs

   |downloads_r-rtfbs| |docker_r-rtfbs|

   :versions: 0.3.9

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rphast`  

   :required~by: |required_by_r-rtfbs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rtfbs

   and update with::

      conda update r-rtfbs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rtfbs


.. |required_by_r-rtfbs| conda:required_by:: r-rtfbs
.. |downloads_r-rtfbs| image:: https://img.shields.io/conda/dn/bioconda/r-rtfbs.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rtfbs| image:: https://quay.io/repository/biocontainers/r-rtfbs/status
   :target: https://quay.io/repository/biocontainers/r-rtfbs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rtfbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rtfbs/README.html


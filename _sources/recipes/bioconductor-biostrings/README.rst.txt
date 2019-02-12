.. title:: Package Recipe 'bioconductor-biostrings'
.. highlight: bash


bioconductor-biostrings
=======================

.. conda:recipe:: bioconductor-biostrings
   :replaces_section_title:

   Memory efficient string containers\, string matching algorithms\, and other utilities\, for fast manipulation of large biological sequences or sets of sequences.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Biostrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biostrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biostrings/meta.yaml>`_
   :links: biotools: :biotools:`biostrings`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biostrings

   |downloads_bioconductor-biostrings| |docker_bioconductor-biostrings|

   :versions: 2.50.1, 2.48.0, 2.46.0, 2.44.2, 2.42.1, 2.40.2, 2.40.0, 2.38.4, 2.38.3, 2.38.2, 2.38.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-biostrings|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biostrings

   and update with::

      conda update bioconductor-biostrings

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biostrings


.. |required_by_bioconductor-biostrings| conda:required_by:: bioconductor-biostrings
.. |downloads_bioconductor-biostrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biostrings.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biostrings| image:: https://quay.io/repository/biocontainers/bioconductor-biostrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biostrings







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biostrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biostrings/README.html


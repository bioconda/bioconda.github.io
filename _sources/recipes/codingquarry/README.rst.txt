.. title:: Package Recipe 'codingquarry'
.. highlight: bash


codingquarry
============

.. conda:recipe:: codingquarry
   :replaces_section_title:

   CodingQuarry\: highly accurate hidden Markov model gene prediction in fungal genomes using RNA\-seq transcripts.

   :homepage: https://sourceforge.net/p/codingquarry/
   :license: GPL / GPL-3
   :recipe: /`codingquarry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingquarry/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1344-4`

   


.. conda:package:: codingquarry

   |downloads_codingquarry| |docker_codingquarry|

   :versions: 2.0

   :depends: :conda:package:`biopython`  :conda:package:`libcxx` >=4.0.1 :conda:package:`llvm-openmp`  :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_codingquarry|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install codingquarry

   and update with::

      conda update codingquarry

   or use the docker container::

      docker pull quay.io/repository/biocontainers/codingquarry


.. |required_by_codingquarry| conda:required_by:: codingquarry
.. |downloads_codingquarry| image:: https://img.shields.io/conda/dn/bioconda/codingquarry.svg?style=flat
   :alt:   (downloads)
.. |docker_codingquarry| image:: https://quay.io/repository/biocontainers/codingquarry/status
   :target: https://quay.io/repository/biocontainers/codingquarry







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codingquarry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codingquarry/README.html


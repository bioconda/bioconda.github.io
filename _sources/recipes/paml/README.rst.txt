.. title:: Package Recipe 'paml'
.. highlight: bash


paml
====

.. conda:recipe:: paml
   :replaces_section_title:

   A package of programs for phylogenetic analyses of DNA or protein sequences using maximum likelihood.

   :homepage: http://abacus.gene.ucl.ac.uk/software/paml.html
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`paml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paml/meta.yaml>`_
   :links: biotools: :biotools:`paml`, doi: :doi:`10.1093/bioinformatics/13.5.555`

   


.. conda:package:: paml

   |downloads_paml| |docker_paml|

   :versions: 4.9

   :depends: 

   :required~by: |required_by_paml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paml

   and update with::

      conda update paml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/paml


.. |required_by_paml| conda:required_by:: paml
.. |downloads_paml| image:: https://img.shields.io/conda/dn/bioconda/paml.svg?style=flat
   :alt:   (downloads)
.. |docker_paml| image:: https://quay.io/repository/biocontainers/paml/status
   :target: https://quay.io/repository/biocontainers/paml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paml/README.html


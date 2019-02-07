.. title:: Package Recipe 'pancake'
.. highlight: bash


pancake
=======

.. conda:recipe:: pancake
   :replaces_section_title:

   A Data Structure for Pangenomes \-\- Identification of Singletons and Core Regions Dependent on Pairwise Sequence Similarities

   :homepage: https://bitbucket.org/CorinnaErnst/pancake
   :license: MIT / MIT License
   :recipe: /`pancake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake/meta.yaml>`_

   


.. conda:package:: pancake

   |downloads_pancake| |docker_pancake|

   :versions: 1.1.2

   :depends: :conda:package:`biopython`  :conda:package:`numpy`  :conda:package:`python` 3.4* 

   :required~by: |required_by_pancake|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pancake

   and update with::

      conda update pancake

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pancake


.. |required_by_pancake| conda:required_by:: pancake
.. |downloads_pancake| image:: https://img.shields.io/conda/dn/bioconda/pancake.svg?style=flat
   :alt:   (downloads)
.. |docker_pancake| image:: https://quay.io/repository/biocontainers/pancake/status
   :target: https://quay.io/repository/biocontainers/pancake







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pancake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pancake/README.html


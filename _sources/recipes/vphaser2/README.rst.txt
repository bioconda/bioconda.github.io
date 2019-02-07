.. title:: Package Recipe 'vphaser2'
.. highlight: bash


vphaser2
========

.. conda:recipe:: vphaser2
   :replaces_section_title:

   V\-Phaser 2 is a tool to call variants in genetically heterogeneous populations from ultra\-deep sequence data

   :homepage: https://www.broadinstitute.org/scientific-community/science/projects/viral-genomics/v-phaser-2
   :license: single user license for academic non-commercial research purposes only
   :recipe: /`vphaser2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vphaser2/meta.yaml>`_

   


.. conda:package:: vphaser2

   |downloads_vphaser2| |docker_vphaser2|

   :versions: 2.0

   :depends: :conda:package:`bamtools`  :conda:package:`zlib`  

   :required~by: |required_by_vphaser2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vphaser2

   and update with::

      conda update vphaser2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vphaser2


.. |required_by_vphaser2| conda:required_by:: vphaser2
.. |downloads_vphaser2| image:: https://img.shields.io/conda/dn/bioconda/vphaser2.svg?style=flat
   :alt:   (downloads)
.. |docker_vphaser2| image:: https://quay.io/repository/biocontainers/vphaser2/status
   :target: https://quay.io/repository/biocontainers/vphaser2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vphaser2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vphaser2/README.html


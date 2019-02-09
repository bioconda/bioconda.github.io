.. title:: Package Recipe 'mashtree'
.. highlight: bash


mashtree
========

.. conda:recipe:: mashtree
   :replaces_section_title:

   Create a tree using Mash distances

   :homepage: https://github.com/lskatz/mashtree
   :license: GPL-3.0
   :recipe: /`mashtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree/meta.yaml>`_

   


.. conda:package:: mashtree

   |downloads_mashtree| |docker_mashtree|

   :versions: 0.37, 0.36, 0.35.4, 0.30, 0.28, 0.26, 0.25, 0.21, 0.20, 0.12

   :depends: :conda:package:`mash` >=1.1 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bioperl` >=1.7.2 :conda:package:`perl-dbd-sqlite` >=1.58 :conda:package:`quicktree`  :conda:package:`sqlite`  

   :required~by: |required_by_mashtree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mashtree

   and update with::

      conda update mashtree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mashtree


.. |required_by_mashtree| conda:required_by:: mashtree
.. |downloads_mashtree| image:: https://img.shields.io/conda/dn/bioconda/mashtree.svg?style=flat
   :alt:   (downloads)
.. |docker_mashtree| image:: https://quay.io/repository/biocontainers/mashtree/status
   :target: https://quay.io/repository/biocontainers/mashtree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashtree/README.html


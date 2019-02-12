.. title:: Package Recipe 'iqtree'
.. highlight: bash


iqtree
======

.. conda:recipe:: iqtree
   :replaces_section_title:

   Efficient phylogenomic software by maximum likelihood.

   :homepage: http://www.iqtree.org/
   :license: GPL-2.0
   :recipe: /`iqtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqtree/meta.yaml>`_

   


.. conda:package:: iqtree

   |downloads_iqtree| |docker_iqtree|

   :versions: 1.6.9, 1.6.8, 1.6.7.2, 1.6.7.1, 1.6.7, 1.6.6, 1.5.5, 1.5.3

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_iqtree|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iqtree

   and update with::

      conda update iqtree

   or use the docker container::

      docker pull quay.io/repository/biocontainers/iqtree


.. |required_by_iqtree| conda:required_by:: iqtree
.. |downloads_iqtree| image:: https://img.shields.io/conda/dn/bioconda/iqtree.svg?style=flat
   :alt:   (downloads)
.. |docker_iqtree| image:: https://quay.io/repository/biocontainers/iqtree/status
   :target: https://quay.io/repository/biocontainers/iqtree







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqtree/README.html


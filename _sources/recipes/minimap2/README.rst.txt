.. title:: Package Recipe 'minimap2'
.. highlight: bash


minimap2
========

.. conda:recipe:: minimap2
   :replaces_section_title:

   A versatile pairwise aligner for genomic and spliced nucleotide sequences.

   :homepage: https://github.com/lh3/minimap2
   :license: MIT
   :recipe: /`minimap2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2/meta.yaml>`_

   


.. conda:package:: minimap2

   |downloads_minimap2| |docker_minimap2|

   :versions: 2.15, 2.14, 2.13, 2.12, 2.11, 2.10, 2.9, 2.8, 2.7, 2.6.1, 2.6, 2.5, 2.4, 2.3, 2.1.1, 2.1.r311, 2.0.r191

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_minimap2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minimap2

   and update with::

      conda update minimap2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/minimap2


.. |required_by_minimap2| conda:required_by:: minimap2
.. |downloads_minimap2| image:: https://img.shields.io/conda/dn/bioconda/minimap2.svg?style=flat
   :alt:   (downloads)
.. |docker_minimap2| image:: https://quay.io/repository/biocontainers/minimap2/status
   :target: https://quay.io/repository/biocontainers/minimap2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap2/README.html


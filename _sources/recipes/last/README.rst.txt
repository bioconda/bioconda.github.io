.. title:: Package Recipe 'last'
.. highlight: bash


last
====

.. conda:recipe:: last
   :replaces_section_title:

   LAST finds similar regions between sequences\, and aligns them. It is designed for comparing large datasets to each other \(e.g. vertebrate genomes and\/or large numbers of DNA reads\).

   :homepage: http://last.cbrc.jp/
   :license: GPL / GPLv3
   :recipe: /`last <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last/meta.yaml>`_
   :links: biotools: :biotools:`last`

   


.. conda:package:: last

   |downloads_last| |docker_last|

   :versions: 963, 941, 876, 874, 847, 719, 638, 490

   :depends: :conda:package:`future`  :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`parallel`  :conda:package:`pillow`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_last|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install last

   and update with::

      conda update last

   or use the docker container::

      docker pull quay.io/repository/biocontainers/last


.. |required_by_last| conda:required_by:: last
.. |downloads_last| image:: https://img.shields.io/conda/dn/bioconda/last.svg?style=flat
   :alt:   (downloads)
.. |docker_last| image:: https://quay.io/repository/biocontainers/last/status
   :target: https://quay.io/repository/biocontainers/last







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/last/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/last/README.html


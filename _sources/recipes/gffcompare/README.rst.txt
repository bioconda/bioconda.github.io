.. title:: Package Recipe 'gffcompare'
.. highlight: bash


gffcompare
==========

.. conda:recipe:: gffcompare
   :replaces_section_title:

   GffCompare by Geo Pertea

   :homepage: https://github.com/gpertea/gffcompare
   :license: Artistic License 2.0
   :recipe: /`gffcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare/meta.yaml>`_
   :links: biotools: :biotools:`gffcompare`

   


.. conda:package:: gffcompare

   |downloads_gffcompare| |docker_gffcompare|

   :versions: 0.10.6, 0.9.8

   :depends: :conda:package:`libstdcxx-ng` >=4.9 

   :required~by: |required_by_gffcompare|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffcompare

   and update with::

      conda update gffcompare

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gffcompare


.. |required_by_gffcompare| conda:required_by:: gffcompare
.. |downloads_gffcompare| image:: https://img.shields.io/conda/dn/bioconda/gffcompare.svg?style=flat
   :alt:   (downloads)
.. |docker_gffcompare| image:: https://quay.io/repository/biocontainers/gffcompare/status
   :target: https://quay.io/repository/biocontainers/gffcompare







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffcompare/README.html


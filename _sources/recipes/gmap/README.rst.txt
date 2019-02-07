.. title:: Package Recipe 'gmap'
.. highlight: bash


gmap
====

.. conda:recipe:: gmap
   :replaces_section_title:

   Genomic mapping and alignment program for mRNA and EST sequences

   :homepage: http://research-pub.gene.com/gmap/
   :license: Non-commercial
   :recipe: /`gmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap/meta.yaml>`_
   :links: biotools: :biotools:`gmap`

   


.. conda:package:: gmap

   |downloads_gmap| |docker_gmap|

   :versions: 2018.07.04, 2018.03.25, 2017.11.15, 2017.10.30, 2017.09.30, 2017.05.08, 2017.02.15, 2016.09.23, 2015.12.31, 2015.09.10, 2014.12.28, 2014.12.23

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_gmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmap

   and update with::

      conda update gmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gmap


.. |required_by_gmap| conda:required_by:: gmap
.. |downloads_gmap| image:: https://img.shields.io/conda/dn/bioconda/gmap.svg?style=flat
   :alt:   (downloads)
.. |docker_gmap| image:: https://quay.io/repository/biocontainers/gmap/status
   :target: https://quay.io/repository/biocontainers/gmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap/README.html


.. title:: Package Recipe 'locarna'
.. highlight: bash


locarna
=======

.. conda:recipe:: locarna
   :replaces_section_title:

   Multiple alignment of RNAs

   :homepage: http://www.bioinf.uni-freiburg.de/Software/LocARNA/
   :license: GPL
   :recipe: /`locarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locarna/meta.yaml>`_
   :links: biotools: :biotools:`locarna`

   


.. conda:package:: locarna

   |downloads_locarna| |docker_locarna|

   :versions: 1.9.2, 1.9.1, 1.9.0, 1.8.12, 1.8.11, 1.8.10, 1.8.9, 1.8.7

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`viennarna` ==2.3.5 

   :required~by: |required_by_locarna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install locarna

   and update with::

      conda update locarna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/locarna


.. |required_by_locarna| conda:required_by:: locarna
.. |downloads_locarna| image:: https://img.shields.io/conda/dn/bioconda/locarna.svg?style=flat
   :alt:   (downloads)
.. |docker_locarna| image:: https://quay.io/repository/biocontainers/locarna/status
   :target: https://quay.io/repository/biocontainers/locarna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locarna/README.html


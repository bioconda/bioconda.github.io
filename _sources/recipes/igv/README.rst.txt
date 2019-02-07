.. title:: Package Recipe 'igv'
.. highlight: bash


igv
===

.. conda:recipe:: igv
   :replaces_section_title:

   Integrative Genomics Viewer. Fast\, efficient\, scalable visualization tool for genomics data and annotations

   :homepage: http://www.broadinstitute.org/software/igv/home
   :license: MIT
   :recipe: /`igv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igv/meta.yaml>`_
   :links: biotools: :biotools:`igv`

   


.. conda:package:: igv

   |downloads_igv| |docker_igv|

   :versions: 2.4.17, 2.4.16, 2.4.9, 2.4.6, 2.3.98

   :depends: :conda:package:`openjdk` >=8.0,<9 

   :required~by: |required_by_igv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igv

   and update with::

      conda update igv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/igv


.. |required_by_igv| conda:required_by:: igv
.. |downloads_igv| image:: https://img.shields.io/conda/dn/bioconda/igv.svg?style=flat
   :alt:   (downloads)
.. |docker_igv| image:: https://quay.io/repository/biocontainers/igv/status
   :target: https://quay.io/repository/biocontainers/igv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igv/README.html


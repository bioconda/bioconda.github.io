.. title:: Package Recipe 'srprism'
.. highlight: bash


srprism
=======

.. conda:recipe:: srprism
   :replaces_section_title:

   SRPRISM \- Short Read Alignment Tool

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/srprism/
   :license: Public Domain
   :recipe: /`srprism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srprism/meta.yaml>`_

   


.. conda:package:: srprism

   |downloads_srprism| |docker_srprism|

   :versions: 2.4.24

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_srprism|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srprism

   and update with::

      conda update srprism

   or use the docker container::

      docker pull quay.io/repository/biocontainers/srprism


.. |required_by_srprism| conda:required_by:: srprism
.. |downloads_srprism| image:: https://img.shields.io/conda/dn/bioconda/srprism.svg?style=flat
   :alt:   (downloads)
.. |docker_srprism| image:: https://quay.io/repository/biocontainers/srprism/status
   :target: https://quay.io/repository/biocontainers/srprism







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srprism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srprism/README.html


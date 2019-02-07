.. title:: Package Recipe 'ngmlr'
.. highlight: bash


ngmlr
=====

.. conda:recipe:: ngmlr
   :replaces_section_title:

   ngmlr is a long\-read mapper designed to align PacBio or Oxford Nanopore reads to a reference genome and optimized for structural variation detection

   :homepage: https://github.com/philres/ngmlr
   :license: MIT
   :recipe: /`ngmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr/meta.yaml>`_

   


.. conda:package:: ngmlr

   |downloads_ngmlr| |docker_ngmlr|

   :versions: 0.2.7, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ngmlr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngmlr

   and update with::

      conda update ngmlr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ngmlr


.. |required_by_ngmlr| conda:required_by:: ngmlr
.. |downloads_ngmlr| image:: https://img.shields.io/conda/dn/bioconda/ngmlr.svg?style=flat
   :alt:   (downloads)
.. |docker_ngmlr| image:: https://quay.io/repository/biocontainers/ngmlr/status
   :target: https://quay.io/repository/biocontainers/ngmlr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmlr/README.html


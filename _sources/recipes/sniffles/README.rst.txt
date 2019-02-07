.. title:: Package Recipe 'sniffles'
.. highlight: bash


sniffles
========

.. conda:recipe:: sniffles
   :replaces_section_title:

   Sniffles is a structural variation caller using third generation sequencing \(PacBio or Oxford Nanopore\)

   :homepage: https://github.com/fritzsedlazeck/Sniffles
   :license: MIT / MIT
   :recipe: /`sniffles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sniffles/meta.yaml>`_

   


.. conda:package:: sniffles

   |downloads_sniffles| |docker_sniffles|

   :versions: 1.0.10, 1.0.8, 1.0.7, 1.0.6, 1.0.5, 1.0.3

   :depends: :conda:package:`bamtools` >=2.4.1,<2.4.2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`tclap` >=1.2.1 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_sniffles|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sniffles

   and update with::

      conda update sniffles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sniffles


.. |required_by_sniffles| conda:required_by:: sniffles
.. |downloads_sniffles| image:: https://img.shields.io/conda/dn/bioconda/sniffles.svg?style=flat
   :alt:   (downloads)
.. |docker_sniffles| image:: https://quay.io/repository/biocontainers/sniffles/status
   :target: https://quay.io/repository/biocontainers/sniffles







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sniffles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sniffles/README.html


.. title:: Package Recipe 'ngless'
.. highlight: bash


ngless
======

.. conda:recipe:: ngless
   :replaces_section_title:

   A tool for metagenomics processing with a focus on metagenomics

   :homepage: http://ngless.embl.de
   :license: MIT
   :recipe: /`ngless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngless/meta.yaml>`_

   


.. conda:package:: ngless

   |downloads_ngless| |docker_ngless|

   :versions: 0.10.0, 0.9.1, 0.9.0, 0.8.1, 0.8.0, 0.7.1, 0.7.0, 0.6.1, 0.6.0, 0.5.1

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`cairo` >=1.14.12,<1.15.0a0 :conda:package:`gmp` >=6.1.2,<7.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`python`  :conda:package:`xorg-libxext`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ngless|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngless

   and update with::

      conda update ngless

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ngless


.. |required_by_ngless| conda:required_by:: ngless
.. |downloads_ngless| image:: https://img.shields.io/conda/dn/bioconda/ngless.svg?style=flat
   :alt:   (downloads)
.. |docker_ngless| image:: https://quay.io/repository/biocontainers/ngless/status
   :target: https://quay.io/repository/biocontainers/ngless







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngless/README.html


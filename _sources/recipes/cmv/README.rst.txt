.. title:: Package Recipe 'cmv'
.. highlight: bash


cmv
===

.. conda:recipe:: cmv
   :replaces_section_title:

   A collection of tools for the visualisation of Hidden Markov Models \(HMMV\) and RNA\-family models \(CMV\).

   :homepage: https://github.com/eggzilla/cmv
   :license: GPL-3
   :recipe: /`cmv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv/meta.yaml>`_

   


.. conda:package:: cmv

   |downloads_cmv| |docker_cmv|

   :versions: 1.0.8, 1.0.7, 1.0.6, 1.0.5, 1.0.2

   :depends: :conda:package:`cairo`  :conda:package:`gmp` >=5.0.1,<7 :conda:package:`libgcc`  :conda:package:`pango`  :conda:package:`xorg-libsm`  :conda:package:`xorg-libxext`  :conda:package:`xorg-libxrender`  :conda:package:`zlib`  

   :required~by: |required_by_cmv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmv

   and update with::

      conda update cmv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cmv


.. |required_by_cmv| conda:required_by:: cmv
.. |downloads_cmv| image:: https://img.shields.io/conda/dn/bioconda/cmv.svg?style=flat
   :alt:   (downloads)
.. |docker_cmv| image:: https://quay.io/repository/biocontainers/cmv/status
   :target: https://quay.io/repository/biocontainers/cmv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmv/README.html


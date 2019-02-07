.. title:: Package Recipe 'wgsim'
.. highlight: bash


wgsim
=====

.. conda:recipe:: wgsim
   :replaces_section_title:

   Wgsim is a small tool for simulating sequence reads from a reference genome.

   :homepage: https://github.com/lh3/wgsim
   :license: MIT
   :recipe: /`wgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim/meta.yaml>`_

   


.. conda:package:: wgsim

   |downloads_wgsim| |docker_wgsim|

   :versions: 1.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_wgsim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgsim

   and update with::

      conda update wgsim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wgsim


.. |required_by_wgsim| conda:required_by:: wgsim
.. |downloads_wgsim| image:: https://img.shields.io/conda/dn/bioconda/wgsim.svg?style=flat
   :alt:   (downloads)
.. |docker_wgsim| image:: https://quay.io/repository/biocontainers/wgsim/status
   :target: https://quay.io/repository/biocontainers/wgsim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgsim/README.html


.. title:: Package Recipe 'alfred'
.. highlight: bash


alfred
======

.. conda:recipe:: alfred
   :replaces_section_title:

   BAM statistics\, feature counting and feature annotation

   :homepage: https://github.com/tobiasrausch/alfred
   :license: GPLv3
   :recipe: /`alfred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred/meta.yaml>`_

   


.. conda:package:: alfred

   |downloads_alfred| |docker_alfred|

   :versions: 0.1.17, 0.1.16, 0.1.15, 0.1.13, 0.1.12, 0.1.9, 0.1.8, 0.1.7, 0.1.6, 0.1.5, 0.1.3, 0.1.2

   :depends: :conda:package:`boost` >=1.67.0,<1.67.1.0a0 :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`nlohmann_json`  :conda:package:`sdsl-lite`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_alfred|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alfred

   and update with::

      conda update alfred

   or use the docker container::

      docker pull quay.io/repository/biocontainers/alfred


.. |required_by_alfred| conda:required_by:: alfred
.. |downloads_alfred| image:: https://img.shields.io/conda/dn/bioconda/alfred.svg?style=flat
   :alt:   (downloads)
.. |docker_alfred| image:: https://quay.io/repository/biocontainers/alfred/status
   :target: https://quay.io/repository/biocontainers/alfred







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alfred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alfred/README.html


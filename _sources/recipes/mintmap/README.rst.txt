.. title:: Package Recipe 'mintmap'
.. highlight: bash


mintmap
=======

.. conda:recipe:: mintmap
   :replaces_section_title:

   Generate tRF profiles from short RNA\-Seq datasets

   :homepage: https://github.com/TJU-CMC-Org/MINTmap
   :license: open source GNU GPL v3.0 license
   :recipe: /`mintmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintmap/meta.yaml>`_

   


.. conda:package:: mintmap

   |downloads_mintmap| |docker_mintmap|

   :versions: 1.0

   :depends: :conda:package:`perl-base`  

   :required~by: |required_by_mintmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mintmap

   and update with::

      conda update mintmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mintmap


.. |required_by_mintmap| conda:required_by:: mintmap
.. |downloads_mintmap| image:: https://img.shields.io/conda/dn/bioconda/mintmap.svg?style=flat
   :alt:   (downloads)
.. |docker_mintmap| image:: https://quay.io/repository/biocontainers/mintmap/status
   :target: https://quay.io/repository/biocontainers/mintmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mintmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mintmap/README.html


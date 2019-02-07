.. title:: Package Recipe 'mappy'
.. highlight: bash


mappy
=====

.. conda:recipe:: mappy
   :replaces_section_title:

   Minimap2 Python binding

   :homepage: https://github.com/lh3/minimap2
   :license: MIT
   :recipe: /`mappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy/meta.yaml>`_

   


.. conda:package:: mappy

   |downloads_mappy| |docker_mappy|

   :versions: 2.15, 2.14, 2.13, 2.12, 2.11, 2.10, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4, 2.2

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_mappy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mappy

   and update with::

      conda update mappy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mappy


.. |required_by_mappy| conda:required_by:: mappy
.. |downloads_mappy| image:: https://img.shields.io/conda/dn/bioconda/mappy.svg?style=flat
   :alt:   (downloads)
.. |docker_mappy| image:: https://quay.io/repository/biocontainers/mappy/status
   :target: https://quay.io/repository/biocontainers/mappy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mappy/README.html


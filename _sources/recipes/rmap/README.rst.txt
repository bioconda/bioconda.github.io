.. title:: Package Recipe 'rmap'
.. highlight: bash


rmap
====

.. conda:recipe:: rmap
   :replaces_section_title:

   rmap is a short reads mapper for next\-generation sequencing data

   :homepage: http://smithlabresearch.org/software/rmap/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap/meta.yaml>`_
   :links: biotools: :biotools:`rmap`

   


.. conda:package:: rmap

   |downloads_rmap| |docker_rmap|

   :versions: 2.1

   :depends: 

   :required~by: |required_by_rmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmap

   and update with::

      conda update rmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rmap


.. |required_by_rmap| conda:required_by:: rmap
.. |downloads_rmap| image:: https://img.shields.io/conda/dn/bioconda/rmap.svg?style=flat
   :alt:   (downloads)
.. |docker_rmap| image:: https://quay.io/repository/biocontainers/rmap/status
   :target: https://quay.io/repository/biocontainers/rmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmap/README.html


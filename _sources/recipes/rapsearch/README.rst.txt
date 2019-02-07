.. title:: Package Recipe 'rapsearch'
.. highlight: bash


rapsearch
=========

.. conda:recipe:: rapsearch
   :replaces_section_title:

   RAPSearch2 is a tool for fast protein similarity searches.

   :homepage: http://omics.informatics.indiana.edu/mg/RAPSearch2/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rapsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch/meta.yaml>`_
   :links: biotools: :biotools:`rapsearch`

   


.. conda:package:: rapsearch

   |downloads_rapsearch| |docker_rapsearch|

   :versions: 2.24

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_rapsearch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapsearch

   and update with::

      conda update rapsearch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rapsearch


.. |required_by_rapsearch| conda:required_by:: rapsearch
.. |downloads_rapsearch| image:: https://img.shields.io/conda/dn/bioconda/rapsearch.svg?style=flat
   :alt:   (downloads)
.. |docker_rapsearch| image:: https://quay.io/repository/biocontainers/rapsearch/status
   :target: https://quay.io/repository/biocontainers/rapsearch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapsearch/README.html


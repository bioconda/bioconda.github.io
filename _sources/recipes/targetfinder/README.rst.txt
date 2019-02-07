.. title:: Package Recipe 'targetfinder'
.. highlight: bash


targetfinder
============

.. conda:recipe:: targetfinder
   :replaces_section_title:

   Plant small RNA target prediction tool

   :homepage: https://github.com/carringtonlab/TargetFinder
   :license: MIT
   :recipe: /`targetfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetfinder/meta.yaml>`_

   


.. conda:package:: targetfinder

   |downloads_targetfinder| |docker_targetfinder|

   :versions: 1.7

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_targetfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install targetfinder

   and update with::

      conda update targetfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/targetfinder


.. |required_by_targetfinder| conda:required_by:: targetfinder
.. |downloads_targetfinder| image:: https://img.shields.io/conda/dn/bioconda/targetfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_targetfinder| image:: https://quay.io/repository/biocontainers/targetfinder/status
   :target: https://quay.io/repository/biocontainers/targetfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targetfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targetfinder/README.html


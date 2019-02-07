.. title:: Package Recipe 'sprinkles'
.. highlight: bash


sprinkles
=========

.. conda:recipe:: sprinkles
   :replaces_section_title:

   Plugins\! Easy\!

   :homepage: http://an9.org/w/SprinklesPy
   :license: MIT License
   :recipe: /`sprinkles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinkles/meta.yaml>`_

   


.. conda:package:: sprinkles

   |downloads_sprinkles| |docker_sprinkles|

   :versions: 0.4.6

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_sprinkles|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sprinkles

   and update with::

      conda update sprinkles

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sprinkles


.. |required_by_sprinkles| conda:required_by:: sprinkles
.. |downloads_sprinkles| image:: https://img.shields.io/conda/dn/bioconda/sprinkles.svg?style=flat
   :alt:   (downloads)
.. |docker_sprinkles| image:: https://quay.io/repository/biocontainers/sprinkles/status
   :target: https://quay.io/repository/biocontainers/sprinkles







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sprinkles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sprinkles/README.html


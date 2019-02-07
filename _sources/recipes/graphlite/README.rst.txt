.. title:: Package Recipe 'graphlite'
.. highlight: bash


graphlite
=========

.. conda:recipe:: graphlite
   :replaces_section_title:

   embedded graph datastore

   :homepage: https://github.com/eugene-eeo/graphlite
   :license: MIT License
   :recipe: /`graphlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlite/meta.yaml>`_

   


.. conda:package:: graphlite

   |downloads_graphlite| |docker_graphlite|

   :versions: 1.0.5

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_graphlite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphlite

   and update with::

      conda update graphlite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/graphlite


.. |required_by_graphlite| conda:required_by:: graphlite
.. |downloads_graphlite| image:: https://img.shields.io/conda/dn/bioconda/graphlite.svg?style=flat
   :alt:   (downloads)
.. |docker_graphlite| image:: https://quay.io/repository/biocontainers/graphlite/status
   :target: https://quay.io/repository/biocontainers/graphlite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphlite/README.html


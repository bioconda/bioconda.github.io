.. title:: Package Recipe 'galaxy-ie-helpers'
.. highlight: bash


galaxy-ie-helpers
=================

.. conda:recipe:: galaxy-ie-helpers
   :replaces_section_title:

   Helper scripts to work with Galaxy\'s Interactive Environments

   :homepage: https://github.com/bgruening/galaxy_ie_helpers
   :license: MIT / MIT
   :recipe: /`galaxy-ie-helpers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ie-helpers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ie-helpers/meta.yaml>`_

   


.. conda:package:: galaxy-ie-helpers

   |downloads_galaxy-ie-helpers| |docker_galaxy-ie-helpers|

   :versions: 0.2.1

   :depends: :conda:package:`bioblend`  :conda:package:`python` 2.7* 

   :required~by: |required_by_galaxy-ie-helpers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-ie-helpers

   and update with::

      conda update galaxy-ie-helpers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/galaxy-ie-helpers


.. |required_by_galaxy-ie-helpers| conda:required_by:: galaxy-ie-helpers
.. |downloads_galaxy-ie-helpers| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ie-helpers.svg?style=flat
   :alt:   (downloads)
.. |docker_galaxy-ie-helpers| image:: https://quay.io/repository/biocontainers/galaxy-ie-helpers/status
   :target: https://quay.io/repository/biocontainers/galaxy-ie-helpers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ie-helpers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ie-helpers/README.html


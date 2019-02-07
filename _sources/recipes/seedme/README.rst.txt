.. title:: Package Recipe 'seedme'
.. highlight: bash


seedme
======

.. conda:recipe:: seedme
   :replaces_section_title:

   Python REST like client for SeedMe.org

   :homepage: https://www.seedme.org/downloads
   :license: GPL
   :recipe: /`seedme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seedme/meta.yaml>`_

   


.. conda:package:: seedme

   |downloads_seedme| |docker_seedme|

   :versions: 1.2.4, 1.2.0

   :depends: :conda:package:`curl`  :conda:package:`python` 2.7* :conda:package:`requests` ==2.7.0 

   :required~by: |required_by_seedme|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seedme

   and update with::

      conda update seedme

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seedme


.. |required_by_seedme| conda:required_by:: seedme
.. |downloads_seedme| image:: https://img.shields.io/conda/dn/bioconda/seedme.svg?style=flat
   :alt:   (downloads)
.. |docker_seedme| image:: https://quay.io/repository/biocontainers/seedme/status
   :target: https://quay.io/repository/biocontainers/seedme







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seedme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seedme/README.html


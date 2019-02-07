.. title:: Package Recipe 'galaxy-lib'
.. highlight: bash


galaxy-lib
==========

.. conda:recipe:: galaxy-lib
   :replaces_section_title:

   Subset of Galaxy \(http\:\/\/galaxyproject.org\/\) core code base designed to be used a library.

   :homepage: https://github.com/galaxyproject/galaxy-lib
   :license: Apache / Academic Free License (AFL)
   :recipe: /`galaxy-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib/meta.yaml>`_

   


.. conda:package:: galaxy-lib

   |downloads_galaxy-lib| |docker_galaxy-lib|

   :versions: 18.9.2, 18.9.1, 18.5.13, 18.5.5, 18.5.4, 17.9.10, 17.9.9, 17.9.7, 17.5.9, 17.1.2, 16.10.9, 16.10.8, 16.10.6, 16.10.4, 16.10.3, 16.7.10, 16.4.0

   :depends: :conda:package:`boltons`  :conda:package:`docutils`  :conda:package:`markupsafe`  :conda:package:`packaging`  :conda:package:`python` <3.7 :conda:package:`pyyaml`  :conda:package:`six` >=1.9.0 

   :required~by: |required_by_galaxy-lib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-lib

   and update with::

      conda update galaxy-lib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/galaxy-lib


.. |required_by_galaxy-lib| conda:required_by:: galaxy-lib
.. |downloads_galaxy-lib| image:: https://img.shields.io/conda/dn/bioconda/galaxy-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_galaxy-lib| image:: https://quay.io/repository/biocontainers/galaxy-lib/status
   :target: https://quay.io/repository/biocontainers/galaxy-lib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-lib/README.html


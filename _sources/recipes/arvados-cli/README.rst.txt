.. title:: Package Recipe 'arvados-cli'
.. highlight: bash


arvados-cli
===========

.. conda:recipe:: arvados-cli
   :replaces_section_title:

   Command line interface to Arvados\, a free and open source platform for big data science

   :homepage: http://doc.arvados.org/sdk/cli/index.html
   :license: Apache v2
   :recipe: /`arvados-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli/meta.yaml>`_

   


.. conda:package:: arvados-cli

   |downloads_arvados-cli| |docker_arvados-cli|

   :versions: 0.1.20151207150126

   :depends: :conda:package:`curl`  :conda:package:`ruby`  

   :required~by: |required_by_arvados-cli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arvados-cli

   and update with::

      conda update arvados-cli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arvados-cli


.. |required_by_arvados-cli| conda:required_by:: arvados-cli
.. |downloads_arvados-cli| image:: https://img.shields.io/conda/dn/bioconda/arvados-cli.svg?style=flat
   :alt:   (downloads)
.. |docker_arvados-cli| image:: https://quay.io/repository/biocontainers/arvados-cli/status
   :target: https://quay.io/repository/biocontainers/arvados-cli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cli/README.html


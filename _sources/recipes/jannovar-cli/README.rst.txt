.. title:: Package Recipe 'jannovar-cli'
.. highlight: bash


jannovar-cli
============

.. conda:recipe:: jannovar-cli
   :replaces_section_title:

   Java tool for performing annotation of VCF files

   :homepage: https://github.com/charite/jannovar
   :license: BSD2
   :recipe: /`jannovar-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jannovar-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jannovar-cli/meta.yaml>`_

   


.. conda:package:: jannovar-cli

   |downloads_jannovar-cli| |docker_jannovar-cli|

   :versions: 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.20

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_jannovar-cli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jannovar-cli

   and update with::

      conda update jannovar-cli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jannovar-cli


.. |required_by_jannovar-cli| conda:required_by:: jannovar-cli
.. |downloads_jannovar-cli| image:: https://img.shields.io/conda/dn/bioconda/jannovar-cli.svg?style=flat
   :alt:   (downloads)
.. |docker_jannovar-cli| image:: https://quay.io/repository/biocontainers/jannovar-cli/status
   :target: https://quay.io/repository/biocontainers/jannovar-cli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jannovar-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jannovar-cli/README.html


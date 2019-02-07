.. title:: Package Recipe 'sbg-cwl-runner'
.. highlight: bash


sbg-cwl-runner
==============

.. conda:recipe:: sbg-cwl-runner
   :replaces_section_title:

   A CWL Runner for SBG platform

   :homepage: https://github.com/kaushik-work/sbg-cwl-runner
   :license: Apache / Apache-2.0
   :recipe: /`sbg-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner/meta.yaml>`_

   A CWL Runner for the Seven Bridges Genomics cloud platform


.. conda:package:: sbg-cwl-runner

   |downloads_sbg-cwl-runner| |docker_sbg-cwl-runner|

   :versions: 2018.11

   :depends: :conda:package:`docopt`  :conda:package:`python` >3.5 :conda:package:`pyyaml`  :conda:package:`sevenbridges-python`  

   :required~by: |required_by_sbg-cwl-runner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sbg-cwl-runner

   and update with::

      conda update sbg-cwl-runner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sbg-cwl-runner


.. |required_by_sbg-cwl-runner| conda:required_by:: sbg-cwl-runner
.. |downloads_sbg-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/sbg-cwl-runner.svg?style=flat
   :alt:   (downloads)
.. |docker_sbg-cwl-runner| image:: https://quay.io/repository/biocontainers/sbg-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/sbg-cwl-runner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbg-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbg-cwl-runner/README.html


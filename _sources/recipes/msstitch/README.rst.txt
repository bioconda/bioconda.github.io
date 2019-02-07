.. title:: Package Recipe 'msstitch'
.. highlight: bash


msstitch
========

.. conda:recipe:: msstitch
   :replaces_section_title:

   MS proteomics post processing utilities

   :homepage: https://github.com/glormph/msstitch
   :license: MIT / MIT License
   :recipe: /`msstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch/meta.yaml>`_

   


.. conda:package:: msstitch

   |downloads_msstitch| |docker_msstitch|

   :versions: 2.11, 2.10, 2.9, 2.8, 2.7, 2.6, 2.5, 2.4, 2.3, 2.2, 1.0

   :depends: :conda:package:`biopython` >=1.69 :conda:package:`lxml`  :conda:package:`numpy`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyyaml`  

   :required~by: |required_by_msstitch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msstitch

   and update with::

      conda update msstitch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/msstitch


.. |required_by_msstitch| conda:required_by:: msstitch
.. |downloads_msstitch| image:: https://img.shields.io/conda/dn/bioconda/msstitch.svg?style=flat
   :alt:   (downloads)
.. |docker_msstitch| image:: https://quay.io/repository/biocontainers/msstitch/status
   :target: https://quay.io/repository/biocontainers/msstitch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msstitch/README.html


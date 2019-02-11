.. title:: Package Recipe 'cromwell'
.. highlight: bash


cromwell
========

.. conda:recipe:: cromwell
   :replaces_section_title:

   A Workflow Management System geared towards scientific workflows described in WDL

   :homepage: https://github.com/broadinstitute/cromwell
   :license: BSD
   :recipe: /`cromwell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell/meta.yaml>`_
   :links: biotools: :biotools:`cromwell`

   


.. conda:package:: cromwell

   |downloads_cromwell| |docker_cromwell|

   :versions: 0.37, 0.37a, 0.36, 0.35, 0.34, 0.32, 0.32a, 0.30, 0.29, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.19.4

   :depends: :conda:package:`findutils`  :conda:package:`openjdk` >=8,<9 :conda:package:`python`  

   :required~by: |required_by_cromwell|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cromwell

   and update with::

      conda update cromwell

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cromwell


.. |required_by_cromwell| conda:required_by:: cromwell
.. |downloads_cromwell| image:: https://img.shields.io/conda/dn/bioconda/cromwell.svg?style=flat
   :alt:   (downloads)
.. |docker_cromwell| image:: https://quay.io/repository/biocontainers/cromwell/status
   :target: https://quay.io/repository/biocontainers/cromwell







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromwell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromwell/README.html


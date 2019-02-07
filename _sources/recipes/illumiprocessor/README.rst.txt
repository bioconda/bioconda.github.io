.. title:: Package Recipe 'illumiprocessor'
.. highlight: bash


illumiprocessor
===============

.. conda:recipe:: illumiprocessor
   :replaces_section_title:

   illumiprocessor is a tool to batch process illumina sequencing reads using the excellent trimmomatic package.

   :homepage: https://github.com/faircloth-lab/illumiprocessor
   :license: BSD
   :recipe: /`illumiprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumiprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumiprocessor/meta.yaml>`_

   


.. conda:package:: illumiprocessor

   |downloads_illumiprocessor| |docker_illumiprocessor|

   :versions: 2.0.9

   :depends: :conda:package:`python` 2.7* :conda:package:`trimmomatic`  

   :required~by: |required_by_illumiprocessor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install illumiprocessor

   and update with::

      conda update illumiprocessor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/illumiprocessor


.. |required_by_illumiprocessor| conda:required_by:: illumiprocessor
.. |downloads_illumiprocessor| image:: https://img.shields.io/conda/dn/bioconda/illumiprocessor.svg?style=flat
   :alt:   (downloads)
.. |docker_illumiprocessor| image:: https://quay.io/repository/biocontainers/illumiprocessor/status
   :target: https://quay.io/repository/biocontainers/illumiprocessor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumiprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumiprocessor/README.html


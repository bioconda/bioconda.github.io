.. title:: Package Recipe 'tophat-recondition'
.. highlight: bash


tophat-recondition
==================

.. conda:recipe:: tophat-recondition
   :replaces_section_title:

   Post\-processor for TopHat unmapped reads

   :homepage: https://github.com/cbrueffer/tophat-recondition
   :license: BSD_2_clause
   :recipe: /`tophat-recondition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat-recondition/meta.yaml>`_

   


.. conda:package:: tophat-recondition

   |downloads_tophat-recondition| |docker_tophat-recondition|

   :versions: 1.4, 1.3, 1.2, 1.1

   :depends: :conda:package:`pysam`  :conda:package:`python` 2.7* 

   :required~by: |required_by_tophat-recondition|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tophat-recondition

   and update with::

      conda update tophat-recondition

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tophat-recondition


.. |required_by_tophat-recondition| conda:required_by:: tophat-recondition
.. |downloads_tophat-recondition| image:: https://img.shields.io/conda/dn/bioconda/tophat-recondition.svg?style=flat
   :alt:   (downloads)
.. |docker_tophat-recondition| image:: https://quay.io/repository/biocontainers/tophat-recondition/status
   :target: https://quay.io/repository/biocontainers/tophat-recondition







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat-recondition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat-recondition/README.html


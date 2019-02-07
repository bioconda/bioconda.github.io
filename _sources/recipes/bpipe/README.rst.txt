.. title:: Package Recipe 'bpipe'
.. highlight: bash


bpipe
=====

.. conda:recipe:: bpipe
   :replaces_section_title:

   Bpipe \- a tool for running and managing bioinformatics pipelines

   :homepage: http://docs.bpipe.org/
   :license: BSD-3-clause
   :recipe: /`bpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe/meta.yaml>`_

   


.. conda:package:: bpipe

   |downloads_bpipe| |docker_bpipe|

   :versions: 0.9.9.2

   :depends: :conda:package:`openjdk` 8.0* zulu8* 

   :required~by: |required_by_bpipe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpipe

   and update with::

      conda update bpipe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bpipe


.. |required_by_bpipe| conda:required_by:: bpipe
.. |downloads_bpipe| image:: https://img.shields.io/conda/dn/bioconda/bpipe.svg?style=flat
   :alt:   (downloads)
.. |docker_bpipe| image:: https://quay.io/repository/biocontainers/bpipe/status
   :target: https://quay.io/repository/biocontainers/bpipe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpipe/README.html


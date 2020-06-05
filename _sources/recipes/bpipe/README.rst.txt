:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpipe'
.. highlight: bash

bpipe
=====

.. conda:recipe:: bpipe
   :replaces_section_title:
   :noindex:

   Bpipe \- a tool for running and managing bioinformatics pipelines

   :homepage: http://docs.bpipe.org/
   :license: BSD-3-clause
   :recipe: /`bpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpipe/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts167`, biotools: :biotools:`bpipe`

   


.. conda:package:: bpipe

   |downloads_bpipe| |docker_bpipe|

   :versions:
      
      

      ``0.9.9.9-0``,  ``0.9.9.8-0``,  ``0.9.9.7-0``,  ``0.9.9.2-0``

      

   
   :depends coreutils: 
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpipe

   and update with::

      conda update bpipe

   or use the docker container::

      docker pull quay.io/biocontainers/bpipe:<tag>

   (see `bpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bpipe| image:: https://img.shields.io/conda/dn/bioconda/bpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bpipe
   :alt:   (downloads)
.. |docker_bpipe| image:: https://quay.io/repository/biocontainers/bpipe/status
   :target: https://quay.io/repository/biocontainers/bpipe
.. _`bpipe/tags`: https://quay.io/repository/biocontainers/bpipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpipe/README.html
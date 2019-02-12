:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mason'
.. highlight: bash

mason
=====

.. conda:recipe:: mason
   :replaces_section_title:

   Mason is a collection of tools for the simulation of biological sequences.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/mason2/README
   :license: https://github.com/seqan/seqan/tree/master/apps/mason2/LICENSE
   :recipe: /`mason <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason/meta.yaml>`_
   :links: biotools: :biotools:`mason`, doi: :doi:`10.1371/journal.pone.0049110`

   


.. conda:package:: mason

   |downloads_mason| |docker_mason|

   :versions: 2.0.8-1, 2.0.8-0, 2.0.7-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mason

   and update with::

      conda update mason

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mason:<tag>

   (see `mason/tags`_ for valid values for ``<tag>``)


.. |downloads_mason| image:: https://img.shields.io/conda/dn/bioconda/mason.svg?style=flat
   :alt:   (downloads)
.. |docker_mason| image:: https://quay.io/repository/biocontainers/mason/status
   :target: https://quay.io/repository/biocontainers/mason
.. _`mason/tags`: https://quay.io/repository/biocontainers/mason?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mason/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mason/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malt'
.. highlight: bash

malt
====

.. conda:recipe:: malt
   :replaces_section_title:
   :noindex:

   A tool for mapping metagenomic data

   :homepage: http://ab.inf.uni-tuebingen.de/software/malt/
   :license: GPLv3
   :recipe: /`malt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malt/meta.yaml>`_
   :links: biotools: :biotools:`malt`

   


.. conda:package:: malt

   |downloads_malt| |docker_malt|

   :versions:
      
      

      ``0.41-1``,  ``0.41-0``,  ``0.5.0-0``

      

   
   :depends openjdk: ``>=8.0.144,<9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install malt

   and update with::

      conda update malt

   or use the docker container::

      docker pull quay.io/biocontainers/malt:<tag>

   (see `malt/tags`_ for valid values for ``<tag>``)


.. |downloads_malt| image:: https://img.shields.io/conda/dn/bioconda/malt.svg?style=flat
   :target: https://anaconda.org/bioconda/malt
   :alt:   (downloads)
.. |docker_malt| image:: https://quay.io/repository/biocontainers/malt/status
   :target: https://quay.io/repository/biocontainers/malt
.. _`malt/tags`: https://quay.io/repository/biocontainers/malt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malt/README.html
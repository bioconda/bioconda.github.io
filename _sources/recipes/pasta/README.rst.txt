:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasta'
.. highlight: bash

pasta
=====

.. conda:recipe:: pasta
   :replaces_section_title:

   An implementation of the PASTA \(Practical Alignment using Sate and TrAnsitivity\) algorithm

   :homepage: https://github.com/smirarab/pasta
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`pasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasta/meta.yaml>`_

   


.. conda:package:: pasta

   |downloads_pasta| |docker_pasta|

   :versions: 1.7.8-3, 1.7.8-2, 1.7.8-0, 0.2-0
   
   :depends dendropy: >=4.1.0
   :depends openjdk: 
   :depends pcre: >=8.41,<9.0a0
   :depends pymongo: >=3.3.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pasta

   and update with::

      conda update pasta

   or use the docker container::

      docker pull quay.io/biocontainers/pasta:<tag>

   (see `pasta/tags`_ for valid values for ``<tag>``)


.. |downloads_pasta| image:: https://img.shields.io/conda/dn/bioconda/pasta.svg?style=flat
   :alt:   (downloads)
.. |docker_pasta| image:: https://quay.io/repository/biocontainers/pasta/status
   :target: https://quay.io/repository/biocontainers/pasta
.. _`pasta/tags`: https://quay.io/repository/biocontainers/pasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasta/README.html
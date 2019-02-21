:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reago'
.. highlight: bash

reago
=====

.. conda:recipe:: reago
   :replaces_section_title:

   An assembly tool for 16S ribosomal RNA recovery from metagenomic data

   :homepage: https://github.com/chengyuan/reago-1.1
   :license: Unknown
   :recipe: /`reago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reago/meta.yaml>`_

   


.. conda:package:: reago

   |downloads_reago| |docker_reago|

   :versions: 1.1-1, 1.1-0
   
   :depends genometools-genometools: 
   
   :depends infernal: ==1.1.1
   
   :depends networkx: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reago

   and update with::

      conda update reago

   or use the docker container::

      docker pull quay.io/biocontainers/reago:<tag>

   (see `reago/tags`_ for valid values for ``<tag>``)


.. |downloads_reago| image:: https://img.shields.io/conda/dn/bioconda/reago.svg?style=flat
   :alt:   (downloads)
.. |docker_reago| image:: https://quay.io/repository/biocontainers/reago/status
   :target: https://quay.io/repository/biocontainers/reago
.. _`reago/tags`: https://quay.io/repository/biocontainers/reago?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reago/README.html
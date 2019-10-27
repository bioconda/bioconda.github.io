:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer'
.. highlight: bash

mummer
======

.. conda:recipe:: mummer
   :replaces_section_title:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: http://mummer.sourceforge.net/
   :license: The Artistic License
   :recipe: /`mummer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer/meta.yaml>`_
   :links: biotools: :biotools:`mummer`

   


.. conda:package:: mummer

   |downloads_mummer| |docker_mummer|

   :versions: 3.23-9, 3.23-8, 3.23-7, 3.23-6, 3.23-5, 3.23-4, 3.23-3, 3.23-2, 3.23-1, 3.23-0
   
   :depends libcxx: >=4.0.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mummer

   and update with::

      conda update mummer

   or use the docker container::

      docker pull quay.io/biocontainers/mummer:<tag>

   (see `mummer/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer| image:: https://img.shields.io/conda/dn/bioconda/mummer.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer
   :alt:   (downloads)
.. |docker_mummer| image:: https://quay.io/repository/biocontainers/mummer/status
   :target: https://quay.io/repository/biocontainers/mummer
.. _`mummer/tags`: https://quay.io/repository/biocontainers/mummer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer/README.html
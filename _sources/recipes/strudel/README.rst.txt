:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strudel'
.. highlight: bash

strudel
=======

.. conda:recipe:: strudel
   :replaces_section_title:
   :noindex:

   Strudel is a graphical tool for visualizing genetic and physical maps of genomes for comparative purposes.

   :homepage: https://ics.hutton.ac.uk/strudel
   :license: BSD-2-Clause
   :recipe: /`strudel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strudel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strudel/meta.yaml>`_

   


.. conda:package:: strudel

   |downloads_strudel| |docker_strudel|

   :versions:
      
      

      ``1.15.08.25-1``,  ``1.15.08.25-0``

      

   
   :depends openjdk: ``>=6,<9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strudel

   and update with::

      conda update strudel

   or use the docker container::

      docker pull quay.io/biocontainers/strudel:<tag>

   (see `strudel/tags`_ for valid values for ``<tag>``)


.. |downloads_strudel| image:: https://img.shields.io/conda/dn/bioconda/strudel.svg?style=flat
   :target: https://anaconda.org/bioconda/strudel
   :alt:   (downloads)
.. |docker_strudel| image:: https://quay.io/repository/biocontainers/strudel/status
   :target: https://quay.io/repository/biocontainers/strudel
.. _`strudel/tags`: https://quay.io/repository/biocontainers/strudel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strudel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strudel/README.html
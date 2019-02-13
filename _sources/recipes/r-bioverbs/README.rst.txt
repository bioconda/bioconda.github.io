:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bioverbs'
.. highlight: bash

r-bioverbs
==========

.. conda:recipe:: r-bioverbs
   :replaces_section_title:

   S4 generic functions for bioinformatics\, part of the basejump toolkit.

   :homepage: https://github.com/steinbaugh/bioverbs
   :license: MIT / MIT
   :recipe: /`r-bioverbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bioverbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bioverbs/meta.yaml>`_

   


.. conda:package:: r-bioverbs

   |downloads_r-bioverbs| |docker_r-bioverbs|

   :versions: 0.1.6-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bioverbs

   and update with::

      conda update r-bioverbs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bioverbs:<tag>

   (see `r-bioverbs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bioverbs| image:: https://img.shields.io/conda/dn/bioconda/r-bioverbs.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bioverbs| image:: https://quay.io/repository/biocontainers/r-bioverbs/status
   :target: https://quay.io/repository/biocontainers/r-bioverbs
.. _`r-bioverbs/tags`: https://quay.io/repository/biocontainers/r-bioverbs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bioverbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bioverbs/README.html
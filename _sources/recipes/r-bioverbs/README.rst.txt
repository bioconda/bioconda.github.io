:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bioverbs'
.. highlight: bash

r-bioverbs
==========

.. conda:recipe:: r-bioverbs
   :replaces_section_title:

   S4 generic functions for bioinformatics.

   :homepage: https://bioverbs.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/bioverbs
   :license: MIT
   :recipe: /`r-bioverbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bioverbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bioverbs/meta.yaml>`_

   


.. conda:package:: r-bioverbs

   |downloads_r-bioverbs| |docker_r-bioverbs|

   :versions: 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.2.0-0, 0.1.19-0, 0.1.8-0, 0.1.6-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bioverbs

   and update with::

      conda update r-bioverbs

   or use the docker container::

      docker pull quay.io/biocontainers/r-bioverbs:<tag>

   (see `r-bioverbs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bioverbs| image:: https://img.shields.io/conda/dn/bioconda/r-bioverbs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bioverbs
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
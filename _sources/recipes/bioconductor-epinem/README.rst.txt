:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epinem'
.. highlight: bash

bioconductor-epinem
===================

.. conda:recipe:: bioconductor-epinem
   :replaces_section_title:

   epiNEM

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/epiNEM.html
   :license: GPL-3
   :recipe: /`bioconductor-epinem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epinem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epinem/meta.yaml>`_

   epiNEM is an extension of the original Nested Effects Models \(NEM\). EpiNEM is able to take into account double knockouts and infer more complex network signalling pathways.


.. conda:package:: bioconductor-epinem

   |downloads_bioconductor-epinem| |docker_bioconductor-epinem|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epinem

   and update with::

      conda update bioconductor-epinem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epinem:<tag>

   (see `bioconductor-epinem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epinem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epinem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epinem
   :alt:   (downloads)
.. |docker_bioconductor-epinem| image:: https://quay.io/repository/biocontainers/bioconductor-epinem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epinem
.. _`bioconductor-epinem/tags`: https://quay.io/repository/biocontainers/bioconductor-epinem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epinem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epinem/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnordt'
.. highlight: bash

bioconductor-cnordt
===================

.. conda:recipe:: bioconductor-cnordt
   :replaces_section_title:

   This add\-on to the package CellNOptR handles time\-course data\, as opposed to steady state data in CellNOptR. It scales the simulation step to allow comparison and model fitting for time\-course data. Future versions will optimize delays and strengths for each edge.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNORdt.html
   :license: GPL-2
   :recipe: /`bioconductor-cnordt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnordt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnordt/meta.yaml>`_

   


.. conda:package:: bioconductor-cnordt

   |downloads_bioconductor-cnordt| |docker_bioconductor-cnordt|

   :versions: 1.24.1-0, 1.24.0-0
   
   :depends bioconductor-cellnoptr: >=1.28.0,<1.29.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-abind: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnordt

   and update with::

      conda update bioconductor-cnordt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnordt:<tag>

   (see `bioconductor-cnordt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnordt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnordt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnordt| image:: https://quay.io/repository/biocontainers/bioconductor-cnordt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnordt
.. _`bioconductor-cnordt/tags`: https://quay.io/repository/biocontainers/bioconductor-cnordt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnordt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnordt/README.html
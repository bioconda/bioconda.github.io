:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spikein'
.. highlight: bash

bioconductor-spikein
====================

.. conda:recipe:: bioconductor-spikein
   :replaces_section_title:

   Contains the HGU133 and HGU95 spikein experiment data.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SpikeIn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spikein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikein/meta.yaml>`_

   


.. conda:package:: bioconductor-spikein

   |downloads_bioconductor-spikein| |docker_bioconductor-spikein|

   :versions: 1.24.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spikein

   and update with::

      conda update bioconductor-spikein

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spikein:<tag>

   (see `bioconductor-spikein/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spikein| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikein.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-spikein| image:: https://quay.io/repository/biocontainers/bioconductor-spikein/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikein
.. _`bioconductor-spikein/tags`: https://quay.io/repository/biocontainers/bioconductor-spikein?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikein/README.html
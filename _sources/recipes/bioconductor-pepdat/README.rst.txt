:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepdat'
.. highlight: bash

bioconductor-pepdat
===================

.. conda:recipe:: bioconductor-pepdat
   :replaces_section_title:

   Provides sample files and data for the vignettes of pepStat and Pviz as well as peptide collections for HIV and SIV.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/pepDat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepdat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepdat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepdat/meta.yaml>`_

   


.. conda:package:: bioconductor-pepdat

   |downloads_bioconductor-pepdat| |docker_bioconductor-pepdat|

   :versions: 1.2.0-0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepdat

   and update with::

      conda update bioconductor-pepdat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pepdat:<tag>

   (see `bioconductor-pepdat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepdat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepdat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pepdat| image:: https://quay.io/repository/biocontainers/bioconductor-pepdat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepdat
.. _`bioconductor-pepdat/tags`: https://quay.io/repository/biocontainers/bioconductor-pepdat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepdat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepdat/README.html
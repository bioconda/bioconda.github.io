:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maqcsubset'
.. highlight: bash

bioconductor-maqcsubset
=======================

.. conda:recipe:: bioconductor-maqcsubset
   :replaces_section_title:

   Data Package automatically created on Sun Nov 19 15\:59\:29 2006.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MAQCsubset.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-maqcsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubset/meta.yaml>`_

   


.. conda:package:: bioconductor-maqcsubset

   |downloads_bioconductor-maqcsubset| |docker_bioconductor-maqcsubset|

   :versions: 1.20.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-lumi: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maqcsubset

   and update with::

      conda update bioconductor-maqcsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maqcsubset:<tag>

   (see `bioconductor-maqcsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maqcsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcsubset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-maqcsubset| image:: https://quay.io/repository/biocontainers/bioconductor-maqcsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcsubset
.. _`bioconductor-maqcsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-maqcsubset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcsubset/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanstemcell'
.. highlight: bash

bioconductor-humanstemcell
==========================

.. conda:recipe:: bioconductor-humanstemcell
   :replaces_section_title:

   Affymetrix time course experiment on human stem cells \(two time points\: undifferentiated and differentiated\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/humanStemCell.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanstemcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanstemcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanstemcell/meta.yaml>`_

   


.. conda:package:: bioconductor-humanstemcell

   |downloads_bioconductor-humanstemcell| |docker_bioconductor-humanstemcell|

   :versions: 0.22.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-hgu133plus2.db: >=3.2.0,<3.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-humanstemcell

   and update with::

      conda update bioconductor-humanstemcell

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanstemcell:<tag>

   (see `bioconductor-humanstemcell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanstemcell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanstemcell.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-humanstemcell| image:: https://quay.io/repository/biocontainers/bioconductor-humanstemcell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanstemcell
.. _`bioconductor-humanstemcell/tags`: https://quay.io/repository/biocontainers/bioconductor-humanstemcell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanstemcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanstemcell/README.html
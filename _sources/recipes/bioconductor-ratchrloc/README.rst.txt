:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ratchrloc'
.. highlight: bash

bioconductor-ratchrloc
======================

.. conda:recipe:: bioconductor-ratchrloc
   :replaces_section_title:

   Annotation data file for ratCHRLOC assembled using data from public data repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/ratCHRLOC.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-ratchrloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ratchrloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ratchrloc/meta.yaml>`_

   


.. conda:package:: bioconductor-ratchrloc

   |downloads_bioconductor-ratchrloc| |docker_bioconductor-ratchrloc|

   :versions: 2.1.6-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ratchrloc

   and update with::

      conda update bioconductor-ratchrloc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ratchrloc:<tag>

   (see `bioconductor-ratchrloc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ratchrloc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ratchrloc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ratchrloc| image:: https://quay.io/repository/biocontainers/bioconductor-ratchrloc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ratchrloc
.. _`bioconductor-ratchrloc/tags`: https://quay.io/repository/biocontainers/bioconductor-ratchrloc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ratchrloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ratchrloc/README.html
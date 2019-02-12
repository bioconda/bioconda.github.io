:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hs.mirna'
.. highlight: bash

bioconductor-rmir.hs.mirna
==========================

.. conda:recipe:: bioconductor-rmir.hs.mirna
   :replaces_section_title:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/RmiR.Hs.miRNA.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hs.mirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna/meta.yaml>`_

   


.. conda:package:: bioconductor-rmir.hs.mirna

   |downloads_bioconductor-rmir.hs.mirna| |docker_bioconductor-rmir.hs.mirna|

   :versions: 1.0.7-3, 1.0.7-2, 1.0.7-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmir.hs.mirna

   and update with::

      conda update bioconductor-rmir.hs.mirna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna:<tag>

   (see `bioconductor-rmir.hs.mirna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmir.hs.mirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hs.mirna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hs.mirna| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna
.. _`bioconductor-rmir.hs.mirna/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html
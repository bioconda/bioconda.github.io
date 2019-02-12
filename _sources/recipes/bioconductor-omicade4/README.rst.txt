:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicade4'
.. highlight: bash

bioconductor-omicade4
=====================

.. conda:recipe:: bioconductor-omicade4
   :replaces_section_title:

   Multiple co\-inertia analysis of omics datasets

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/omicade4.html
   :license: GPL-2
   :recipe: /`bioconductor-omicade4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicade4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicade4/meta.yaml>`_
   :links: biotools: :biotools:`omicade4`

   


.. conda:package:: bioconductor-omicade4

   |downloads_bioconductor-omicade4| |docker_bioconductor-omicade4|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.1-0
   
   :depends bioconductor-made4: >=1.56.0,<1.57.0
   
   :depends r-ade4: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicade4

   and update with::

      conda update bioconductor-omicade4

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-omicade4:<tag>

   (see `bioconductor-omicade4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicade4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicade4.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-omicade4| image:: https://quay.io/repository/biocontainers/bioconductor-omicade4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicade4
.. _`bioconductor-omicade4/tags`: https://quay.io/repository/biocontainers/bioconductor-omicade4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicade4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicade4/README.html
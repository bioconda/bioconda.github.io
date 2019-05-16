:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrdp'
.. highlight: bash

bioconductor-rrdp
=================

.. conda:recipe:: bioconductor-rrdp
   :replaces_section_title:

   Seamlessly interfaces RDP classifier \(version 2.9\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/rRDP.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-rrdp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdp/meta.yaml>`_
   :links: biotools: :biotools:`rrdp`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rrdp

   |downloads_bioconductor-rrdp| |docker_bioconductor-rrdp|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rrdp

   and update with::

      conda update bioconductor-rrdp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrdp:<tag>

   (see `bioconductor-rrdp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrdp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrdp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrdp
   :alt:   (downloads)
.. |docker_bioconductor-rrdp| image:: https://quay.io/repository/biocontainers/bioconductor-rrdp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrdp
.. _`bioconductor-rrdp/tags`: https://quay.io/repository/biocontainers/bioconductor-rrdp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrdp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrdp/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weaver'
.. highlight: bash

bioconductor-weaver
===================

.. conda:recipe:: bioconductor-weaver
   :replaces_section_title:

   Tools and extensions for processing Sweave documents

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/weaver.html
   :license: GPL-2
   :recipe: /`bioconductor-weaver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weaver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weaver/meta.yaml>`_
   :links: biotools: :biotools:`weaver`, doi: :doi:`10.1038/nmeth.3252`

   This package provides enhancements on the Sweave\(\) function in the base package.  In particular a facility for caching code chunk results is included.


.. conda:package:: bioconductor-weaver

   |downloads_bioconductor-weaver| |docker_bioconductor-weaver|

   :versions: 1.54.0-0, 1.52.0-0, 1.50.0-1, 1.50.0-0, 1.48.0-0, 1.46.0-0, 1.44.0-0, 1.42.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-codetools: 
   :depends r-digest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-weaver

   and update with::

      conda update bioconductor-weaver

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-weaver:<tag>

   (see `bioconductor-weaver/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-weaver| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weaver.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weaver
   :alt:   (downloads)
.. |docker_bioconductor-weaver| image:: https://quay.io/repository/biocontainers/bioconductor-weaver/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weaver
.. _`bioconductor-weaver/tags`: https://quay.io/repository/biocontainers/bioconductor-weaver?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weaver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weaver/README.html
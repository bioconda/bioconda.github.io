:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaggle'
.. highlight: bash

bioconductor-gaggle
===================

.. conda:recipe:: bioconductor-gaggle
   :replaces_section_title:
   :noindex:

   Broadcast data between R and Gaggle

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/gaggle.html
   :license: GPL version 2 or newer
   :recipe: /`bioconductor-gaggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaggle/meta.yaml>`_

   This package contains functions enabling data exchange between R and Gaggle enabled bioinformatics software\, including Cytoscape\, Firegoose and Gaggle Genome Browser.


.. conda:package:: bioconductor-gaggle

   |downloads_bioconductor-gaggle| |docker_bioconductor-gaggle|

   :versions:
      
      

      ``1.58.0-1``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      

   
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rjava: ``>=0.4``
   :depends r-runit: ``>=0.4.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gaggle

   and update with::

      conda update bioconductor-gaggle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaggle:<tag>

   (see `bioconductor-gaggle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaggle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaggle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaggle
   :alt:   (downloads)
.. |docker_bioconductor-gaggle| image:: https://quay.io/repository/biocontainers/bioconductor-gaggle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaggle
.. _`bioconductor-gaggle/tags`: https://quay.io/repository/biocontainers/bioconductor-gaggle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaggle/README.html
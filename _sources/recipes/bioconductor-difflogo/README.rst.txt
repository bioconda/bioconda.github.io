:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-difflogo'
.. highlight: bash

bioconductor-difflogo
=====================

.. conda:recipe:: bioconductor-difflogo
   :replaces_section_title:
   :noindex:

   DiffLogo\: A comparative visualisation of biooligomer motifs

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DiffLogo.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-difflogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo/meta.yaml>`_

   DiffLogo is an easy\-to\-use tool to visualize motif differences.


.. conda:package:: bioconductor-difflogo

   |downloads_bioconductor-difflogo| |docker_bioconductor-difflogo|

   :versions:
      
      

      ``2.14.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cba: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-difflogo

   and update with::

      conda update bioconductor-difflogo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-difflogo:<tag>

   (see `bioconductor-difflogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-difflogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-difflogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-difflogo
   :alt:   (downloads)
.. |docker_bioconductor-difflogo| image:: https://quay.io/repository/biocontainers/bioconductor-difflogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-difflogo
.. _`bioconductor-difflogo/tags`: https://quay.io/repository/biocontainers/bioconductor-difflogo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-difflogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-difflogo/README.html
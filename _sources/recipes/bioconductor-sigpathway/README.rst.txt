:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigpathway'
.. highlight: bash

bioconductor-sigpathway
=======================

.. conda:recipe:: bioconductor-sigpathway
   :replaces_section_title:
   :noindex:

   Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/sigPathway.html
   :license: GPL-2
   :recipe: /`bioconductor-sigpathway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigpathway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigpathway/meta.yaml>`_
   :links: biotools: :biotools:`sigpathway`, doi: :doi:`10.1038/nmeth.3252`

   Conducts pathway analysis by calculating the NT\_k and NE\_k statistics as described in Tian et al. \(2005\)


.. conda:package:: bioconductor-sigpathway

   |downloads_bioconductor-sigpathway| |docker_bioconductor-sigpathway|

   :versions:
      
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.1-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigpathway

   and update with::

      conda update bioconductor-sigpathway

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigpathway:<tag>

   (see `bioconductor-sigpathway/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigpathway| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigpathway.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigpathway
   :alt:   (downloads)
.. |docker_bioconductor-sigpathway| image:: https://quay.io/repository/biocontainers/bioconductor-sigpathway/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigpathway
.. _`bioconductor-sigpathway/tags`: https://quay.io/repository/biocontainers/bioconductor-sigpathway?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigpathway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigpathway/README.html
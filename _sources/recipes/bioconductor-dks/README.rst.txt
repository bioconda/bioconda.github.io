:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dks'
.. highlight: bash

bioconductor-dks
================

.. conda:recipe:: bioconductor-dks
   :replaces_section_title:
   :noindex:

   The double Kolmogorov\-Smirnov package for evaluating multiple testing procedures.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/dks.html
   :license: GPL
   :recipe: /`bioconductor-dks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dks/meta.yaml>`_

   The dks package consists of a set of diagnostic functions for multiple testing methods. The functions can be used to determine if the p\-values produced by a multiple testing procedure are correct. These functions are designed to be applied to simulated data. The functions require the entire set of p\-values from multiple simulated studies\, so that the joint distribution can be evaluated.


.. conda:package:: bioconductor-dks

   |downloads_bioconductor-dks| |docker_bioconductor-dks|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cubature: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dks

   and update with::

      conda update bioconductor-dks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dks:<tag>

   (see `bioconductor-dks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dks
   :alt:   (downloads)
.. |docker_bioconductor-dks| image:: https://quay.io/repository/biocontainers/bioconductor-dks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dks
.. _`bioconductor-dks/tags`: https://quay.io/repository/biocontainers/bioconductor-dks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dks/README.html
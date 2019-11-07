:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpsymphony'
.. highlight: bash

bioconductor-lpsymphony
=======================

.. conda:recipe:: bioconductor-lpsymphony
   :replaces_section_title:

   Symphony integer linear programming solver in R

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/lpsymphony.html
   :license: EPL
   :recipe: /`bioconductor-lpsymphony <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony/meta.yaml>`_
   :links: biotools: :biotools:`lpsymphony`, doi: :doi:`10.1007/0-387-23529-9_5`

   This package was derived from Rsymphony\_0.1\-17 from CRAN. These packages provide an R interface to SYMPHONY\, an open\-source linear programming solver written in C\+\+. The main difference between this package and Rsymphony is that it includes the solver source code \(SYMPHONY version 5.6\)\, while Rsymphony expects to find header and library files on the users\' system. Thus the intention of lpsymphony is to provide an easy to install interface to SYMPHONY. For Windows\, precompiled DLLs are included in this package.


.. conda:package:: bioconductor-lpsymphony

   |downloads_bioconductor-lpsymphony| |docker_bioconductor-lpsymphony|

   :versions: 1.14.0-0, 1.12.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.1-0, 1.2.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lpsymphony

   and update with::

      conda update bioconductor-lpsymphony

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpsymphony:<tag>

   (see `bioconductor-lpsymphony/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpsymphony| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpsymphony.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpsymphony
   :alt:   (downloads)
.. |docker_bioconductor-lpsymphony| image:: https://quay.io/repository/biocontainers/bioconductor-lpsymphony/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpsymphony
.. _`bioconductor-lpsymphony/tags`: https://quay.io/repository/biocontainers/bioconductor-lpsymphony?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html
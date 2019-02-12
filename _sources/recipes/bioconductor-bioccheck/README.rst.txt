:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioccheck'
.. highlight: bash

bioconductor-bioccheck
======================

.. conda:recipe:: bioconductor-bioccheck
   :replaces_section_title:

   Executes Bioconductor\-specific package checks.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioccheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccheck/meta.yaml>`_

   


.. conda:package:: bioconductor-bioccheck

   |downloads_bioconductor-bioccheck| |docker_bioconductor-bioccheck|

   :versions: 1.18.0-0
   
   :depends bioconductor-biocviews: >=1.50.0,<1.51.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biocmanager: 
   
   :depends r-codetools: 
   
   :depends r-httr: 
   
   :depends r-knitr: 
   
   :depends r-optparse: 
   
   :depends r-stringdist: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioccheck

   and update with::

      conda update bioconductor-bioccheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bioccheck:<tag>

   (see `bioconductor-bioccheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioccheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioccheck.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bioccheck| image:: https://quay.io/repository/biocontainers/bioconductor-bioccheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioccheck
.. _`bioconductor-bioccheck/tags`: https://quay.io/repository/biocontainers/bioconductor-bioccheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioccheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioccheck/README.html
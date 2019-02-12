:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kodata'
.. highlight: bash

bioconductor-kodata
===================

.. conda:recipe:: bioconductor-kodata
   :replaces_section_title:

   Contains consensus genomic signatures \(CGS\) for experimental cell\-line specific gene knock\-outs as well as baseline gene expression data for a subset of experimental cell\-lines. Intended for use with package KEGGlincs.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/KOdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-kodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kodata/meta.yaml>`_

   


.. conda:package:: bioconductor-kodata

   |downloads_bioconductor-kodata| |docker_bioconductor-kodata|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kodata

   and update with::

      conda update bioconductor-kodata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-kodata:<tag>

   (see `bioconductor-kodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kodata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-kodata| image:: https://quay.io/repository/biocontainers/bioconductor-kodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kodata
.. _`bioconductor-kodata/tags`: https://quay.io/repository/biocontainers/bioconductor-kodata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kodata/README.html
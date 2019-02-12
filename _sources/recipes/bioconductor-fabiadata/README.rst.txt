:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fabiadata'
.. highlight: bash

bioconductor-fabiadata
======================

.. conda:recipe:: bioconductor-fabiadata
   :replaces_section_title:

   Supplying gene expression data sets for the demos of the biclustering method \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). The following three data sets are provided\: A\) breast cancer \(van\'t Veer\, Nature\, 2002\)\, B\) multiple tissues \(Su\, PNAS\, 2002\)\, and C\) diffuse large\-B\-cell lymphoma \(Rosenwald\, N Engl J Med\, 2002\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/fabiaData.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-fabiadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata/meta.yaml>`_

   


.. conda:package:: bioconductor-fabiadata

   |downloads_bioconductor-fabiadata| |docker_bioconductor-fabiadata|

   :versions: 1.20.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fabiadata

   and update with::

      conda update bioconductor-fabiadata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fabiadata:<tag>

   (see `bioconductor-fabiadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fabiadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fabiadata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fabiadata| image:: https://quay.io/repository/biocontainers/bioconductor-fabiadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fabiadata
.. _`bioconductor-fabiadata/tags`: https://quay.io/repository/biocontainers/bioconductor-fabiadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html
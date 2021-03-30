:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppidata'
.. highlight: bash

bioconductor-ppidata
====================

.. conda:recipe:: bioconductor-ppidata
   :replaces_section_title:
   :noindex:

   A package that contains the bait to prey directed graphs for protein\-protein interactions.

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/ppiData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ppidata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppidata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppidata/meta.yaml>`_

   This package contains the directed graphs for protein interaction data as derived from Y2H and APMS as well as the code used to obtain the y2h data from IntAct Repository.


.. conda:package:: bioconductor-ppidata

   |downloads_bioconductor-ppidata| |docker_bioconductor-ppidata|

   :versions:
      
      

      ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ppidata

   and update with::

      conda update bioconductor-ppidata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ppidata:<tag>

   (see `bioconductor-ppidata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ppidata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppidata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ppidata
   :alt:   (downloads)
.. |docker_bioconductor-ppidata| image:: https://quay.io/repository/biocontainers/bioconductor-ppidata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppidata
.. _`bioconductor-ppidata/tags`: https://quay.io/repository/biocontainers/bioconductor-ppidata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppidata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppidata/README.html
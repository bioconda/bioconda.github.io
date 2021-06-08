:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epivizrchart'
.. highlight: bash

bioconductor-epivizrchart
=========================

.. conda:recipe:: bioconductor-epivizrchart
   :replaces_section_title:
   :noindex:

   R interface to epiviz web components

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/epivizrChart.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epivizrchart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart/meta.yaml>`_

   This package provides an API for interactive visualization of genomic data using epiviz web components. Objects in R\/BioConductor can be used to generate interactive R markdown\/notebook documents or can be visualized in the R Studio\'s default viewer.


.. conda:package:: bioconductor-epivizrchart

   |downloads_bioconductor-epivizrchart| |docker_bioconductor-epivizrchart|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-epivizrdata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-epivizrserver: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-htmltools: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrchart

   and update with::

      conda update bioconductor-epivizrchart

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epivizrchart:<tag>

   (see `bioconductor-epivizrchart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epivizrchart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrchart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epivizrchart
   :alt:   (downloads)
.. |docker_bioconductor-epivizrchart| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrchart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrchart
.. _`bioconductor-epivizrchart/tags`: https://quay.io/repository/biocontainers/bioconductor-epivizrchart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html
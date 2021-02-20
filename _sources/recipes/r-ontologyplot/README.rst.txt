:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ontologyplot'
.. highlight: bash

r-ontologyplot
==============

.. conda:recipe:: r-ontologyplot
   :replaces_section_title:
   :noindex:

   Functions for visualising sets of ontological terms using the \'graphviz\' layout system.

   :homepage: https://CRAN.R-project.org/package=ontologyPlot
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-ontologyplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ontologyplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ontologyplot/meta.yaml>`_

   


.. conda:package:: r-ontologyplot

   |downloads_r-ontologyplot| |docker_r-ontologyplot|

   :versions:
      
      

      ``1.6-0``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends bioconductor-rgraphviz: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ontologyindex: 
   :depends r-paintmap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ontologyplot

   and update with::

      conda update r-ontologyplot

   or use the docker container::

      docker pull quay.io/biocontainers/r-ontologyplot:<tag>

   (see `r-ontologyplot/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ontologyplot| image:: https://img.shields.io/conda/dn/bioconda/r-ontologyplot.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ontologyplot
   :alt:   (downloads)
.. |docker_r-ontologyplot| image:: https://quay.io/repository/biocontainers/r-ontologyplot/status
   :target: https://quay.io/repository/biocontainers/r-ontologyplot
.. _`r-ontologyplot/tags`: https://quay.io/repository/biocontainers/r-ontologyplot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ontologyplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ontologyplot/README.html
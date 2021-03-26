:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scxa-plots'
.. highlight: bash

scxa-plots
==========

.. conda:recipe:: scxa-plots
   :replaces_section_title:
   :noindex:

   A set of wrappers to produce some bespoke plots used by the team behind Single\-cell Expresion Atlas \(SCXA\) in single\-cell RNA\-seq analysis. Not to be confused with the plots displayed in SCXA itself.

   :homepage: https://github.com/ebi-gene-expression-group/scxa-plots
   :license: Apache / Apache-2.0
   :recipe: /`scxa-plots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxa-plots/meta.yaml>`_

   


.. conda:package:: scxa-plots

   |downloads_scxa-plots| |docker_scxa-plots|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bioconductor-delayedarray: 
   :depends bioconductor-dropletutils: 
   :depends font-ttf-dejavu-sans-mono: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-optparse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scxa-plots

   and update with::

      conda update scxa-plots

   or use the docker container::

      docker pull quay.io/biocontainers/scxa-plots:<tag>

   (see `scxa-plots/tags`_ for valid values for ``<tag>``)


.. |downloads_scxa-plots| image:: https://img.shields.io/conda/dn/bioconda/scxa-plots.svg?style=flat
   :target: https://anaconda.org/bioconda/scxa-plots
   :alt:   (downloads)
.. |docker_scxa-plots| image:: https://quay.io/repository/biocontainers/scxa-plots/status
   :target: https://quay.io/repository/biocontainers/scxa-plots
.. _`scxa-plots/tags`: https://quay.io/repository/biocontainers/scxa-plots?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scxa-plots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scxa-plots/README.html
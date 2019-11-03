:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humantranscriptomecompendium'
.. highlight: bash

bioconductor-humantranscriptomecompendium
=========================================

.. conda:recipe:: bioconductor-humantranscriptomecompendium
   :replaces_section_title:

   Provide tools for working with a compendium of human transcriptome sequences \(originally htxcomp\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/HumanTranscriptomeCompendium.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humantranscriptomecompendium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humantranscriptomecompendium/meta.yaml>`_

   


.. conda:package:: bioconductor-humantranscriptomecompendium

   |downloads_bioconductor-humantranscriptomecompendium| |docker_bioconductor-humantranscriptomecompendium|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-ssrch: >=1.2.0,<1.3.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-humantranscriptomecompendium

   and update with::

      conda update bioconductor-humantranscriptomecompendium

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humantranscriptomecompendium:<tag>

   (see `bioconductor-humantranscriptomecompendium/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humantranscriptomecompendium| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humantranscriptomecompendium.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humantranscriptomecompendium
   :alt:   (downloads)
.. |docker_bioconductor-humantranscriptomecompendium| image:: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium
.. _`bioconductor-humantranscriptomecompendium/tags`: https://quay.io/repository/biocontainers/bioconductor-humantranscriptomecompendium?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humantranscriptomecompendium/README.html
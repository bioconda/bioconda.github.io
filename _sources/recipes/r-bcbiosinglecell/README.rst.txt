:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiosinglecell'
.. highlight: bash

r-bcbiosinglecell
=================

.. conda:recipe:: r-bcbiosinglecell
   :replaces_section_title:
   :noindex:

   R package for bcbio single\-cell RNA\-seq analysis.

   :homepage: https://bioinformatics.sph.harvard.edu/bcbioSingleCell/
   :developer docs: https://github.com/hbc/bcbioSingleCell
   :license: MIT
   :recipe: /`r-bcbiosinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell/meta.yaml>`_

   


.. conda:package:: r-bcbiosinglecell

   |downloads_r-bcbiosinglecell| |docker_r-bcbiosinglecell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.16-1</code>,  <code>0.4.16-0</code>,  <code>0.4.13-0</code>,  <code>0.4.12-1</code>,  <code>0.4.12-0</code>,  <code>0.4.11-0</code>,  <code>0.4.10-1</code>,  <code>0.4.10-0</code>,  <code>0.4.9-0</code>,  </span></summary>
      

      ``0.4.16-1``,  ``0.4.16-0``,  ``0.4.13-0``,  ``0.4.12-1``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-1``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.24``
   :depends r-acidgenerics: ``>=0.5.17``
   :depends r-acidplots: ``>=0.3.5``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-basejump: ``>=0.14.17``
   :depends r-bcbiobase: ``>=0.6.21``
   :depends r-ggplot2: ``>=3.3``
   :depends r-ggridges: ``>=0.5``
   :depends r-goalie: ``>=0.5.1``
   :depends r-rmarkdown: ``>=2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiosinglecell

   and update with::

      conda update r-bcbiosinglecell

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiosinglecell:<tag>

   (see `r-bcbiosinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiosinglecell| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiosinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiosinglecell
   :alt:   (downloads)
.. |docker_r-bcbiosinglecell| image:: https://quay.io/repository/biocontainers/r-bcbiosinglecell/status
   :target: https://quay.io/repository/biocontainers/r-bcbiosinglecell
.. _`r-bcbiosinglecell/tags`: https://quay.io/repository/biocontainers/r-bcbiosinglecell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html
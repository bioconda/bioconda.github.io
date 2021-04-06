:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidsinglecell'
.. highlight: bash

r-acidsinglecell
================

.. conda:recipe:: r-acidsinglecell
   :replaces_section_title:
   :noindex:

   Toolkit for single\-cell RNA\-seq analysis that extends the functionality of SingleCellExperiment.

   :homepage: https://r.acidgenomics.com/packages/acidsinglecell/
   :developer docs: https://github.com/acidgenomics/r-acidsinglecell
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidsinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidsinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidsinglecell/meta.yaml>`_

   


.. conda:package:: r-acidsinglecell

   |downloads_r-acidsinglecell| |docker_r-acidsinglecell|

   :versions:
      
      

      ``0.1.7-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.12``
   :depends r-acidbase: ``>=0.3.13``
   :depends r-acidcli: ``>=0.1.0``
   :depends r-acidexperiment: ``>=0.1.9``
   :depends r-acidgenerics: ``>=0.5.17``
   :depends r-acidplyr: ``>=0.1.15``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-goalie: ``>=0.5.0``
   :depends r-pipette: ``>=0.5.12``
   :depends r-scales: ``>=1.1``
   :depends r-stringr: ``>=1.4``
   :depends r-syntactic: ``>=0.4.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidsinglecell

   and update with::

      conda update r-acidsinglecell

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidsinglecell:<tag>

   (see `r-acidsinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidsinglecell| image:: https://img.shields.io/conda/dn/bioconda/r-acidsinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidsinglecell
   :alt:   (downloads)
.. |docker_r-acidsinglecell| image:: https://quay.io/repository/biocontainers/r-acidsinglecell/status
   :target: https://quay.io/repository/biocontainers/r-acidsinglecell
.. _`r-acidsinglecell/tags`: https://quay.io/repository/biocontainers/r-acidsinglecell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidsinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidsinglecell/README.html
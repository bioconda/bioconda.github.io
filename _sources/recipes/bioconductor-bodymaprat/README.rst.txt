:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bodymaprat'
.. highlight: bash

bioconductor-bodymaprat
=======================

.. conda:recipe:: bioconductor-bodymaprat
   :replaces_section_title:

   This package contains a SummarizedExperiment from the Yu et al. \(2013\) paper that performed the rat BodyMap across 11 organs and 4 developmental stages. Raw FASTQ files were downloaded and mapped using STAR. Data is available on ExperimentHub as a data package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/bodymapRat.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-bodymaprat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bodymaprat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bodymaprat/meta.yaml>`_

   


.. conda:package:: bioconductor-bodymaprat

   |downloads_bioconductor-bodymaprat| |docker_bioconductor-bodymaprat|

   :versions: 1.0.0-1
   
   :depends bioconductor-experimenthub: >=1.10.0,<1.11.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bodymaprat

   and update with::

      conda update bioconductor-bodymaprat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bodymaprat:<tag>

   (see `bioconductor-bodymaprat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bodymaprat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bodymaprat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bodymaprat
   :alt:   (downloads)
.. |docker_bioconductor-bodymaprat| image:: https://quay.io/repository/biocontainers/bioconductor-bodymaprat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bodymaprat
.. _`bioconductor-bodymaprat/tags`: https://quay.io/repository/biocontainers/bioconductor-bodymaprat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bodymaprat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bodymaprat/README.html
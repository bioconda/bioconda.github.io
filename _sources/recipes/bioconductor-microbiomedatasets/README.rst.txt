:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedatasets'
.. highlight: bash

bioconductor-microbiomedatasets
===============================

.. conda:recipe:: bioconductor-microbiomedatasets
   :replaces_section_title:
   :noindex:

   Experiment Hub based microbiome datasets

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/microbiomeDataSets.html
   :license: CC0
   :recipe: /`bioconductor-microbiomedatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets/meta.yaml>`_

   microbiomeDataSets is a collection of microbiome datasets loaded from Bioconductor\'S ExperimentHub infrastructure. The datasets serve as reference for workflows and vignettes published adjacent to the microbiome analysis tools on Bioconductor. Additional datasets can be added overtime and additions from authors are welcome.


.. conda:package:: bioconductor-microbiomedatasets

   |downloads_bioconductor-microbiomedatasets| |docker_bioconductor-microbiomedatasets|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.0.0,<2.1.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiomedatasets

   and update with::

      conda update bioconductor-microbiomedatasets

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomedatasets:<tag>

   (see `bioconductor-microbiomedatasets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomedatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedatasets
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedatasets| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets
.. _`bioconductor-microbiomedatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-caen'
.. highlight: bash

bioconductor-caen
=================

.. conda:recipe:: bioconductor-caen
   :replaces_section_title:
   :noindex:

   Category encoding method for selecting feature genes for the classification of single\-cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CAEN.html
   :license: GPL-2
   :recipe: /`bioconductor-caen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caen/meta.yaml>`_

   With the development of high\-throughput techniques\, more and more gene expression analysis tend to replace hybridization\-based microarrays with the revolutionary technology.The novel method encodes the category again by employing the rank of samples for each gene in each class. We then consider the correlation coefficient of gene and class with rank of sample and new rank of category. The highest correlation coefficient genes are considered as the feature genes which are most effective to classify the samples.


.. conda:package:: bioconductor-caen

   |downloads_bioconductor-caen| |docker_bioconductor-caen|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-poiclaclu: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-caen

   and update with::

      mamba update bioconductor-caen

  To create a new environment, run::

      mamba create --name myenvname bioconductor-caen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-caen:<tag>

   (see `bioconductor-caen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-caen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-caen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-caen
   :alt:   (downloads)
.. |docker_bioconductor-caen| image:: https://quay.io/repository/biocontainers/bioconductor-caen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-caen
.. _`bioconductor-caen/tags`: https://quay.io/repository/biocontainers/bioconductor-caen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-caen";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-caen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-caen/README.html
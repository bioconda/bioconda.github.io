:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survclust'
.. highlight: bash

bioconductor-survclust
======================

.. conda:recipe:: bioconductor-survclust
   :replaces_section_title:
   :noindex:

   Identification Of Clinically Relevant Genomic Subtypes Using Outcome Weighted Learning

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/survClust.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-survclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survclust/meta.yaml>`_

   survClust is an outcome weighted integrative clustering algorithm used to classify multi\-omic samples on their available time to event information. The resulting clusters are cross\-validated to avoid over overfitting and output classification of samples that are molecularly distinct and clinically meaningful. It takes in binary \(mutation\) as well as continuous data \(other omic types\).


.. conda:package:: bioconductor-survclust

   |downloads_bioconductor-survclust| |docker_bioconductor-survclust|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-pdist: 
   :depends r-rcpp: 
   :depends r-survival: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-survclust

   and update with::

      mamba update bioconductor-survclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-survclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-survclust:<tag>

   (see `bioconductor-survclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-survclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survclust
   :alt:   (downloads)
.. |docker_bioconductor-survclust| image:: https://quay.io/repository/biocontainers/bioconductor-survclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survclust
.. _`bioconductor-survclust/tags`: https://quay.io/repository/biocontainers/bioconductor-survclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-survclust";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survclust/README.html
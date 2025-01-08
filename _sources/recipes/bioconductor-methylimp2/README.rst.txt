:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylimp2'
.. highlight: bash

bioconductor-methylimp2
=======================

.. conda:recipe:: bioconductor-methylimp2
   :replaces_section_title:
   :noindex:

   Missing value estimation of DNA methylation data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/methyLImp2.html
   :license: GPL-3
   :recipe: /`bioconductor-methylimp2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylimp2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylimp2/meta.yaml>`_

   This package allows to estimate missing values in DNA methylation data. methyLImp method is based on linear regression since methylation levels show a high degree of inter\-sample correlation. Implementation is parallelised over chromosomes since probes on different chromosomes are usually independent. Mini\-batch approach to reduce the runtime in case of large number of samples is available.


.. conda:package:: bioconductor-methylimp2

   |downloads_bioconductor-methylimp2| |docker_bioconductor-methylimp2|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-champdata: ``>=2.38.0,<2.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-corpcor: 
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

      mamba install bioconductor-methylimp2

   and update with::

      mamba update bioconductor-methylimp2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylimp2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylimp2:<tag>

   (see `bioconductor-methylimp2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylimp2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylimp2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylimp2
   :alt:   (downloads)
.. |docker_bioconductor-methylimp2| image:: https://quay.io/repository/biocontainers/bioconductor-methylimp2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylimp2
.. _`bioconductor-methylimp2/tags`: https://quay.io/repository/biocontainers/bioconductor-methylimp2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylimp2";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylimp2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylimp2/README.html
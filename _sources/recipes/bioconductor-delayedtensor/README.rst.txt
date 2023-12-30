:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedtensor'
.. highlight: bash

bioconductor-delayedtensor
==========================

.. conda:recipe:: bioconductor-delayedtensor
   :replaces_section_title:
   :noindex:

   R package for sparse and out\-of\-core arithmetic and decomposition of Tensor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DelayedTensor.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-delayedtensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedtensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedtensor/meta.yaml>`_

   DelayedTensor operates Tensor arithmetic directly on DelayedArray object. DelayedTensor provides some generic function related to Tensor arithmetic\/decompotision and dispatches it on the DelayedArray class. DelayedTensor also suppors Tensor contraction by einsum function\, which is inspired by numpy einsum.


.. conda:package:: bioconductor-delayedtensor

   |downloads_bioconductor-delayedtensor| |docker_bioconductor-delayedtensor|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedrandomarray: ``>=1.10.0,<1.11.0``
   :depends bioconductor-hdf5array: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-einsum: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rtensor: 
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

      mamba install bioconductor-delayedtensor

   and update with::

      mamba update bioconductor-delayedtensor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-delayedtensor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedtensor:<tag>

   (see `bioconductor-delayedtensor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedtensor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedtensor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedtensor
   :alt:   (downloads)
.. |docker_bioconductor-delayedtensor| image:: https://quay.io/repository/biocontainers/bioconductor-delayedtensor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedtensor
.. _`bioconductor-delayedtensor/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedtensor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedtensor";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedtensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedtensor/README.html
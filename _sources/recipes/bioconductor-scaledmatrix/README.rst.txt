:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scaledmatrix'
.. highlight: bash

bioconductor-scaledmatrix
=========================

.. conda:recipe:: bioconductor-scaledmatrix
   :replaces_section_title:
   :noindex:

   Creating a DelayedMatrix of Scaled and Centered Values

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ScaledMatrix.html
   :license: GPL-3
   :recipe: /`bioconductor-scaledmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scaledmatrix/meta.yaml>`_

   Provides delayed computation of a matrix of scaled and centered values. The result is equivalent to using the scale\(\) function but avoids explicit realization of a dense matrix during block processing. This permits greater efficiency in common operations\, most notably matrix multiplication.


.. conda:package:: bioconductor-scaledmatrix

   |downloads_bioconductor-scaledmatrix| |docker_bioconductor-scaledmatrix|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-scaledmatrix

   and update with::

      mamba update bioconductor-scaledmatrix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scaledmatrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scaledmatrix:<tag>

   (see `bioconductor-scaledmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scaledmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scaledmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scaledmatrix
   :alt:   (downloads)
.. |docker_bioconductor-scaledmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix
.. _`bioconductor-scaledmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-scaledmatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scaledmatrix";
        var versions = ["1.14.0","1.10.0","1.8.1","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scaledmatrix/README.html
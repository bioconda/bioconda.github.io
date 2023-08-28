:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randrotation'
.. highlight: bash

bioconductor-randrotation
=========================

.. conda:recipe:: bioconductor-randrotation
   :replaces_section_title:
   :noindex:

   Random Rotation Methods for High Dimensional Data with Batch Structure

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/randRotation.html
   :license: GPL-3
   :recipe: /`bioconductor-randrotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randrotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randrotation/meta.yaml>`_

   A collection of methods for performing random rotations on high\-dimensional\, normally distributed data \(e.g. microarray or RNA\-seq data\) with batch structure. The random rotation approach allows exact testing of dependent test statistics with linear models following arbitrary batch effect correction methods.


.. conda:package:: bioconductor-randrotation

   |downloads_bioconductor-randrotation| |docker_bioconductor-randrotation|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rdpack: ``>=0.7``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-randrotation

   and update with::

      mamba update bioconductor-randrotation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-randrotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-randrotation:<tag>

   (see `bioconductor-randrotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-randrotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randrotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randrotation
   :alt:   (downloads)
.. |docker_bioconductor-randrotation| image:: https://quay.io/repository/biocontainers/bioconductor-randrotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randrotation
.. _`bioconductor-randrotation/tags`: https://quay.io/repository/biocontainers/bioconductor-randrotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-randrotation";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randrotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randrotation/README.html
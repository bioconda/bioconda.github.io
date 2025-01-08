:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brew3r.r'
.. highlight: bash

bioconductor-brew3r.r
=====================

.. conda:recipe:: bioconductor-brew3r.r
   :replaces_section_title:
   :noindex:

   R package associated to BREW3R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BREW3R.r.html
   :license: GPL-3
   :recipe: /`bioconductor-brew3r.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brew3r.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brew3r.r/meta.yaml>`_

   This R package provide functions that are used in the BREW3R workflow. This mainly contains a function that extend a gtf as GRanges using information from another gtf \(also as GRanges\). The process allows to extend gene annotation without increasing the overlap between gene ids.


.. conda:package:: bioconductor-brew3r.r

   |downloads_bioconductor-brew3r.r| |docker_bioconductor-brew3r.r|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rlang: 
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

      mamba install bioconductor-brew3r.r

   and update with::

      mamba update bioconductor-brew3r.r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-brew3r.r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brew3r.r:<tag>

   (see `bioconductor-brew3r.r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brew3r.r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brew3r.r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brew3r.r
   :alt:   (downloads)
.. |docker_bioconductor-brew3r.r| image:: https://quay.io/repository/biocontainers/bioconductor-brew3r.r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brew3r.r
.. _`bioconductor-brew3r.r/tags`: https://quay.io/repository/biocontainers/bioconductor-brew3r.r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brew3r.r";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brew3r.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brew3r.r/README.html
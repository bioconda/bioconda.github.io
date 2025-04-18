:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsr'
.. highlight: bash

bioconductor-macsr
==================

.. conda:recipe:: bioconductor-macsr
   :replaces_section_title:
   :noindex:

   MACS\: Model\-based Analysis for ChIP\-Seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MACSr.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-macsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr/meta.yaml>`_

   The Model\-based Analysis of ChIP\-Seq \(MACS\) is a widely used toolkit for identifying transcript factor binding sites. This package is an R wrapper of the lastest MACS3.


.. conda:package:: bioconductor-macsr

   |downloads_bioconductor-macsr| |docker_bioconductor-macsr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-reticulate: 
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

      mamba install bioconductor-macsr

   and update with::

      mamba update bioconductor-macsr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macsr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macsr:<tag>

   (see `bioconductor-macsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsr
   :alt:   (downloads)
.. |docker_bioconductor-macsr| image:: https://quay.io/repository/biocontainers/bioconductor-macsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsr
.. _`bioconductor-macsr/tags`: https://quay.io/repository/biocontainers/bioconductor-macsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macsr";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peco'
.. highlight: bash

bioconductor-peco
=================

.. conda:recipe:: bioconductor-peco
   :replaces_section_title:
   :noindex:

   A Supervised Approach for \*\*P\*\*r\*\*e\*\*dicting \*\*c\*\*ell Cycle Pr\*\*o\*\*gression using scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/peco.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-peco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco/meta.yaml>`_

   Our approach provides a way to assign continuous cell cycle phase using scRNA\-seq data\, and consequently\, allows to identify cyclic trend of gene expression levels along the cell cycle. This package provides method and training data\, which includes scRNA\-seq data collected from 6 individual cell lines of induced pluripotent stem cells \(iPSCs\)\, and also continuous cell cycle phase derived from FUCCI fluorescence imaging data.


.. conda:package:: bioconductor-peco

   |downloads_bioconductor-peco| |docker_bioconductor-peco|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circular: 
   :depends r-conicfit: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-genlasso: ``>=1.4``
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

      mamba install bioconductor-peco

   and update with::

      mamba update bioconductor-peco

  To create a new environment, run::

      mamba create --name myenvname bioconductor-peco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peco:<tag>

   (see `bioconductor-peco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peco
   :alt:   (downloads)
.. |docker_bioconductor-peco| image:: https://quay.io/repository/biocontainers/bioconductor-peco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peco
.. _`bioconductor-peco/tags`: https://quay.io/repository/biocontainers/bioconductor-peco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peco";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peco/README.html
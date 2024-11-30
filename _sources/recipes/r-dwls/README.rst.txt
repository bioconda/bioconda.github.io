:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dwls'
.. highlight: bash

r-dwls
======

.. conda:recipe:: r-dwls
   :replaces_section_title:
   :noindex:

   Deconvolution of bulk mRNA data using single\-cell RNAseq to provide cell type specific signatures

   :homepage: https://github.com/omnideconv/DWLS
   :license: GPL / GPL-2
   :recipe: /`r-dwls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dwls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dwls/meta.yaml>`_

   


.. conda:package:: r-dwls

   |downloads_r-dwls| |docker_r-dwls|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bioconductor-mast: ``>=1.4.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: ``>=1.7.0``
   :depends r-magrittr: 
   :depends r-quadprog: ``>=1.5``
   :depends r-reshape: ``>=0.8.8``
   :depends r-rocr: ``>=1.0``
   :depends r-seurat: ``>=2.3.4``
   :depends r-varhandle: ``>=2.0.3``
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

      mamba install r-dwls

   and update with::

      mamba update r-dwls

  To create a new environment, run::

      mamba create --name myenvname r-dwls

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dwls:<tag>

   (see `r-dwls/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dwls| image:: https://img.shields.io/conda/dn/bioconda/r-dwls.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dwls
   :alt:   (downloads)
.. |docker_r-dwls| image:: https://quay.io/repository/biocontainers/r-dwls/status
   :target: https://quay.io/repository/biocontainers/r-dwls
.. _`r-dwls/tags`: https://quay.io/repository/biocontainers/r-dwls?tab=tags


.. raw:: html

    <script>
        var package = "r-dwls";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dwls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dwls/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytotrace2-python'
.. highlight: bash

cytotrace2-python
=================

.. conda:recipe:: cytotrace2-python
   :replaces_section_title:
   :noindex:

   CytoTRACE 2 is an interpretable AI method for predicting cellular potency and absolute developmental potential from scRNA\-seq data.

   :homepage: https://github.com/digitalcytometry/cytotrace2
   :documentation: https://github.com/digitalcytometry/cytotrace2/blob/v0.0.1/cytotrace2_python/README.md
   
   :license: Custom
   :recipe: /`cytotrace2-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytotrace2-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytotrace2-python/meta.yaml>`_

   


.. conda:package:: cytotrace2-python

   |downloads_cytotrace2-python| |docker_cytotrace2-python|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends anndata: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends pytorch: 
   :depends r-argparse: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-rann: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install cytotrace2-python

   and update with::

      mamba update cytotrace2-python

  To create a new environment, run::

      mamba create --name myenvname cytotrace2-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cytotrace2-python:<tag>

   (see `cytotrace2-python/tags`_ for valid values for ``<tag>``)


.. |downloads_cytotrace2-python| image:: https://img.shields.io/conda/dn/bioconda/cytotrace2-python.svg?style=flat
   :target: https://anaconda.org/bioconda/cytotrace2-python
   :alt:   (downloads)
.. |docker_cytotrace2-python| image:: https://quay.io/repository/biocontainers/cytotrace2-python/status
   :target: https://quay.io/repository/biocontainers/cytotrace2-python
.. _`cytotrace2-python/tags`: https://quay.io/repository/biocontainers/cytotrace2-python?tab=tags


.. raw:: html

    <script>
        var package = "cytotrace2-python";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytotrace2-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytotrace2-python/README.html
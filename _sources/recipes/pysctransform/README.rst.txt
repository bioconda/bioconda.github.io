:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysctransform'
.. highlight: bash

pysctransform
=============

.. conda:recipe:: pysctransform
   :replaces_section_title:
   :noindex:

   Python package to perform normalization and variance\-stabilization of single\-cell data.

   :homepage: https://github.com/saketkc/pySCTransform
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pysctransform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysctransform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysctransform/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1874-1`

   


.. conda:package:: pysctransform

   |downloads_pysctransform| |docker_pysctransform|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends adjusttext: ``>=0.7.3``
   :depends bioconductor-glmgampoi: 
   :depends kdepy: ``>=1.1.0``
   :depends matplotlib-base: ``>=3.4.2``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.3.0``
   :depends patsy: ``>=0.5.1``
   :depends python: ``>=3.7``
   :depends rpy2: 
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.7.0``
   :depends statsmodels: ``>=0.12.2``
   :depends tqdm: ``>=4.67.1``
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

      mamba install pysctransform

   and update with::

      mamba update pysctransform

  To create a new environment, run::

      mamba create --name myenvname pysctransform

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysctransform:<tag>

   (see `pysctransform/tags`_ for valid values for ``<tag>``)


.. |downloads_pysctransform| image:: https://img.shields.io/conda/dn/bioconda/pysctransform.svg?style=flat
   :target: https://anaconda.org/bioconda/pysctransform
   :alt:   (downloads)
.. |docker_pysctransform| image:: https://quay.io/repository/biocontainers/pysctransform/status
   :target: https://quay.io/repository/biocontainers/pysctransform
.. _`pysctransform/tags`: https://quay.io/repository/biocontainers/pysctransform?tab=tags


.. raw:: html

    <script>
        var package = "pysctransform";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysctransform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysctransform/README.html
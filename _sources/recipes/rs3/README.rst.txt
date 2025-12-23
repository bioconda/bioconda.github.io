:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rs3'
.. highlight: bash

rs3
===

.. conda:recipe:: rs3
   :replaces_section_title:
   :noindex:

   Predict the activity of CRISPR sgRNAs

   :homepage: https://github.com/gpp-rnd/rs3/tree/master/
   :license: Apache-2.0
   :recipe: /`rs3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rs3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rs3/meta.yaml>`_

   


.. conda:package:: rs3

   |downloads_rs3| |docker_rs3|

   :versions:
      
      

      ``0.0.18-0``

      

   
   :depends biopython: ``>=1.78``
   :depends joblib: ``>=1.0.1``
   :depends lightgbm: ``>=3.0.0,<=3.3.5``
   :depends numpy: ``<=1.26.4``
   :depends packaging: 
   :depends pandas: ``>=1.0.0``
   :depends pyarrow: ``>=4.0.1``
   :depends python: ``>=3.7,<3.9``
   :depends requests: ``>=2.25.1``
   :depends scikit-learn: ``>=0.24.2,<=1.0.2``
   :depends sglearn: ``>=1.2.5``
   :depends tqdm: ``>=4.61.2``
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

      mamba install rs3

   and update with::

      mamba update rs3

  To create a new environment, run::

      mamba create --name myenvname rs3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rs3:<tag>

   (see `rs3/tags`_ for valid values for ``<tag>``)


.. |downloads_rs3| image:: https://img.shields.io/conda/dn/bioconda/rs3.svg?style=flat
   :target: https://anaconda.org/bioconda/rs3
   :alt:   (downloads)
.. |docker_rs3| image:: https://quay.io/repository/biocontainers/rs3/status
   :target: https://quay.io/repository/biocontainers/rs3
.. _`rs3/tags`: https://quay.io/repository/biocontainers/rs3?tab=tags


.. raw:: html

    <script>
        var package = "rs3";
        var versions = ["0.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rs3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rs3/README.html
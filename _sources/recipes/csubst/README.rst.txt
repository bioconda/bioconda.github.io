:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csubst'
.. highlight: bash

csubst
======

.. conda:recipe:: csubst
   :replaces_section_title:
   :noindex:

   Tool for analyzing combinatorial codon substitutions in DNA sequences.

   :homepage: https://github.com/kfuku52/csubst
   :license: BSD-3-Clause
   :recipe: /`csubst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csubst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csubst/meta.yaml>`_

   


.. conda:package:: csubst

   |downloads_csubst| |docker_csubst|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends ete3: 
   :depends joblib: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends threadpoolctl: 
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

      mamba install csubst

   and update with::

      mamba update csubst

  To create a new environment, run::

      mamba create --name myenvname csubst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/csubst:<tag>

   (see `csubst/tags`_ for valid values for ``<tag>``)


.. |downloads_csubst| image:: https://img.shields.io/conda/dn/bioconda/csubst.svg?style=flat
   :target: https://anaconda.org/bioconda/csubst
   :alt:   (downloads)
.. |docker_csubst| image:: https://quay.io/repository/biocontainers/csubst/status
   :target: https://quay.io/repository/biocontainers/csubst
.. _`csubst/tags`: https://quay.io/repository/biocontainers/csubst?tab=tags


.. raw:: html

    <script>
        var package = "csubst";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csubst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csubst/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smaca'
.. highlight: bash

smaca
=====

.. conda:recipe:: smaca
   :replaces_section_title:
   :noindex:

   smaca is a python tool to detect putative SMA carriers and estimate the absolute SMN1 copy\-number in a population.

   :homepage: https://github.com/babelomics/SMAca
   :license: GPL-3.0
   :recipe: /`smaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca/meta.yaml>`_
   :links: doi: :doi:`https://zenodo.org/badge/latestdoi/250259934`

   


.. conda:package:: smaca

   |downloads_smaca| |docker_smaca|

   :versions:
      
      

      ``1.2.3-5``,  ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends click: 
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pysam: ``>=0.22.1,<0.23.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install smaca

   and update with::

      mamba update smaca

  To create a new environment, run::

      mamba create --name myenvname smaca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smaca:<tag>

   (see `smaca/tags`_ for valid values for ``<tag>``)


.. |downloads_smaca| image:: https://img.shields.io/conda/dn/bioconda/smaca.svg?style=flat
   :target: https://anaconda.org/bioconda/smaca
   :alt:   (downloads)
.. |docker_smaca| image:: https://quay.io/repository/biocontainers/smaca/status
   :target: https://quay.io/repository/biocontainers/smaca
.. _`smaca/tags`: https://quay.io/repository/biocontainers/smaca?tab=tags


.. raw:: html

    <script>
        var package = "smaca";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smaca/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yacht'
.. highlight: bash

yacht
=====

.. conda:recipe:: yacht
   :replaces_section_title:
   :noindex:

   YACHT is a mathematically rigorous hypothesis test for the presence or absence of organisms in a metagenomic sample\, based on average nucleotide identity \(ANI\).

   :homepage: https://github.com/KoslickiLab/YACHT
   :documentation: https://github.com/KoslickiLab/YACHT/wiki
   
   :license: MIT / MIT
   :recipe: /`yacht <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacht>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacht/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae047`

   


.. conda:package:: yacht

   |downloads_yacht| |docker_yacht|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0-0``

      

   
   :depends biom-format: 
   :depends codecov: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends loguru: 
   :depends maturin: ``>=1,<2``
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=1.22.4``
   :depends openpyxl: 
   :depends pandas: 
   :depends pytaxonkit: ``>=0.9.1,<0.10.0a0``
   :depends pytest: 
   :depends pytest-cov: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends requests: 
   :depends ruff: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends sourmash: ``>=4.8.11,<5.0a0``
   :depends sourmash: ``>=4.8.3,<5``
   :depends sourmash_plugin_branchwater: 
   :depends tqdm: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install yacht

   and update with::

      mamba update yacht

  To create a new environment, run::

      mamba create --name myenvname yacht

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yacht:<tag>

   (see `yacht/tags`_ for valid values for ``<tag>``)


.. |downloads_yacht| image:: https://img.shields.io/conda/dn/bioconda/yacht.svg?style=flat
   :target: https://anaconda.org/bioconda/yacht
   :alt:   (downloads)
.. |docker_yacht| image:: https://quay.io/repository/biocontainers/yacht/status
   :target: https://quay.io/repository/biocontainers/yacht
.. _`yacht/tags`: https://quay.io/repository/biocontainers/yacht?tab=tags


.. raw:: html

    <script>
        var package = "yacht";
        var versions = ["1.3.0","1.3.0","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yacht/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yacht/README.html
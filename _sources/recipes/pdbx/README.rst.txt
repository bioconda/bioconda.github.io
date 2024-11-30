:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdbx'
.. highlight: bash

pdbx
====

.. conda:recipe:: pdbx
   :replaces_section_title:
   :noindex:

   pdbx is a parser module in python for structures of the protein data bank in the mmcif format

   :homepage: https://github.com/soedinglab/pdbx
   :documentation: https://github.com/soedinglab/pdbx#readme
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pdbx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbx/meta.yaml>`_

   Proper recognition to the \[Protein Data Bank\]\(http\:\/\/mmcif.wwpdb.org\/docs\/sw\-examples\/python\/html\/index.html\)
   where this library for protein structures in the mmCIF format initially came from.
   We modified the original library to support python3.
   This fork is used by scripts in the HHsuite \[on GitHub\]\(https\:\/\/github.com\/soedinglab\/hh\-suite\).



.. conda:package:: pdbx

   |downloads_pdbx| |docker_pdbx|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pdbx

   and update with::

      mamba update pdbx

  To create a new environment, run::

      mamba create --name myenvname pdbx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pdbx:<tag>

   (see `pdbx/tags`_ for valid values for ``<tag>``)


.. |downloads_pdbx| image:: https://img.shields.io/conda/dn/bioconda/pdbx.svg?style=flat
   :target: https://anaconda.org/bioconda/pdbx
   :alt:   (downloads)
.. |docker_pdbx| image:: https://quay.io/repository/biocontainers/pdbx/status
   :target: https://quay.io/repository/biocontainers/pdbx
.. _`pdbx/tags`: https://quay.io/repository/biocontainers/pdbx?tab=tags


.. raw:: html

    <script>
        var package = "pdbx";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdbx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdbx/README.html
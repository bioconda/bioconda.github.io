:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cif-tools'
.. highlight: bash

cif-tools
=========

.. conda:recipe:: cif-tools
   :replaces_section_title:
   :noindex:

   A suite of programs to manipulate and examine mmCIF files

   :homepage: https://github.com/PDB-REDO/cif-tools
   :documentation: https://github.com/PDB-REDO/cif-tools/tree/v1.0.12/doc
   
   :license: BSD / BSD-2-Clause "Simplified"
   :recipe: /`cif-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cif-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cif-tools/meta.yaml>`_

   The cif\-tools suite of programs are tools you can use to examine and manipulate mmCIF and PDB files.



.. conda:package:: cif-tools

   |downloads_cif-tools| |docker_cif-tools|

   :versions:
      
      

      ``1.0.12-0``

      

   
   :depends libcifpp: ``>=7.0.9,<8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install cif-tools

   and update with::

      mamba update cif-tools

  To create a new environment, run::

      mamba create --name myenvname cif-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cif-tools:<tag>

   (see `cif-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_cif-tools| image:: https://img.shields.io/conda/dn/bioconda/cif-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cif-tools
   :alt:   (downloads)
.. |docker_cif-tools| image:: https://quay.io/repository/biocontainers/cif-tools/status
   :target: https://quay.io/repository/biocontainers/cif-tools
.. _`cif-tools/tags`: https://quay.io/repository/biocontainers/cif-tools?tab=tags


.. raw:: html

    <script>
        var package = "cif-tools";
        var versions = ["1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cif-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cif-tools/README.html
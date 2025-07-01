:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'faststructure'
.. highlight: bash

faststructure
=============

.. conda:recipe:: faststructure
   :replaces_section_title:
   :noindex:

   A variational framework for inferring population structure from SNP genotype data. Ported to python3 by \@StuntsPT based on the work of \@jashapiro.

   :homepage: https://github.com/rajanil/fastStructure
   :license: MIT / MIT
   :recipe: /`faststructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure/meta.yaml>`_

   


.. conda:package:: faststructure

   |downloads_faststructure| |docker_faststructure|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends gsl: ``>=2.8,<2.9.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<3.10.0a0``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.23,<3``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends scipy: 
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

      mamba install faststructure

   and update with::

      mamba update faststructure

  To create a new environment, run::

      mamba create --name myenvname faststructure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/faststructure:<tag>

   (see `faststructure/tags`_ for valid values for ``<tag>``)


.. |downloads_faststructure| image:: https://img.shields.io/conda/dn/bioconda/faststructure.svg?style=flat
   :target: https://anaconda.org/bioconda/faststructure
   :alt:   (downloads)
.. |docker_faststructure| image:: https://quay.io/repository/biocontainers/faststructure/status
   :target: https://quay.io/repository/biocontainers/faststructure
.. _`faststructure/tags`: https://quay.io/repository/biocontainers/faststructure?tab=tags


.. raw:: html

    <script>
        var package = "faststructure";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faststructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faststructure/README.html
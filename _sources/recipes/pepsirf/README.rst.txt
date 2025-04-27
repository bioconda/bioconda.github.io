:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepsirf'
.. highlight: bash

pepsirf
=======

.. conda:recipe:: pepsirf
   :replaces_section_title:
   :noindex:

   Peptide\-based Serological Immune Response Framework.

   :homepage: https://github.com/LadnerLab/PepSIRF
   :documentation: https://ladnerlab.github.io/PepSIRF
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pepsirf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepsirf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepsirf/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2007.05050`

   


.. conda:package:: pepsirf

   |downloads_pepsirf| |docker_pepsirf|

   :versions:
      
      

      ``1.7.1-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
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

      mamba install pepsirf

   and update with::

      mamba update pepsirf

  To create a new environment, run::

      mamba create --name myenvname pepsirf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pepsirf:<tag>

   (see `pepsirf/tags`_ for valid values for ``<tag>``)


.. |downloads_pepsirf| image:: https://img.shields.io/conda/dn/bioconda/pepsirf.svg?style=flat
   :target: https://anaconda.org/bioconda/pepsirf
   :alt:   (downloads)
.. |docker_pepsirf| image:: https://quay.io/repository/biocontainers/pepsirf/status
   :target: https://quay.io/repository/biocontainers/pepsirf
.. _`pepsirf/tags`: https://quay.io/repository/biocontainers/pepsirf?tab=tags


.. raw:: html

    <script>
        var package = "pepsirf";
        var versions = ["1.7.1","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepsirf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepsirf/README.html
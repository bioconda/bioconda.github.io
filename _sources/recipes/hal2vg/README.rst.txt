:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hal2vg'
.. highlight: bash

hal2vg
======

.. conda:recipe:: hal2vg
   :replaces_section_title:
   :noindex:

   A tool for converting from hal to vg format\, as well as other tools generally useful for cactus.

   :homepage: https://github.com/ComparativeGenomicsToolkit/hal2vg
   :documentation: https://github.com/ComparativeGenomicsToolkit/hal2vg/blob/v1.1.8/README.md
   
   :license: MIT / MIT
   :recipe: /`hal2vg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hal2vg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hal2vg/meta.yaml>`_

   


.. conda:package:: hal2vg

   |downloads_hal2vg| |docker_hal2vg|

   :versions:
      
      

      ``1.1.8-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends jansson: ``>=2.14.1,<3.0a0``
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

      mamba install hal2vg

   and update with::

      mamba update hal2vg

  To create a new environment, run::

      mamba create --name myenvname hal2vg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hal2vg:<tag>

   (see `hal2vg/tags`_ for valid values for ``<tag>``)


.. |downloads_hal2vg| image:: https://img.shields.io/conda/dn/bioconda/hal2vg.svg?style=flat
   :target: https://anaconda.org/bioconda/hal2vg
   :alt:   (downloads)
.. |docker_hal2vg| image:: https://quay.io/repository/biocontainers/hal2vg/status
   :target: https://quay.io/repository/biocontainers/hal2vg
.. _`hal2vg/tags`: https://quay.io/repository/biocontainers/hal2vg?tab=tags


.. raw:: html

    <script>
        var package = "hal2vg";
        var versions = ["1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hal2vg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hal2vg/README.html
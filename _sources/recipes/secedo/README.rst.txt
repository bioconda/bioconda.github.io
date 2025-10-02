:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secedo'
.. highlight: bash

secedo
======

.. conda:recipe:: secedo
   :replaces_section_title:
   :noindex:

   SNV\-based clustering for single\-cell sequencing data.

   :homepage: https://github.com/ratschlab/secedo
   :license: MIT / MIT
   :recipe: /`secedo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secedo/meta.yaml>`_
   :links: biotools: :biotools:`secedo`

   


.. conda:package:: secedo

   |downloads_secedo| |docker_secedo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-4</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.7-4``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends arpack: ``>=3.9.1,<3.10.0a0 nompi_*``
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends jsoncpp: ``>=1.9.6,<1.9.7.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openblas: 
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

      mamba install secedo

   and update with::

      mamba update secedo

  To create a new environment, run::

      mamba create --name myenvname secedo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/secedo:<tag>

   (see `secedo/tags`_ for valid values for ``<tag>``)


.. |downloads_secedo| image:: https://img.shields.io/conda/dn/bioconda/secedo.svg?style=flat
   :target: https://anaconda.org/bioconda/secedo
   :alt:   (downloads)
.. |docker_secedo| image:: https://quay.io/repository/biocontainers/secedo/status
   :target: https://quay.io/repository/biocontainers/secedo
.. _`secedo/tags`: https://quay.io/repository/biocontainers/secedo?tab=tags


.. raw:: html

    <script>
        var package = "secedo";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secedo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secedo/README.html
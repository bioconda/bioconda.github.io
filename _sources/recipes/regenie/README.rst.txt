:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regenie'
.. highlight: bash

regenie
=======

.. conda:recipe:: regenie
   :replaces_section_title:
   :noindex:

   Regenie is a C\+\+ program for whole genome regression modelling of large genome\-wide association studies \(GWAS\).

   :homepage: https://rgcgithub.github.io/regenie/
   :documentation: https://rgcgithub.github.io/regenie/options/
   
   :developer docs: https://github.com/rgcgithub/regenie
   :license: MIT / MIT
   :recipe: /`regenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regenie/meta.yaml>`_

   


.. conda:package:: regenie

   |downloads_regenie| |docker_regenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.1-0</code>,  <code>3.4-0</code>,  <code>3.3-0</code>,  <code>3.2.9-0</code>,  <code>3.2.7-0</code>,  <code>3.2.6-1</code>,  <code>3.2.6-0</code>,  <code>3.2.5.2-0</code>,  <code>3.2.5-0</code>,  </span></summary>
      

      ``3.4.1-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2.9-0``,  ``3.2.7-0``,  ``3.2.6-1``,  ``3.2.6-0``,  ``3.2.5.2-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``3.2.2.4-0``,  ``3.2.2.3-0``,  ``3.2.2.1-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``1.0.6.9-0``,  ``1.0.6.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.3.0``
   :depends liblapack: ``>=3.9.0,<3.10.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mkl: ``>=2020.4``
   :depends sqlite: 
   :depends zlib: 
   :depends zstd: ``>=1.5.5,<1.6.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install regenie

   and update with::

      mamba update regenie

  To create a new environment, run::

      mamba create --name myenvname regenie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/regenie:<tag>

   (see `regenie/tags`_ for valid values for ``<tag>``)


.. |downloads_regenie| image:: https://img.shields.io/conda/dn/bioconda/regenie.svg?style=flat
   :target: https://anaconda.org/bioconda/regenie
   :alt:   (downloads)
.. |docker_regenie| image:: https://quay.io/repository/biocontainers/regenie/status
   :target: https://quay.io/repository/biocontainers/regenie
.. _`regenie/tags`: https://quay.io/repository/biocontainers/regenie?tab=tags


.. raw:: html

    <script>
        var package = "regenie";
        var versions = ["3.4.1","3.4","3.3","3.2.9","3.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regenie/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cas-offinder'
.. highlight: bash

cas-offinder
============

.. conda:recipe:: cas-offinder
   :replaces_section_title:
   :noindex:

   Cas\-OFFinder is OpenCL based\, ultrafast and versatile program that searches for potential off\-target sites of CRISPR\/Cas\-derived RNA\-guided endonucleases \(RGEN\).

   :homepage: https://github.com/snugel/cas-offinder
   :documentation: https://github.com/snugel/cas-offinder/blob/2.4.1/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cas-offinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cas-offinder/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu048`, biotools: :biotools:`cas-offinder`

   


.. conda:package:: cas-offinder

   |downloads_cas-offinder| |docker_cas-offinder|

   :versions:
      
      

      ``2.4.1-0``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libopencl-devel: 
   :depends libstdcxx: ``>=13``
   :depends ocl-icd: ``>=2.3.3,<3.0a0``
   :depends opencl-headers: 
   :depends pocl: 
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

      mamba install cas-offinder

   and update with::

      mamba update cas-offinder

  To create a new environment, run::

      mamba create --name myenvname cas-offinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cas-offinder:<tag>

   (see `cas-offinder/tags`_ for valid values for ``<tag>``)


.. |downloads_cas-offinder| image:: https://img.shields.io/conda/dn/bioconda/cas-offinder.svg?style=flat
   :target: https://anaconda.org/bioconda/cas-offinder
   :alt:   (downloads)
.. |docker_cas-offinder| image:: https://quay.io/repository/biocontainers/cas-offinder/status
   :target: https://quay.io/repository/biocontainers/cas-offinder
.. _`cas-offinder/tags`: https://quay.io/repository/biocontainers/cas-offinder?tab=tags


.. raw:: html

    <script>
        var package = "cas-offinder";
        var versions = ["2.4.1","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cas-offinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cas-offinder/README.html
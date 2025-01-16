:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrtrix3'
.. highlight: bash

mrtrix3
=======

.. conda:recipe:: mrtrix3
   :replaces_section_title:
   :noindex:

   A set of tools to perform various advanced diffusion MRI analyses\, including constrained spherical deconvolution \(CSD\)\, probabilistic tractography\, track\-density imaging\, and apparent fibre density

   :homepage: https://www.mrtrix.org
   :documentation: https://www.mrtrix.org/documentation/
   
   :developer docs: https://github.com/MRtrix3/mrtrix3
   :license: MOZILLA / MPL-2.0
   :recipe: /`mrtrix3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrtrix3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrtrix3/meta.yaml>`_

   


.. conda:package:: mrtrix3

   |downloads_mrtrix3| |docker_mrtrix3|

   :versions:
      
      

      ``3.0.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.0``
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libtiff: ``>=4.0``
   :depends libtiff: ``>=4.7.0,<4.8.0a0``
   :depends libxcb: ``>=1.17.0,<2.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends qt: ``>=5.15``
   :depends zlib: 
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

      mamba install mrtrix3

   and update with::

      mamba update mrtrix3

  To create a new environment, run::

      mamba create --name myenvname mrtrix3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mrtrix3:<tag>

   (see `mrtrix3/tags`_ for valid values for ``<tag>``)


.. |downloads_mrtrix3| image:: https://img.shields.io/conda/dn/bioconda/mrtrix3.svg?style=flat
   :target: https://anaconda.org/bioconda/mrtrix3
   :alt:   (downloads)
.. |docker_mrtrix3| image:: https://quay.io/repository/biocontainers/mrtrix3/status
   :target: https://quay.io/repository/biocontainers/mrtrix3
.. _`mrtrix3/tags`: https://quay.io/repository/biocontainers/mrtrix3?tab=tags


.. raw:: html

    <script>
        var package = "mrtrix3";
        var versions = ["3.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrtrix3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrtrix3/README.html
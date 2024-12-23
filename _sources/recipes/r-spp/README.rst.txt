:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-spp'
.. highlight: bash

r-spp
=====

.. conda:recipe:: r-spp
   :replaces_section_title:
   :noindex:

   Analysis of ChIP\-seq and other functional sequencing data \[Kharchenko PV \(2008\) \<DOI\:10.1038\/nbt.1508\>\].

   :homepage: https://CRAN.R-project.org/package=spp
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-spp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-spp/meta.yaml>`_
   :links: biotools: :biotools:`spp`, doi: :doi:`10.1038/nbt.1508`

   


.. conda:package:: r-spp

   |downloads_r-spp| |docker_r-spp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-11</code>,  <code>1.16.0-10</code>,  <code>1.16.0-9</code>,  <code>1.16.0-8</code>,  <code>1.16.0-7</code>,  <code>1.16.0-6</code>,  <code>1.16.0-5</code>,  <code>1.16.0-4</code>,  <code>1.16.0-3</code>,  </span></summary>
      

      ``1.16.0-11``,  ``1.16.0-10``,  ``1.16.0-9``,  ``1.16.0-8``,  ``1.16.0-7``,  ``1.16.0-6``,  ``1.16.0-5``,  ``1.16.0-4``,  ``1.16.0-3``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.5-2``,  ``1.15.5-1``,  ``1.15.5-0``,  ``1.15.2-0``,  ``1.14post-0``,  ``1.14-0``,  ``1.13-0``,  ``1.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bh: ``>=1.66``
   :depends r-catools: 
   :depends r-rcpp: 
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

      mamba install r-spp

   and update with::

      mamba update r-spp

  To create a new environment, run::

      mamba create --name myenvname r-spp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-spp:<tag>

   (see `r-spp/tags`_ for valid values for ``<tag>``)


.. |downloads_r-spp| image:: https://img.shields.io/conda/dn/bioconda/r-spp.svg?style=flat
   :target: https://anaconda.org/bioconda/r-spp
   :alt:   (downloads)
.. |docker_r-spp| image:: https://quay.io/repository/biocontainers/r-spp/status
   :target: https://quay.io/repository/biocontainers/r-spp
.. _`r-spp/tags`: https://quay.io/repository/biocontainers/r-spp?tab=tags


.. raw:: html

    <script>
        var package = "r-spp";
        var versions = ["1.16.0","1.16.0","1.16.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-spp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-spp/README.html
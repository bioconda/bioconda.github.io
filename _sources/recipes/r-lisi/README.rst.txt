:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lisi'
.. highlight: bash

r-lisi
======

.. conda:recipe:: r-lisi
   :replaces_section_title:
   :noindex:

   A method to assess how well mixed cells with different labels are in single cell RNAseq.

   :homepage: https://github.com/immunogenomics/LISI
   :license: GPL3 / GPL-3
   :recipe: /`r-lisi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lisi/meta.yaml>`_

   


.. conda:package:: r-lisi

   |downloads_r-lisi| |docker_r-lisi|

   :versions:
      
      

      ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rann: 
   :depends r-rcpparmadillo: 
   :depends r-testthat: 
   :depends r-tidyr: 
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

      mamba install r-lisi

   and update with::

      mamba update r-lisi

  To create a new environment, run::

      mamba create --name myenvname r-lisi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-lisi:<tag>

   (see `r-lisi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lisi| image:: https://img.shields.io/conda/dn/bioconda/r-lisi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lisi
   :alt:   (downloads)
.. |docker_r-lisi| image:: https://quay.io/repository/biocontainers/r-lisi/status
   :target: https://quay.io/repository/biocontainers/r-lisi
.. _`r-lisi/tags`: https://quay.io/repository/biocontainers/r-lisi?tab=tags


.. raw:: html

    <script>
        var package = "r-lisi";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lisi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lisi/README.html
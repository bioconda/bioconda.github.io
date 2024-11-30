:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-momf'
.. highlight: bash

r-momf
======

.. conda:recipe:: r-momf
   :replaces_section_title:
   :noindex:

   The package can fit single RNA\-seq data set\(SOMF\) and multiple RNA\-seq data sets \(MOMF\).

   :homepage: https://github.com/omnideconv/MOMF
   :license: GPL / GPL-2
   :recipe: /`r-momf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-momf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-momf/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3373980`

   


.. conda:package:: r-momf

   |downloads_r-momf| |docker_r-momf|

   :versions:
      
      

      ``0-6``,  ``0-5``,  ``0-4``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-matlib: 
   :depends r-rcpp: ``>=0.12.14``
   :depends r-rcpparmadillo: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-momf

   and update with::

      mamba update r-momf

  To create a new environment, run::

      mamba create --name myenvname r-momf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-momf:<tag>

   (see `r-momf/tags`_ for valid values for ``<tag>``)


.. |downloads_r-momf| image:: https://img.shields.io/conda/dn/bioconda/r-momf.svg?style=flat
   :target: https://anaconda.org/bioconda/r-momf
   :alt:   (downloads)
.. |docker_r-momf| image:: https://quay.io/repository/biocontainers/r-momf/status
   :target: https://quay.io/repository/biocontainers/r-momf
.. _`r-momf/tags`: https://quay.io/repository/biocontainers/r-momf?tab=tags


.. raw:: html

    <script>
        var package = "r-momf";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-momf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-momf/README.html
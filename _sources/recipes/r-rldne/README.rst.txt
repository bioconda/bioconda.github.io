:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rldne'
.. highlight: bash

r-rldne
=======

.. conda:recipe:: r-rldne
   :replaces_section_title:
   :noindex:

   A Convenient R Interface For NeEstimator V2.1

   :homepage: https://github.com/zakrobinson/RLDNe
   :license: GPL-2.0-only
   :recipe: /`r-rldne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rldne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rldne/meta.yaml>`_

   An R\-package that conveniently interfaces with NeEstimator 2.1 \(Do et al. 2014\). NeEstimator V2.1 executables are distributed with this package freely\, for non\-commericial\, educational purposes only.
   Given that NeEstimator is quite straightfoward to run\, a common use case for this package is when you want to simulate\/downsample and run many iterations of the LD\-method via R.
   This package allows the LD\-Method in NeEstimator V2.1 to be easily executed via R.



.. conda:package:: r-rldne

   |downloads_r-rldne| |docker_r-rldne|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-efglmh: 
   :depends r-readr: 
   :depends r-remotes: ``>=2.1.0``
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install r-rldne

   and update with::

      mamba update r-rldne

  To create a new environment, run::

      mamba create --name myenvname r-rldne

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rldne:<tag>

   (see `r-rldne/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rldne| image:: https://img.shields.io/conda/dn/bioconda/r-rldne.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rldne
   :alt:   (downloads)
.. |docker_r-rldne| image:: https://quay.io/repository/biocontainers/r-rldne/status
   :target: https://quay.io/repository/biocontainers/r-rldne
.. _`r-rldne/tags`: https://quay.io/repository/biocontainers/r-rldne?tab=tags


.. raw:: html

    <script>
        var package = "r-rldne";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rldne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rldne/README.html
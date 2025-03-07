:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-autospill'
.. highlight: bash

r-autospill
===========

.. conda:recipe:: r-autospill
   :replaces_section_title:
   :noindex:

   AutoSpill algorithm for calculating spillover coefficients to compensate or unmix high\-parameter flow cytometry data.

   :homepage: https://github.com/carlosproca/autospill
   :license: MIT / MIT
   :recipe: /`r-autospill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-autospill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-autospill/meta.yaml>`_

   


.. conda:package:: r-autospill

   |downloads_r-autospill| |docker_r-autospill|

   :versions:
      
      

      ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bioconductor-flowcore: 
   :depends bioconductor-flowworkspace: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-deldir: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-moments: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-sp: 
   :depends r-tripack: 
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

      mamba install r-autospill

   and update with::

      mamba update r-autospill

  To create a new environment, run::

      mamba create --name myenvname r-autospill

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-autospill:<tag>

   (see `r-autospill/tags`_ for valid values for ``<tag>``)


.. |downloads_r-autospill| image:: https://img.shields.io/conda/dn/bioconda/r-autospill.svg?style=flat
   :target: https://anaconda.org/bioconda/r-autospill
   :alt:   (downloads)
.. |docker_r-autospill| image:: https://quay.io/repository/biocontainers/r-autospill/status
   :target: https://quay.io/repository/biocontainers/r-autospill
.. _`r-autospill/tags`: https://quay.io/repository/biocontainers/r-autospill?tab=tags


.. raw:: html

    <script>
        var package = "r-autospill";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-autospill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-autospill/README.html
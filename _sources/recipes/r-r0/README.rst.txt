:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-r0'
.. highlight: bash

r-r0
====

.. conda:recipe:: r-r0
   :replaces_section_title:
   :noindex:

   Estimation of R0 and Real\-Time Reproduction Number from Epidemics.

   :homepage: https://CRAN.R-project.org/package=R0
   :license: GPL2 / GPL-2
   :recipe: /`r-r0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r0/meta.yaml>`_

   


.. conda:package:: r-r0

   |downloads_r-r0| |docker_r-r0|

   :versions:
      
      

      ``1.2_6-3``,  ``1.2_6-2``,  ``1.2_6-1``,  ``1.2_6-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mass: 
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

      mamba install r-r0

   and update with::

      mamba update r-r0

  To create a new environment, run::

      mamba create --name myenvname r-r0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-r0:<tag>

   (see `r-r0/tags`_ for valid values for ``<tag>``)


.. |downloads_r-r0| image:: https://img.shields.io/conda/dn/bioconda/r-r0.svg?style=flat
   :target: https://anaconda.org/bioconda/r-r0
   :alt:   (downloads)
.. |docker_r-r0| image:: https://quay.io/repository/biocontainers/r-r0/status
   :target: https://quay.io/repository/biocontainers/r-r0
.. _`r-r0/tags`: https://quay.io/repository/biocontainers/r-r0?tab=tags


.. raw:: html

    <script>
        var package = "r-r0";
        var versions = ["1.2_6","1.2_6","1.2_6","1.2_6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-r0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-r0/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseefier'
.. highlight: bash

bioconductor-iseefier
=====================

.. conda:recipe:: bioconductor-iseefier
   :replaces_section_title:
   :noindex:

   Streamlining the creation of initial states for starting an iSEE instance

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEfier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-iseefier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseefier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseefier/meta.yaml>`_

   iSEEfier provides a set of functionality to quickly and intuitively create\, inspect\, and combine initial configuration objects. These can be conveniently passed in a straightforward manner to the function call to launch iSEE\(\) with the specified configuration. This package currently works seamlessly with the sets of panels provided by the iSEE and iSEEu packages\, but can be extended to accommodate the usage of any custom panel \(e.g. from iSEEde\, iSEEpathways\, or any panel developed independently by the user\).


.. conda:package:: bioconductor-iseefier

   |downloads_bioconductor-iseefier| |docker_bioconductor-iseefier|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends bioconductor-isee: ``>=2.18.0,<2.19.0``
   :depends bioconductor-iseeu: ``>=1.18.0,<1.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-rlang: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-iseefier

   and update with::

      mamba update bioconductor-iseefier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseefier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseefier:<tag>

   (see `bioconductor-iseefier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseefier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseefier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseefier
   :alt:   (downloads)
.. |docker_bioconductor-iseefier| image:: https://quay.io/repository/biocontainers/bioconductor-iseefier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseefier
.. _`bioconductor-iseefier/tags`: https://quay.io/repository/biocontainers/bioconductor-iseefier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseefier";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseefier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseefier/README.html
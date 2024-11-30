:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickdeconvolution'
.. highlight: bash

quickdeconvolution
==================

.. conda:recipe:: quickdeconvolution
   :replaces_section_title:
   :noindex:

   Deconvolves linked\-reads sequencing data

   :homepage: https://github.com/RolandFaure/QuickDeconvolution
   :license: GPL3
   :recipe: /`quickdeconvolution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickdeconvolution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickdeconvolution/meta.yaml>`_

   


.. conda:package:: quickdeconvolution

   |downloads_quickdeconvolution| |docker_quickdeconvolution|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install quickdeconvolution

   and update with::

      mamba update quickdeconvolution

  To create a new environment, run::

      mamba create --name myenvname quickdeconvolution

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quickdeconvolution:<tag>

   (see `quickdeconvolution/tags`_ for valid values for ``<tag>``)


.. |downloads_quickdeconvolution| image:: https://img.shields.io/conda/dn/bioconda/quickdeconvolution.svg?style=flat
   :target: https://anaconda.org/bioconda/quickdeconvolution
   :alt:   (downloads)
.. |docker_quickdeconvolution| image:: https://quay.io/repository/biocontainers/quickdeconvolution/status
   :target: https://quay.io/repository/biocontainers/quickdeconvolution
.. _`quickdeconvolution/tags`: https://quay.io/repository/biocontainers/quickdeconvolution?tab=tags


.. raw:: html

    <script>
        var package = "quickdeconvolution";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickdeconvolution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickdeconvolution/README.html
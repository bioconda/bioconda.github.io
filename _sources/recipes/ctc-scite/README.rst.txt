:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ctc-scite'
.. highlight: bash

ctc-scite
=========

.. conda:recipe:: ctc-scite
   :replaces_section_title:
   :noindex:

   CTC\-SCITE is a software package to infer cell lineages of single\-cells and clusters of single\-cells.

   :homepage: https://github.com/cbg-ethz/CTC-SCITE
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ctc-scite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctc-scite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ctc-scite/meta.yaml>`_

   


.. conda:package:: ctc-scite

   |downloads_ctc-scite| |docker_ctc-scite|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install ctc-scite

   and update with::

      mamba update ctc-scite

  To create a new environment, run::

      mamba create --name myenvname ctc-scite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ctc-scite:<tag>

   (see `ctc-scite/tags`_ for valid values for ``<tag>``)


.. |downloads_ctc-scite| image:: https://img.shields.io/conda/dn/bioconda/ctc-scite.svg?style=flat
   :target: https://anaconda.org/bioconda/ctc-scite
   :alt:   (downloads)
.. |docker_ctc-scite| image:: https://quay.io/repository/biocontainers/ctc-scite/status
   :target: https://quay.io/repository/biocontainers/ctc-scite
.. _`ctc-scite/tags`: https://quay.io/repository/biocontainers/ctc-scite?tab=tags


.. raw:: html

    <script>
        var package = "ctc-scite";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ctc-scite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ctc-scite/README.html
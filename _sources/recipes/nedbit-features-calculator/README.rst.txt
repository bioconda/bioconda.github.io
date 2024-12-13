:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nedbit-features-calculator'
.. highlight: bash

nedbit-features-calculator
==========================

.. conda:recipe:: nedbit-features-calculator
   :replaces_section_title:
   :noindex:

   Network diffusion and biology\-informed topological features

   :homepage: https://github.com/AndMastro/NIAPU
   :license: MIT
   :recipe: /`nedbit-features-calculator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedbit-features-calculator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nedbit-features-calculator/meta.yaml>`_

   


.. conda:package:: nedbit-features-calculator

   |downloads_nedbit-features-calculator| |docker_nedbit-features-calculator|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install nedbit-features-calculator

   and update with::

      mamba update nedbit-features-calculator

  To create a new environment, run::

      mamba create --name myenvname nedbit-features-calculator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nedbit-features-calculator:<tag>

   (see `nedbit-features-calculator/tags`_ for valid values for ``<tag>``)


.. |downloads_nedbit-features-calculator| image:: https://img.shields.io/conda/dn/bioconda/nedbit-features-calculator.svg?style=flat
   :target: https://anaconda.org/bioconda/nedbit-features-calculator
   :alt:   (downloads)
.. |docker_nedbit-features-calculator| image:: https://quay.io/repository/biocontainers/nedbit-features-calculator/status
   :target: https://quay.io/repository/biocontainers/nedbit-features-calculator
.. _`nedbit-features-calculator/tags`: https://quay.io/repository/biocontainers/nedbit-features-calculator?tab=tags


.. raw:: html

    <script>
        var package = "nedbit-features-calculator";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nedbit-features-calculator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nedbit-features-calculator/README.html
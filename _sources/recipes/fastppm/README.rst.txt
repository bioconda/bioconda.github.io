:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastppm'
.. highlight: bash

fastppm
=======

.. conda:recipe:: fastppm
   :replaces_section_title:
   :noindex:

   Fast Perfect Phylogeny Mixture Regression using Tree\-Structured Dual Dynamic Programming

   :homepage: https://github.com/elkebir-group/fastppm
   :license: MIT
   :recipe: /`fastppm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastppm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastppm/meta.yaml>`_

   \`fastppm\` \(fast perfect phylogeny mixtures\) is a C\+\+\/Python library
   for fast estimation of unknown frequency matrices\, given variant and
   total read counts over an n\-clonal tree. 



.. conda:package:: fastppm

   |downloads_fastppm| |docker_fastppm|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install fastppm

   and update with::

      mamba update fastppm

  To create a new environment, run::

      mamba create --name myenvname fastppm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastppm:<tag>

   (see `fastppm/tags`_ for valid values for ``<tag>``)


.. |downloads_fastppm| image:: https://img.shields.io/conda/dn/bioconda/fastppm.svg?style=flat
   :target: https://anaconda.org/bioconda/fastppm
   :alt:   (downloads)
.. |docker_fastppm| image:: https://quay.io/repository/biocontainers/fastppm/status
   :target: https://quay.io/repository/biocontainers/fastppm
.. _`fastppm/tags`: https://quay.io/repository/biocontainers/fastppm?tab=tags


.. raw:: html

    <script>
        var package = "fastppm";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastppm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastppm/README.html
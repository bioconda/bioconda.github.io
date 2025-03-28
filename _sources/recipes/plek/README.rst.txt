:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plek'
.. highlight: bash

plek
====

.. conda:recipe:: plek
   :replaces_section_title:
   :noindex:

   Predictor of long non\-coding RNAs and mRNAs based on k\-mer scheme.

   :homepage: https://sourceforge.net/projects/plek
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`plek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plek/meta.yaml>`_
   :links: biotools: :biotools:`plek`

   


.. conda:package:: plek

   |downloads_plek| |docker_plek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-10</code>,  <code>1.2-9</code>,  <code>1.2-8</code>,  <code>1.2-7</code>,  <code>1.2-6</code>,  <code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  </span></summary>
      

      ``1.2-10``,  ``1.2-9``,  ``1.2-8``,  ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install plek

   and update with::

      mamba update plek

  To create a new environment, run::

      mamba create --name myenvname plek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plek:<tag>

   (see `plek/tags`_ for valid values for ``<tag>``)


.. |downloads_plek| image:: https://img.shields.io/conda/dn/bioconda/plek.svg?style=flat
   :target: https://anaconda.org/bioconda/plek
   :alt:   (downloads)
.. |docker_plek| image:: https://quay.io/repository/biocontainers/plek/status
   :target: https://quay.io/repository/biocontainers/plek
.. _`plek/tags`: https://quay.io/repository/biocontainers/plek?tab=tags


.. raw:: html

    <script>
        var package = "plek";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plek/README.html
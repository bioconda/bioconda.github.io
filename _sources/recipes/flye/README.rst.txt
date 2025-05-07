:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flye'
.. highlight: bash

flye
====

.. conda:recipe:: flye
   :replaces_section_title:
   :noindex:

   A fast and accurate de novo assembler for single molecule sequencing reads using repeat graphs.

   :homepage: https://github.com/mikolmogorov/Flye
   :documentation: https://github.com/mikolmogorov/Flye/blob/flye/docs/USAGE.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`flye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye/meta.yaml>`_
   :links: biotools: :biotools:`Flye`, usegalaxy-eu: :usegalaxy-eu:`flye`, doi: :doi:`10.1038/s41592-020-00971-x`, doi: :doi:`10.1038/s41587-019-0072-8`, doi: :doi:`10.1073/pnas.1604560113`

   


.. conda:package:: flye

   |downloads_flye| |docker_flye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.6-0</code>,  <code>2.9.5-2</code>,  <code>2.9.5-1</code>,  <code>2.9.5-0</code>,  <code>2.9.4-2</code>,  <code>2.9.4-0</code>,  <code>2.9.3-1</code>,  <code>2.9.3-0</code>,  <code>2.9.2-2</code>,  </span></summary>
      

      ``2.9.6-0``,  ``2.9.5-2``,  ``2.9.5-1``,  ``2.9.5-0``,  ``2.9.4-2``,  ``2.9.4-0``,  ``2.9.3-1``,  ``2.9.3-0``,  ``2.9.2-2``,  ``2.9.2-1``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9-1``,  ``2.9-0``,  ``2.8.3-1``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.7-0``,  ``2.3.6-3``,  ``2.3.5-3``,  ``2.3.4-2``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install flye

   and update with::

      mamba update flye

  To create a new environment, run::

      mamba create --name myenvname flye

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flye:<tag>

   (see `flye/tags`_ for valid values for ``<tag>``)


.. |downloads_flye| image:: https://img.shields.io/conda/dn/bioconda/flye.svg?style=flat
   :target: https://anaconda.org/bioconda/flye
   :alt:   (downloads)
.. |docker_flye| image:: https://quay.io/repository/biocontainers/flye/status
   :target: https://quay.io/repository/biocontainers/flye
.. _`flye/tags`: https://quay.io/repository/biocontainers/flye?tab=tags


.. raw:: html

    <script>
        var package = "flye";
        var versions = ["2.9.6","2.9.5","2.9.5","2.9.5","2.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flye/README.html
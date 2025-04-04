:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeptoolsintervals'
.. highlight: bash

deeptoolsintervals
==================

.. conda:recipe:: deeptoolsintervals
   :replaces_section_title:
   :noindex:

   A python module creating\/accessing GTF\-based interval trees with associated meta\-data

   :homepage: https://github.com/deeptools/deeptools_intervals
   :license: MIT
   :recipe: /`deeptoolsintervals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptoolsintervals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptoolsintervals/meta.yaml>`_

   


.. conda:package:: deeptoolsintervals

   |downloads_deeptoolsintervals| |docker_deeptoolsintervals|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.9-11</code>,  <code>0.1.9-10</code>,  <code>0.1.9-9</code>,  <code>0.1.9-8</code>,  <code>0.1.9-7</code>,  <code>0.1.9-6</code>,  <code>0.1.9-5</code>,  <code>0.1.9-4</code>,  <code>0.1.9-3</code>,  </span></summary>
      

      ``0.1.9-11``,  ``0.1.9-10``,  ``0.1.9-9``,  ``0.1.9-8``,  ``0.1.9-7``,  ``0.1.9-6``,  ``0.1.9-5``,  ``0.1.9-4``,  ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
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

      mamba install deeptoolsintervals

   and update with::

      mamba update deeptoolsintervals

  To create a new environment, run::

      mamba create --name myenvname deeptoolsintervals

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deeptoolsintervals:<tag>

   (see `deeptoolsintervals/tags`_ for valid values for ``<tag>``)


.. |downloads_deeptoolsintervals| image:: https://img.shields.io/conda/dn/bioconda/deeptoolsintervals.svg?style=flat
   :target: https://anaconda.org/bioconda/deeptoolsintervals
   :alt:   (downloads)
.. |docker_deeptoolsintervals| image:: https://quay.io/repository/biocontainers/deeptoolsintervals/status
   :target: https://quay.io/repository/biocontainers/deeptoolsintervals
.. _`deeptoolsintervals/tags`: https://quay.io/repository/biocontainers/deeptoolsintervals?tab=tags


.. raw:: html

    <script>
        var package = "deeptoolsintervals";
        var versions = ["0.1.9","0.1.9","0.1.9","0.1.9","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeptoolsintervals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeptoolsintervals/README.html
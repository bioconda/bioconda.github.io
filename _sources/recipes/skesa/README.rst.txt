:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skesa'
.. highlight: bash

skesa
=====

.. conda:recipe:: skesa
   :replaces_section_title:
   :noindex:

   Strategic Kmer Extension for Scrupulous Assemblies \& Sequence Assembly Using Target Enrichment.

   :homepage: https://github.com/ncbi/SKESA
   :documentation: https://github.com/ncbi/SKESA/blob/skesa.2.4.0_saute.1.3.0_2/README.md
   
   :license: Public Domain
   :recipe: /`skesa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skesa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skesa/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1540-z`, doi: :doi:`10.1186/s12859-021-04174-9`

   


.. conda:package:: skesa

   |downloads_skesa| |docker_skesa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-2</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2-2</code>,  </span></summary>
      

      ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.0-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2-2``,  ``2.2-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.70,<1.72``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libstdcxx-ng: 
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install skesa

   and update with::

      mamba update skesa

  To create a new environment, run::

      mamba create --name myenvname skesa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skesa:<tag>

   (see `skesa/tags`_ for valid values for ``<tag>``)


.. |downloads_skesa| image:: https://img.shields.io/conda/dn/bioconda/skesa.svg?style=flat
   :target: https://anaconda.org/bioconda/skesa
   :alt:   (downloads)
.. |docker_skesa| image:: https://quay.io/repository/biocontainers/skesa/status
   :target: https://quay.io/repository/biocontainers/skesa
.. _`skesa/tags`: https://quay.io/repository/biocontainers/skesa?tab=tags


.. raw:: html

    <script>
        var package = "skesa";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skesa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skesa/README.html
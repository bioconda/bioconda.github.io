:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffcompare'
.. highlight: bash

gffcompare
==========

.. conda:recipe:: gffcompare
   :replaces_section_title:
   :noindex:

   GffCompare by Geo Pertea.

   :homepage: https://ccb.jhu.edu/software/stringtie/gffcompare.shtml
   :documentation: https://github.com/gpertea/gffcompare/blob/v0.12.10/README.md
   
   :developer docs: https://github.com/gpertea/gffcompare
   :license: Artistic License 2.0
   :recipe: /`gffcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare/meta.yaml>`_
   :links: biotools: :biotools:`gffcompare`, usegalaxy-eu: :usegalaxy-eu:`gffcompare`

   


.. conda:package:: gffcompare

   |downloads_gffcompare| |docker_gffcompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.10-0</code>,  <code>0.12.9-0</code>,  <code>0.12.6-4</code>,  <code>0.12.6-3</code>,  <code>0.12.6-2</code>,  <code>0.12.6-1</code>,  <code>0.12.6-0</code>,  <code>0.11.2-3</code>,  <code>0.11.2-2</code>,  </span></summary>
      

      ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.6-4``,  ``0.12.6-3``,  ``0.12.6-2``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.11.2-3``,  ``0.11.2-2``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.10.6-0``,  ``0.9.8-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install gffcompare

   and update with::

      mamba update gffcompare

  To create a new environment, run::

      mamba create --name myenvname gffcompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gffcompare:<tag>

   (see `gffcompare/tags`_ for valid values for ``<tag>``)


.. |downloads_gffcompare| image:: https://img.shields.io/conda/dn/bioconda/gffcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/gffcompare
   :alt:   (downloads)
.. |docker_gffcompare| image:: https://quay.io/repository/biocontainers/gffcompare/status
   :target: https://quay.io/repository/biocontainers/gffcompare
.. _`gffcompare/tags`: https://quay.io/repository/biocontainers/gffcompare?tab=tags


.. raw:: html

    <script>
        var package = "gffcompare";
        var versions = ["0.12.10","0.12.9","0.12.6","0.12.6","0.12.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffcompare/README.html
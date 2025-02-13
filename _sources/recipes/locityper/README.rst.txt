:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locityper'
.. highlight: bash

locityper
=========

.. conda:recipe:: locityper
   :replaces_section_title:
   :noindex:

   Targeted genotyper for complex polymorphic loci from short and long read WGS.

   :homepage: https://github.com/tprodanov/locityper
   :license: MIT / MIT
   :recipe: /`locityper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locityper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locityper/meta.yaml>`_

   


.. conda:package:: locityper

   |downloads_locityper| |docker_locityper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.0-0</code>,  <code>0.17.5-0</code>,  <code>0.17.4-1</code>,  <code>0.17.4-0</code>,  <code>0.17.3-0</code>,  <code>0.16.12-0</code>,  <code>0.16.11-0</code>,  <code>0.16.10-0</code>,  <code>0.16.9-0</code>,  </span></summary>
      

      ``0.18.0-0``,  ``0.17.5-0``,  ``0.17.4-1``,  ``0.17.4-0``,  ``0.17.3-0``,  ``0.16.12-0``,  ``0.16.11-0``,  ``0.16.10-0``,  ``0.16.9-0``,  ``0.16.8-0``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-0``,  ``0.14.5-0``,  ``0.14.4-0``,  ``0.13.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends kmer-jellyfish: ``>=1.0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends minimap2: ``>=2.25``
   :depends pysam: 
   :depends python: 
   :depends samtools: ``>=1.18``
   :depends strobealign: ``>=0.12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install locityper

   and update with::

      mamba update locityper

  To create a new environment, run::

      mamba create --name myenvname locityper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/locityper:<tag>

   (see `locityper/tags`_ for valid values for ``<tag>``)


.. |downloads_locityper| image:: https://img.shields.io/conda/dn/bioconda/locityper.svg?style=flat
   :target: https://anaconda.org/bioconda/locityper
   :alt:   (downloads)
.. |docker_locityper| image:: https://quay.io/repository/biocontainers/locityper/status
   :target: https://quay.io/repository/biocontainers/locityper
.. _`locityper/tags`: https://quay.io/repository/biocontainers/locityper?tab=tags


.. raw:: html

    <script>
        var package = "locityper";
        var versions = ["0.18.0","0.17.5","0.17.4","0.17.4","0.17.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locityper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locityper/README.html
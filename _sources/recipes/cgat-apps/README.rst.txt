:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-apps'
.. highlight: bash

cgat-apps
=========

.. conda:recipe:: cgat-apps
   :replaces_section_title:
   :noindex:

   Computational Genomics Analysis Toolkit.

   :homepage: https://github.com/cgat-developers/cgat-apps
   :documentation: https://cgat-apps.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`cgat-apps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps/meta.yaml>`_

   


.. conda:package:: cgat-apps

   |downloads_cgat-apps| |docker_cgat-apps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.10-1</code>,  <code>0.7.10-0</code>,  <code>0.7.4-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.0-0</code>,  <code>0.6.5-3</code>,  <code>0.6.5-2</code>,  <code>0.6.5-1</code>,  </span></summary>
      

      ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.4-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends alignlib-lite: 
   :depends bedtools: 
   :depends biopython: 
   :depends cgatcore: 
   :depends coreutils: 
   :depends grep: 
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: ``>=0.22.1,<0.23.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: 
   :depends quicksect: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends sortedcontainers: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-wigtobigwig: 
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

      mamba install cgat-apps

   and update with::

      mamba update cgat-apps

  To create a new environment, run::

      mamba create --name myenvname cgat-apps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgat-apps:<tag>

   (see `cgat-apps/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-apps| image:: https://img.shields.io/conda/dn/bioconda/cgat-apps.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-apps
   :alt:   (downloads)
.. |docker_cgat-apps| image:: https://quay.io/repository/biocontainers/cgat-apps/status
   :target: https://quay.io/repository/biocontainers/cgat-apps
.. _`cgat-apps/tags`: https://quay.io/repository/biocontainers/cgat-apps?tab=tags


.. raw:: html

    <script>
        var package = "cgat-apps";
        var versions = ["0.7.10","0.7.10","0.7.4","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-apps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-apps/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatshap'
.. highlight: bash

whatshap
========

.. conda:recipe:: whatshap
   :replaces_section_title:
   :noindex:

   Phase genomic variants using DNA sequencing reads \(haplotype assembly\).

   :homepage: https://whatshap.readthedocs.io
   :developer docs: https://github.com/whatshap/whatshap
   :license: MIT / MIT
   :recipe: /`whatshap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap/meta.yaml>`_
   :links: biotools: :biotools:`whatshap`, doi: :doi:`10.1089/cmb.2014.0157`

   


.. conda:package:: whatshap

   |downloads_whatshap| |docker_whatshap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6-0</code>,  <code>2.5-0</code>,  <code>2.4-0</code>,  <code>2.3-3</code>,  <code>2.3-2</code>,  <code>2.3-0</code>,  <code>2.2-1</code>,  <code>2.2-0</code>,  <code>2.1-0</code>,  </span></summary>
      

      ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-3``,  ``2.3-2``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-0``,  ``2.0-0``,  ``1.7-1``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-0``,  ``0.15-0``,  ``0.14.1-0``,  ``0.13-0``,  ``0.12-0``,  ``0.11-0``,  ``0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends htslib: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends networkx: 
   :depends pulp: ``>=2``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends pysam: ``>=0.18``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends xopen: ``>=1.2.0``
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

      mamba install whatshap

   and update with::

      mamba update whatshap

  To create a new environment, run::

      mamba create --name myenvname whatshap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/whatshap:<tag>

   (see `whatshap/tags`_ for valid values for ``<tag>``)


.. |downloads_whatshap| image:: https://img.shields.io/conda/dn/bioconda/whatshap.svg?style=flat
   :target: https://anaconda.org/bioconda/whatshap
   :alt:   (downloads)
.. |docker_whatshap| image:: https://quay.io/repository/biocontainers/whatshap/status
   :target: https://quay.io/repository/biocontainers/whatshap
.. _`whatshap/tags`: https://quay.io/repository/biocontainers/whatshap?tab=tags


.. raw:: html

    <script>
        var package = "whatshap";
        var versions = ["2.6","2.5","2.4","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatshap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatshap/README.html
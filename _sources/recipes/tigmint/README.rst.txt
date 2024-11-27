:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tigmint'
.. highlight: bash

tigmint
=======

.. conda:recipe:: tigmint
   :replaces_section_title:
   :noindex:

   Correct misassemblies using linked or long reads

   :homepage: https://bcgsc.github.io/tigmint/
   :documentation: https://github.com/bcgsc/tigmint#readme
   
   :developer docs: https://github.com/bcgsc/tigmint
   :license: GPL-3.0
   :recipe: /`tigmint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint/meta.yaml>`_
   :links: doi: :doi:`10.1101/304253`

   


.. conda:package:: tigmint

   |downloads_tigmint| |docker_tigmint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.10-3</code>,  <code>1.2.10-2</code>,  <code>1.2.10-1</code>,  <code>1.2.10-0</code>,  <code>1.2.9-2</code>,  <code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  </span></summary>
      

      ``1.2.10-3``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-2``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.7.3,<2.0a0``
   :depends bwa: 
   :depends intervaltree: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends make: 
   :depends minimap2: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends samtools: 
   :depends zsh: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tigmint

   and update with::

      mamba update tigmint

  To create a new environment, run::

      mamba create --name myenvname tigmint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tigmint:<tag>

   (see `tigmint/tags`_ for valid values for ``<tag>``)


.. |downloads_tigmint| image:: https://img.shields.io/conda/dn/bioconda/tigmint.svg?style=flat
   :target: https://anaconda.org/bioconda/tigmint
   :alt:   (downloads)
.. |docker_tigmint| image:: https://quay.io/repository/biocontainers/tigmint/status
   :target: https://quay.io/repository/biocontainers/tigmint
.. _`tigmint/tags`: https://quay.io/repository/biocontainers/tigmint?tab=tags


.. raw:: html

    <script>
        var package = "tigmint";
        var versions = ["1.2.10","1.2.10","1.2.10","1.2.10","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tigmint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tigmint/README.html
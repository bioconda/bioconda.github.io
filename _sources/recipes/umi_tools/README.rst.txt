:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umi_tools'
.. highlight: bash

umi_tools
=========

.. conda:recipe:: umi_tools
   :replaces_section_title:
   :noindex:

   Tools for dealing with Unique Molecular Identifiers \(UMIs\) \/ Random Molecular Tags \(RMTs\).

   :homepage: https://github.com/CGATOxford/UMI-tools
   :documentation: https://umi-tools.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`umi_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi_tools/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.209601.116`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_count`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_extract`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_group`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_whitelist`, usegalaxy-eu: :usegalaxy-eu:`umi_tools_dedup`

   


.. conda:package:: umi_tools

   |downloads_umi_tools| |docker_umi_tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.6-0</code>,  <code>1.1.5-3</code>,  <code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-2</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  </span></summary>
      

      ``1.1.6-0``,  ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.0-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: 
   :depends libgcc: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.7``
   :depends pandas: ``>=0.12.0``
   :depends pybktree: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends regex: 
   :depends scipy: 
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

      mamba install umi_tools

   and update with::

      mamba update umi_tools

  To create a new environment, run::

      mamba create --name myenvname umi_tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umi_tools:<tag>

   (see `umi_tools/tags`_ for valid values for ``<tag>``)


.. |downloads_umi_tools| image:: https://img.shields.io/conda/dn/bioconda/umi_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/umi_tools
   :alt:   (downloads)
.. |docker_umi_tools| image:: https://quay.io/repository/biocontainers/umi_tools/status
   :target: https://quay.io/repository/biocontainers/umi_tools
.. _`umi_tools/tags`: https://quay.io/repository/biocontainers/umi_tools?tab=tags


.. raw:: html

    <script>
        var package = "umi_tools";
        var versions = ["1.1.6","1.1.5","1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi_tools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poppunk'
.. highlight: bash

poppunk
=======

.. conda:recipe:: poppunk
   :replaces_section_title:
   :noindex:

   PopPUNK \(POPulation Partitioning Using Nucleotide Kmers\)

   :homepage: https://poppunk.bacpop.org
   :documentation: https://poppunk.bacpop.org/index.html
   
   :developer docs: https://github.com/bacpop/PopPUNK
   :license: APACHE / Apache-2.0
   :recipe: /`poppunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.241455.118`, biotools: :biotools:`poppunk`

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.6-0</code>,  <code>2.7.5-0</code>,  <code>2.7.2-2</code>,  <code>2.7.2-1</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.7-0</code>,  <code>2.6.5-1</code>,  </span></summary>
      

      ``2.7.6-0``,  ``2.7.5-0``,  ``2.7.2-2``,  ``2.7.2-1``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.7-0``,  ``2.6.5-1``,  ``2.6.5-0``,  ``2.6.4-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends dendropy: ``>=4.4.0``
   :depends graph-tool: ``>=2.35``
   :depends h5py: 
   :depends hdbscan: 
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mandrake: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pp-sketchlib: ``>=2.0.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rapidnj: 
   :depends requests: 
   :depends scikit-learn: ``>=0.24``
   :depends scipy: 
   :depends tqdm: 
   :depends treeswift: 
   :depends xorg-libxaw: 
   :depends xorg-libxcomposite: 
   :depends xorg-libxcursor: 
   :depends xorg-libxdamage: 
   :depends xorg-libxfixes: 
   :depends xorg-libxi: 
   :depends xorg-libxinerama: 
   :depends xorg-libxpm: 
   :depends xorg-libxrandr: 
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

      mamba install poppunk

   and update with::

      mamba update poppunk

  To create a new environment, run::

      mamba create --name myenvname poppunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poppunk:<tag>

   (see `poppunk/tags`_ for valid values for ``<tag>``)


.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :target: https://anaconda.org/bioconda/poppunk
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk
.. _`poppunk/tags`: https://quay.io/repository/biocontainers/poppunk?tab=tags


.. raw:: html

    <script>
        var package = "poppunk";
        var versions = ["2.7.6","2.7.5","2.7.2","2.7.2","2.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html
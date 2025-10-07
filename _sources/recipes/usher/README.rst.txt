:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usher'
.. highlight: bash

usher
=====

.. conda:recipe:: usher
   :replaces_section_title:
   :noindex:

   Ultrafast Sample Placement on Existing Trees \(UShER\).

   :homepage: https://github.com/yatisht/usher
   :documentation: https://usher-wiki.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`usher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41588-021-00862-7`, biotools: :biotools:`usher`, usegalaxy-eu: :usegalaxy-eu:`usher_matutils`, usegalaxy-eu: :usegalaxy-eu:`usher`

   


.. conda:package:: usher

   |downloads_usher| |docker_usher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.6-4</code>,  <code>0.6.6-3</code>,  <code>0.6.6-2</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.6.6-4``,  ``0.6.6-3``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-4``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends isa-l: ``>=2.31.1,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends mafft: 
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends protobuf: ``<5``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends tbb-devel: ``<2021.1.1``
   :depends ucsc-fatovcf: 
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

      mamba install usher

   and update with::

      mamba update usher

  To create a new environment, run::

      mamba create --name myenvname usher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/usher:<tag>

   (see `usher/tags`_ for valid values for ``<tag>``)


.. |downloads_usher| image:: https://img.shields.io/conda/dn/bioconda/usher.svg?style=flat
   :target: https://anaconda.org/bioconda/usher
   :alt:   (downloads)
.. |docker_usher| image:: https://quay.io/repository/biocontainers/usher/status
   :target: https://quay.io/repository/biocontainers/usher
.. _`usher/tags`: https://quay.io/repository/biocontainers/usher?tab=tags


.. raw:: html

    <script>
        var package = "usher";
        var versions = ["0.6.6","0.6.6","0.6.6","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usher/README.html
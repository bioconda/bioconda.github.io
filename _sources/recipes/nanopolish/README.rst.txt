:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolish'
.. highlight: bash

nanopolish
==========

.. conda:recipe:: nanopolish
   :replaces_section_title:
   :noindex:

   Signal\-level algorithms for MinION data.

   :homepage: https://github.com/jts/nanopolish
   :license: MIT
   :recipe: /`nanopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanopolish_eventalign`

   


.. conda:package:: nanopolish

   |downloads_nanopolish| |docker_nanopolish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.0-5</code>,  <code>0.14.0-4</code>,  <code>0.14.0-3</code>,  <code>0.14.0-2</code>,  <code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.2-10</code>,  <code>0.13.2-9</code>,  <code>0.13.2-8</code>,  </span></summary>
      

      ``0.14.0-5``,  ``0.14.0-4``,  ``0.14.0-3``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.2-10``,  ``0.13.2-9``,  ``0.13.2-8``,  ``0.13.2-7``,  ``0.13.2-6``,  ``0.13.2-5``,  ``0.13.2-4``,  ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.5-2``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.0-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.2-5``,  ``0.9.2-4``,  ``0.9.2-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.5-4``,  ``0.8.5-3``,  ``0.8.1-3``,  ``0.7.1-3``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.6.0.dev-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends ont_vbz_hdf_plugin: 
   :depends python: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nanopolish

   and update with::

      mamba update nanopolish

  To create a new environment, run::

      mamba create --name myenvname nanopolish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanopolish:<tag>

   (see `nanopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolish| image:: https://img.shields.io/conda/dn/bioconda/nanopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolish
   :alt:   (downloads)
.. |docker_nanopolish| image:: https://quay.io/repository/biocontainers/nanopolish/status
   :target: https://quay.io/repository/biocontainers/nanopolish
.. _`nanopolish/tags`: https://quay.io/repository/biocontainers/nanopolish?tab=tags


.. raw:: html

    <script>
        var package = "nanopolish";
        var versions = ["0.14.0","0.14.0","0.14.0","0.14.0","0.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolish/README.html
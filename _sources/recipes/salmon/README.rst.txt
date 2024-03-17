:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmon'
.. highlight: bash

salmon
======

.. conda:recipe:: salmon
   :replaces_section_title:
   :noindex:

   Highly\-accurate \& wicked fast transcript\-level quantification from RNA\-seq reads using selective alignment

   :homepage: https://github.com/COMBINE-lab/salmon
   :license: GPLv3
   :recipe: /`salmon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmon/meta.yaml>`_
   :links: biotools: :biotools:`salmon`, usegalaxy-eu: :usegalaxy-eu:`salmon`, usegalaxy-eu: :usegalaxy-eu:`alevin`, doi: :doi:`10.1038/nmeth.4197`

   


.. conda:package:: salmon

   |downloads_salmon| |docker_salmon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.3-0</code>,  <code>1.10.2-0</code>,  <code>1.10.1-2</code>,  <code>1.10.1-1</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-2``,  ``1.10.1-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.15.0-0``,  ``0.14.2-1``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.12.0-1``,  ``0.11.3-2``,  ``0.11.3-1``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-3``,  ``0.10.2-1``,  ``0.10.1-1``,  ``0.10.0-1``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends icu: ``>=70.1,<71.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends tbb: ``>=2021.4.0``
   :depends tbb: ``>=2021.9.0``
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

      mamba install salmon

   and update with::

      mamba update salmon

  To create a new environment, run::

      mamba create --name myenvname salmon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/salmon:<tag>

   (see `salmon/tags`_ for valid values for ``<tag>``)


.. |downloads_salmon| image:: https://img.shields.io/conda/dn/bioconda/salmon.svg?style=flat
   :target: https://anaconda.org/bioconda/salmon
   :alt:   (downloads)
.. |docker_salmon| image:: https://quay.io/repository/biocontainers/salmon/status
   :target: https://quay.io/repository/biocontainers/salmon
.. _`salmon/tags`: https://quay.io/repository/biocontainers/salmon?tab=tags


.. raw:: html

    <script>
        var package = "salmon";
        var versions = ["1.10.3","1.10.2","1.10.1","1.10.1","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmon/README.html
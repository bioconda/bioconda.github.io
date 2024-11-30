:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexbar'
.. highlight: bash

flexbar
=======

.. conda:recipe:: flexbar
   :replaces_section_title:
   :noindex:

   Flexible barcode and adapter removal

   :homepage: https://github.com/seqan/flexbar
   :license: BSD-3-Clause
   :recipe: /`flexbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar/meta.yaml>`_
   :links: biotools: :biotools:`flexbar`

   


.. conda:package:: flexbar

   |downloads_flexbar| |docker_flexbar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-10</code>,  <code>3.5.0-9</code>,  <code>3.5.0-8</code>,  <code>3.5.0-6</code>,  <code>3.5.0-5</code>,  <code>3.5.0-4</code>,  <code>3.5.0-3</code>,  <code>3.5.0-2</code>,  <code>3.3.0-1</code>,  </span></summary>
      

      ``3.5.0-10``,  ``3.5.0-9``,  ``3.5.0-8``,  ``3.5.0-6``,  ``3.5.0-5``,  ``3.5.0-4``,  ``3.5.0-3``,  ``3.5.0-2``,  ``3.3.0-1``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends seqan-library: 
   :depends tbb: ``>=2021.9.0``
   :depends zlib: 
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

      mamba install flexbar

   and update with::

      mamba update flexbar

  To create a new environment, run::

      mamba create --name myenvname flexbar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexbar:<tag>

   (see `flexbar/tags`_ for valid values for ``<tag>``)


.. |downloads_flexbar| image:: https://img.shields.io/conda/dn/bioconda/flexbar.svg?style=flat
   :target: https://anaconda.org/bioconda/flexbar
   :alt:   (downloads)
.. |docker_flexbar| image:: https://quay.io/repository/biocontainers/flexbar/status
   :target: https://quay.io/repository/biocontainers/flexbar
.. _`flexbar/tags`: https://quay.io/repository/biocontainers/flexbar?tab=tags


.. raw:: html

    <script>
        var package = "flexbar";
        var versions = ["3.5.0","3.5.0","3.5.0","3.5.0","3.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexbar/README.html
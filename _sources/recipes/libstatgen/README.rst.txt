:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libstatgen'
.. highlight: bash

libstatgen
==========

.. conda:recipe:: libstatgen
   :replaces_section_title:
   :noindex:

   Useful set of classes for creating statistical genetic programs.

   :homepage: https://genome.sph.umich.edu/wiki/C++_Library:_libStatGen
   :developer docs: https://github.com/statgen/libStatGen
   :license: GPL3
   :recipe: /`libstatgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libstatgen/meta.yaml>`_

   


.. conda:package:: libstatgen

   |downloads_libstatgen| |docker_libstatgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-6</code>,  <code>1.0.15-5</code>,  <code>1.0.15-4</code>,  <code>1.0.15-3</code>,  <code>1.0.15-2</code>,  <code>1.0.15-1</code>,  <code>1.0.15-0</code>,  <code>1.0.14-1</code>,  <code>1.0.14-0</code>,  </span></summary>
      

      ``1.0.15-6``,  ``1.0.15-5``,  ``1.0.15-4``,  ``1.0.15-3``,  ``1.0.15-2``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install libstatgen

   and update with::

      mamba update libstatgen

  To create a new environment, run::

      mamba create --name myenvname libstatgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libstatgen:<tag>

   (see `libstatgen/tags`_ for valid values for ``<tag>``)


.. |downloads_libstatgen| image:: https://img.shields.io/conda/dn/bioconda/libstatgen.svg?style=flat
   :target: https://anaconda.org/bioconda/libstatgen
   :alt:   (downloads)
.. |docker_libstatgen| image:: https://quay.io/repository/biocontainers/libstatgen/status
   :target: https://quay.io/repository/biocontainers/libstatgen
.. _`libstatgen/tags`: https://quay.io/repository/biocontainers/libstatgen?tab=tags


.. raw:: html

    <script>
        var package = "libstatgen";
        var versions = ["1.0.15","1.0.15","1.0.15","1.0.15","1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libstatgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libstatgen/README.html
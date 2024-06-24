:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slow5tools'
.. highlight: bash

slow5tools
==========

.. conda:recipe:: slow5tools
   :replaces_section_title:
   :noindex:

   Toolkit for S\/bLOW5 format

   :homepage: https://github.com/hasindu2008/slow5tools
   :license: MIT
   :recipe: /`slow5tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5tools/meta.yaml>`_

   Slow5tools is a toolkit for converting \(FAST5 \<\-\> SLOW5\)\, compressing\, viewing\, indexing and manipulating data in SLOW5 format.


.. conda:package:: slow5tools

   |downloads_slow5tools| |docker_slow5tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.0-3</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-3``,  ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-3``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-6``,  ``0.2.0-5``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install slow5tools

   and update with::

      mamba update slow5tools

  To create a new environment, run::

      mamba create --name myenvname slow5tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slow5tools:<tag>

   (see `slow5tools/tags`_ for valid values for ``<tag>``)


.. |downloads_slow5tools| image:: https://img.shields.io/conda/dn/bioconda/slow5tools.svg?style=flat
   :target: https://anaconda.org/bioconda/slow5tools
   :alt:   (downloads)
.. |docker_slow5tools| image:: https://quay.io/repository/biocontainers/slow5tools/status
   :target: https://quay.io/repository/biocontainers/slow5tools
.. _`slow5tools/tags`: https://quay.io/repository/biocontainers/slow5tools?tab=tags


.. raw:: html

    <script>
        var package = "slow5tools";
        var versions = ["1.1.0","1.1.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slow5tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slow5tools/README.html
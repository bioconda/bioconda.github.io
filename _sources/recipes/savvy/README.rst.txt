:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savvy'
.. highlight: bash

savvy
=====

.. conda:recipe:: savvy
   :replaces_section_title:
   :noindex:

   Interface to various variant calling formats.

   :homepage: https://github.com/statgen/savvy
   :license: MOZILLA / MPL-2.0
   :recipe: /`savvy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy/meta.yaml>`_

   


.. conda:package:: savvy

   |downloads_savvy| |docker_savvy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends shrinkwrap: 
   :depends zstd: ``>=1.5.2,<1.6.0a0``
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

      mamba install savvy

   and update with::

      mamba update savvy

  To create a new environment, run::

      mamba create --name myenvname savvy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/savvy:<tag>

   (see `savvy/tags`_ for valid values for ``<tag>``)


.. |downloads_savvy| image:: https://img.shields.io/conda/dn/bioconda/savvy.svg?style=flat
   :target: https://anaconda.org/bioconda/savvy
   :alt:   (downloads)
.. |docker_savvy| image:: https://quay.io/repository/biocontainers/savvy/status
   :target: https://quay.io/repository/biocontainers/savvy
.. _`savvy/tags`: https://quay.io/repository/biocontainers/savvy?tab=tags


.. raw:: html

    <script>
        var package = "savvy";
        var versions = ["2.1.0","2.1.0","2.1.0","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savvy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savvy/README.html
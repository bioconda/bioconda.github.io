:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chopper'
.. highlight: bash

chopper
=======

.. conda:recipe:: chopper
   :replaces_section_title:
   :noindex:

   A rust command line for filtering and trimming long reads.

   :homepage: https://github.com/wdecoster/chopper
   :documentation: https://github.com/wdecoster/chopper#readme
   
   :license: MIT
   :recipe: /`chopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chopper/meta.yaml>`_

   


.. conda:package:: chopper

   |downloads_chopper| |docker_chopper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends clang: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install chopper

   and update with::

      mamba update chopper

  To create a new environment, run::

      mamba create --name myenvname chopper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chopper:<tag>

   (see `chopper/tags`_ for valid values for ``<tag>``)


.. |downloads_chopper| image:: https://img.shields.io/conda/dn/bioconda/chopper.svg?style=flat
   :target: https://anaconda.org/bioconda/chopper
   :alt:   (downloads)
.. |docker_chopper| image:: https://quay.io/repository/biocontainers/chopper/status
   :target: https://quay.io/repository/biocontainers/chopper
.. _`chopper/tags`: https://quay.io/repository/biocontainers/chopper?tab=tags


.. raw:: html

    <script>
        var package = "chopper";
        var versions = ["0.9.0","0.9.0","0.8.0","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chopper/README.html
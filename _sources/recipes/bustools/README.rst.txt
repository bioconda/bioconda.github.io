:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bustools'
.. highlight: bash

bustools
========

.. conda:recipe:: bustools
   :replaces_section_title:
   :noindex:

   bustools is a program for manipulating BUS files for single cell RNA\-Seq datasets.


   :homepage: https://github.com/BUStools/bustools
   :license: BSD / BSD-2-Clause "Simplified" License
   :recipe: /`bustools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools/meta.yaml>`_

   


.. conda:package:: bustools

   |downloads_bustools| |docker_bustools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.43.2-2</code>,  <code>0.43.2-1</code>,  <code>0.43.2-0</code>,  <code>0.43.1-0</code>,  <code>0.43.0-0</code>,  <code>0.42.0-2</code>,  <code>0.42.0-1</code>,  <code>0.42.0-0</code>,  <code>0.41.0-2</code>,  </span></summary>
      

      ``0.43.2-2``,  ``0.43.2-1``,  ``0.43.2-0``,  ``0.43.1-0``,  ``0.43.0-0``,  ``0.42.0-2``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.41.0-2``,  ``0.41.0-1``,  ``0.41.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.39.4-0``,  ``0.39.3-0``,  ``0.39.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install bustools

   and update with::

      mamba update bustools

  To create a new environment, run::

      mamba create --name myenvname bustools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bustools:<tag>

   (see `bustools/tags`_ for valid values for ``<tag>``)


.. |downloads_bustools| image:: https://img.shields.io/conda/dn/bioconda/bustools.svg?style=flat
   :target: https://anaconda.org/bioconda/bustools
   :alt:   (downloads)
.. |docker_bustools| image:: https://quay.io/repository/biocontainers/bustools/status
   :target: https://quay.io/repository/biocontainers/bustools
.. _`bustools/tags`: https://quay.io/repository/biocontainers/bustools?tab=tags


.. raw:: html

    <script>
        var package = "bustools";
        var versions = ["0.43.2","0.43.2","0.43.2","0.43.1","0.43.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bustools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bustools/README.html
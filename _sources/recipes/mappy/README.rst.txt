:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mappy'
.. highlight: bash

mappy
=====

.. conda:recipe:: mappy
   :replaces_section_title:
   :noindex:

   Minimap2 Python binding

   :homepage: https://github.com/lh3/minimap2
   :license: MIT
   :recipe: /`mappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mappy/meta.yaml>`_

   


.. conda:package:: mappy

   |downloads_mappy| |docker_mappy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26-1</code>,  <code>2.26-0</code>,  <code>2.24-4</code>,  <code>2.24-2</code>,  <code>2.24-1</code>,  <code>2.24-0</code>,  <code>2.23-0</code>,  <code>2.22-0</code>,  <code>2.21-0</code>,  </span></summary>
      

      ``2.26-1``,  ``2.26-0``,  ``2.24-4``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``,  ``2.23-0``,  ``2.22-0``,  ``2.21-0``,  ``2.17-3``,  ``2.17-2``,  ``2.17-1``,  ``2.17-0``,  ``2.16-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-1``,  ``2.9-1``,  ``2.8-1``,  ``2.8-0``,  ``2.7-1``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mappy

   and update with::

      mamba update mappy

  To create a new environment, run::

      mamba create --name myenvname mappy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mappy:<tag>

   (see `mappy/tags`_ for valid values for ``<tag>``)


.. |downloads_mappy| image:: https://img.shields.io/conda/dn/bioconda/mappy.svg?style=flat
   :target: https://anaconda.org/bioconda/mappy
   :alt:   (downloads)
.. |docker_mappy| image:: https://quay.io/repository/biocontainers/mappy/status
   :target: https://quay.io/repository/biocontainers/mappy
.. _`mappy/tags`: https://quay.io/repository/biocontainers/mappy?tab=tags


.. raw:: html

    <script>
        var package = "mappy";
        var versions = ["2.26","2.26","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mappy/README.html
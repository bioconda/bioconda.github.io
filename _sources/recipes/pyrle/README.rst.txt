:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrle'
.. highlight: bash

pyrle
=====

.. conda:recipe:: pyrle
   :replaces_section_title:
   :noindex:

   Genomic Rle\-objects for Python

   :homepage: https://github.com/endrebak/pyrle
   :license: MIT
   :recipe: /`pyrle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrle/meta.yaml>`_

   


.. conda:package:: pyrle

   |downloads_pyrle| |docker_pyrle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.38-3</code>,  <code>0.0.38-0</code>,  <code>0.0.36-3</code>,  <code>0.0.36-1</code>,  <code>0.0.36-0</code>,  <code>0.0.35-1</code>,  <code>0.0.35-0</code>,  <code>0.0.34-1</code>,  <code>0.0.34-0</code>,  </span></summary>
      

      ``0.0.38-3``,  ``0.0.38-0``,  ``0.0.36-3``,  ``0.0.36-1``,  ``0.0.36-0``,  ``0.0.35-1``,  ``0.0.35-0``,  ``0.0.34-1``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.32-1``,  ``0.0.32-0``,  ``0.0.31-1``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-1``,  ``0.0.24-0``,  ``0.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :depends tabulate: 
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

      mamba install pyrle

   and update with::

      mamba update pyrle

  To create a new environment, run::

      mamba create --name myenvname pyrle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrle:<tag>

   (see `pyrle/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrle| image:: https://img.shields.io/conda/dn/bioconda/pyrle.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrle
   :alt:   (downloads)
.. |docker_pyrle| image:: https://quay.io/repository/biocontainers/pyrle/status
   :target: https://quay.io/repository/biocontainers/pyrle
.. _`pyrle/tags`: https://quay.io/repository/biocontainers/pyrle?tab=tags


.. raw:: html

    <script>
        var package = "pyrle";
        var versions = ["0.0.38","0.0.38","0.0.36","0.0.36","0.0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrle/README.html
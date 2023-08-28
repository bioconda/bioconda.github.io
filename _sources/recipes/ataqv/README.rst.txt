:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ataqv'
.. highlight: bash

ataqv
=====

.. conda:recipe:: ataqv
   :replaces_section_title:
   :noindex:

   ataqv is a toolkit for measuring and comparing ATAC\-seq results. It was written to help understand how well ATAC\-seq assays have worked\, and to make it easier to spot differences that might be caused by library prep or sequencing.

   :homepage: https://parkerlab.github.io/ataqv/
   :documentation: https://github.com/ParkerLab/ataqv/blob/master/README.rst
   
   :developer docs: https://github.com/ParkerLab/ataqv
   :license: GPL3
   :recipe: /`ataqv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ataqv/meta.yaml>`_

   


.. conda:package:: ataqv

   |downloads_ataqv| |docker_ataqv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-4</code>,  <code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.1-2</code>,  </span></summary>
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends coreutils: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
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

      mamba install ataqv

   and update with::

      mamba update ataqv

  To create a new environment, run::

      mamba create --name myenvname ataqv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ataqv:<tag>

   (see `ataqv/tags`_ for valid values for ``<tag>``)


.. |downloads_ataqv| image:: https://img.shields.io/conda/dn/bioconda/ataqv.svg?style=flat
   :target: https://anaconda.org/bioconda/ataqv
   :alt:   (downloads)
.. |docker_ataqv| image:: https://quay.io/repository/biocontainers/ataqv/status
   :target: https://quay.io/repository/biocontainers/ataqv
.. _`ataqv/tags`: https://quay.io/repository/biocontainers/ataqv?tab=tags


.. raw:: html

    <script>
        var package = "ataqv";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ataqv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ataqv/README.html
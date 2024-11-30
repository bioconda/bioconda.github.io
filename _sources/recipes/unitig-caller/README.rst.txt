:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitig-caller'
.. highlight: bash

unitig-caller
=============

.. conda:recipe:: unitig-caller
   :replaces_section_title:
   :noindex:

   Determines presence\/absence of sequence elements in bacterial sequence data.

   :homepage: https://github.com/bacpop/unitig-caller
   :license: APACHE / Apache-2.0
   :recipe: /`unitig-caller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-caller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-caller/meta.yaml>`_

   


.. conda:package:: unitig-caller

   |downloads_unitig-caller| |docker_unitig-caller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-4</code>,  <code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.3.0-4``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bifrost: ``>=1.3.0``
   :depends bifrost: ``>=1.3.5,<1.4.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install unitig-caller

   and update with::

      mamba update unitig-caller

  To create a new environment, run::

      mamba create --name myenvname unitig-caller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unitig-caller:<tag>

   (see `unitig-caller/tags`_ for valid values for ``<tag>``)


.. |downloads_unitig-caller| image:: https://img.shields.io/conda/dn/bioconda/unitig-caller.svg?style=flat
   :target: https://anaconda.org/bioconda/unitig-caller
   :alt:   (downloads)
.. |docker_unitig-caller| image:: https://quay.io/repository/biocontainers/unitig-caller/status
   :target: https://quay.io/repository/biocontainers/unitig-caller
.. _`unitig-caller/tags`: https://quay.io/repository/biocontainers/unitig-caller?tab=tags


.. raw:: html

    <script>
        var package = "unitig-caller";
        var versions = ["1.3.0","1.3.0","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitig-caller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitig-caller/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ma'
.. highlight: bash

ma
==

.. conda:recipe:: ma
   :replaces_section_title:
   :noindex:

   MA \- The Modular Aligner

   :homepage: https://github.com/ITBE-Lab/MA
   :license: MIT / MIT
   :recipe: /`ma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ma/meta.yaml>`_

   


.. conda:package:: ma

   |downloads_ma| |docker_ma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.1.4-3</code>,  <code>1.1.4-2</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-1</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install ma

   and update with::

      mamba update ma

  To create a new environment, run::

      mamba create --name myenvname ma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ma:<tag>

   (see `ma/tags`_ for valid values for ``<tag>``)


.. |downloads_ma| image:: https://img.shields.io/conda/dn/bioconda/ma.svg?style=flat
   :target: https://anaconda.org/bioconda/ma
   :alt:   (downloads)
.. |docker_ma| image:: https://quay.io/repository/biocontainers/ma/status
   :target: https://quay.io/repository/biocontainers/ma
.. _`ma/tags`: https://quay.io/repository/biocontainers/ma?tab=tags


.. raw:: html

    <script>
        var package = "ma";
        var versions = ["2.0.2","2.0.1","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ma/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-consensuscore'
.. highlight: bash

python-consensuscore
====================

.. conda:recipe:: python-consensuscore
   :replaces_section_title:
   :noindex:

   PacBio Quiver Consensus library for RSII data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`python-consensuscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore/meta.yaml>`_

   


.. conda:package:: python-consensuscore

   |downloads_python-consensuscore| |docker_python-consensuscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-6</code>,  <code>1.1.1-5</code>,  <code>1.1.1-4</code>,  <code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install python-consensuscore

   and update with::

      mamba update python-consensuscore

  To create a new environment, run::

      mamba create --name myenvname python-consensuscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-consensuscore:<tag>

   (see `python-consensuscore/tags`_ for valid values for ``<tag>``)


.. |downloads_python-consensuscore| image:: https://img.shields.io/conda/dn/bioconda/python-consensuscore.svg?style=flat
   :target: https://anaconda.org/bioconda/python-consensuscore
   :alt:   (downloads)
.. |docker_python-consensuscore| image:: https://quay.io/repository/biocontainers/python-consensuscore/status
   :target: https://quay.io/repository/biocontainers/python-consensuscore
.. _`python-consensuscore/tags`: https://quay.io/repository/biocontainers/python-consensuscore?tab=tags


.. raw:: html

    <script>
        var package = "python-consensuscore";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-consensuscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-consensuscore/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-scripts'
.. highlight: bash

scanpy-scripts
==============

.. conda:recipe:: scanpy-scripts
   :replaces_section_title:
   :noindex:

   Scripts for using scanpy from the command line

   :homepage: https://github.com/ebi-gene-expression-group/scanpy-scripts
   :license: Apache / Apache-2.0
   :recipe: /`scanpy-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-scripts/meta.yaml>`_

   


.. conda:package:: scanpy-scripts

   |downloads_scanpy-scripts| |docker_scanpy-scripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.301-0</code>,  <code>1.9.0-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-1</code>,  </span></summary>
      

      ``1.9.301-0``,  ``1.9.0-0``,  ``1.1.6-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-3``,  ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-1``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5.post1-0``,  ``0.2.5-0``,  ``0.2.4.post4-3``,  ``0.2.4.post4-2``,  ``0.2.4.post4-1``,  ``0.2.4.post4-0``,  ``0.2.4.post3-0``,  ``0.2.4.post1-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.3-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bats: 
   :depends bbknn: ``>=1.5.0,<1.6.0``
   :depends black: 
   :depends click: ``<8``
   :depends fa2: 
   :depends flit-core: 
   :depends harmonypy: ``>=0.0.5``
   :depends igraph: 
   :depends leidenalg: 
   :depends loompy: 
   :depends louvain: 
   :depends mnnpy: ``>=0.1.9.5``
   :depends packaging: 
   :depends pytest: 
   :depends python: ``<3.10``
   :depends pytoml: 
   :depends scanpy: ``1.9.3.*``
   :depends scikit-learn: ``<1.3.0``
   :depends scipy: ``<1.9.0``
   :depends scrublet: 
   :depends setuptools_scm: 
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

      mamba install scanpy-scripts

   and update with::

      mamba update scanpy-scripts

  To create a new environment, run::

      mamba create --name myenvname scanpy-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scanpy-scripts:<tag>

   (see `scanpy-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_scanpy-scripts| image:: https://img.shields.io/conda/dn/bioconda/scanpy-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/scanpy-scripts
   :alt:   (downloads)
.. |docker_scanpy-scripts| image:: https://quay.io/repository/biocontainers/scanpy-scripts/status
   :target: https://quay.io/repository/biocontainers/scanpy-scripts
.. _`scanpy-scripts/tags`: https://quay.io/repository/biocontainers/scanpy-scripts?tab=tags


.. raw:: html

    <script>
        var package = "scanpy-scripts";
        var versions = ["1.9.301","1.9.0","1.1.6","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-scripts/README.html
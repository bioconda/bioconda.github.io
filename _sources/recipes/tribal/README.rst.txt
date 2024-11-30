:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tribal'
.. highlight: bash

tribal
======

.. conda:recipe:: tribal
   :replaces_section_title:
   :noindex:

   TRIBAL is a package to infer B cell lineage trees from single\-cell RNA sequencing data.

   :homepage: https://github.com/elkebir-group/TRIBAL
   :documentation: https://elkebir-group.github.io/TRIBAL
   
   :license: BSD-3-Clause
   :recipe: /`tribal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tribal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tribal/meta.yaml>`_

   


.. conda:package:: tribal

   |downloads_tribal| |docker_tribal|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.81``
   :depends ete3: ``>=3.1.2``
   :depends glpk: ``>=5.0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends mafft: ``7.526``
   :depends networkx: ``>=3.1``
   :depends numpy: ``>=1.26,<2.0``
   :depends pandas: 
   :depends pygraphviz: ``>=1.10``
   :depends pyomo: ``>=6.7``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tribal

   and update with::

      mamba update tribal

  To create a new environment, run::

      mamba create --name myenvname tribal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tribal:<tag>

   (see `tribal/tags`_ for valid values for ``<tag>``)


.. |downloads_tribal| image:: https://img.shields.io/conda/dn/bioconda/tribal.svg?style=flat
   :target: https://anaconda.org/bioconda/tribal
   :alt:   (downloads)
.. |docker_tribal| image:: https://quay.io/repository/biocontainers/tribal/status
   :target: https://quay.io/repository/biocontainers/tribal
.. _`tribal/tags`: https://quay.io/repository/biocontainers/tribal?tab=tags


.. raw:: html

    <script>
        var package = "tribal";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tribal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tribal/README.html
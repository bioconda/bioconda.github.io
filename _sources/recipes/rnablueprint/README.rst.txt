:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnablueprint'
.. highlight: bash

rnablueprint
============

.. conda:recipe:: rnablueprint
   :replaces_section_title:
   :noindex:

   The RNAblueprint library solves the problem of uniformly sampling RNA\/DNA sequences compatible to multiple structural constraints and sequence constraints.

   :homepage: https://github.com/ViennaRNA/RNAblueprint
   :license: GPL3
   :recipe: /`rnablueprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx263`

   


.. conda:package:: rnablueprint

   |downloads_rnablueprint| |docker_rnablueprint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install rnablueprint

   and update with::

      mamba update rnablueprint

  To create a new environment, run::

      mamba create --name myenvname rnablueprint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnablueprint:<tag>

   (see `rnablueprint/tags`_ for valid values for ``<tag>``)


.. |downloads_rnablueprint| image:: https://img.shields.io/conda/dn/bioconda/rnablueprint.svg?style=flat
   :target: https://anaconda.org/bioconda/rnablueprint
   :alt:   (downloads)
.. |docker_rnablueprint| image:: https://quay.io/repository/biocontainers/rnablueprint/status
   :target: https://quay.io/repository/biocontainers/rnablueprint
.. _`rnablueprint/tags`: https://quay.io/repository/biocontainers/rnablueprint?tab=tags


.. raw:: html

    <script>
        var package = "rnablueprint";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnablueprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnablueprint/README.html
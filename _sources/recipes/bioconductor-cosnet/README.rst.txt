:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosnet'
.. highlight: bash

bioconductor-cosnet
===================

.. conda:recipe:: bioconductor-cosnet
   :replaces_section_title:
   :noindex:

   Cost Sensitive Network for node label prediction on graphs with highly unbalanced labelings

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/COSNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cosnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet/meta.yaml>`_

   Package that implements the COSNet classification algorithm. The algorithm predicts node labels in partially labeled graphs where few positives are available for the class being predicted.


.. conda:package:: bioconductor-cosnet

   |downloads_bioconductor-cosnet| |docker_bioconductor-cosnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-cosnet

   and update with::

      mamba update bioconductor-cosnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosnet:<tag>

   (see `bioconductor-cosnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosnet
   :alt:   (downloads)
.. |docker_bioconductor-cosnet| image:: https://quay.io/repository/biocontainers/bioconductor-cosnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosnet
.. _`bioconductor-cosnet/tags`: https://quay.io/repository/biocontainers/bioconductor-cosnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosnet";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosnet/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eir'
.. highlight: bash

bioconductor-eir
================

.. conda:recipe:: bioconductor-eir
   :replaces_section_title:
   :noindex:

   Accelerated similarity searching of small molecules

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/eiR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eir/meta.yaml>`_

   The eiR package provides utilities for accelerated structure similarity searching of very large small molecule data sets using an embedding and indexing approach.


.. conda:package:: bioconductor-eir

   |downloads_bioconductor-eir| |docker_bioconductor-eir|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-chemminer: ``>=3.58.0,<3.59.0``
   :depends bioconductor-chemminer: ``>=3.58.0,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-digest: 
   :depends r-rcppannoy: ``>=0.0.9``
   :depends r-rcurl: 
   :depends r-runit: 
   :depends r-snow: 
   :depends r-snowfall: 
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

      mamba install bioconductor-eir

   and update with::

      mamba update bioconductor-eir

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eir:<tag>

   (see `bioconductor-eir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eir
   :alt:   (downloads)
.. |docker_bioconductor-eir| image:: https://quay.io/repository/biocontainers/bioconductor-eir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eir
.. _`bioconductor-eir/tags`: https://quay.io/repository/biocontainers/bioconductor-eir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eir";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eir/README.html
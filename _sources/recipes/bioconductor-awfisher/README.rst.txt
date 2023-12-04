:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-awfisher'
.. highlight: bash

bioconductor-awfisher
=====================

.. conda:recipe:: bioconductor-awfisher
   :replaces_section_title:
   :noindex:

   An R package for fast computing for adaptively weighted fisher\'s method

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AWFisher.html
   :license: GPL-3
   :recipe: /`bioconductor-awfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awfisher/meta.yaml>`_

   Implementation of the adaptively weighted fisher\'s method\, including fast p\-value computing\, variability index\, and meta\-pattern.


.. conda:package:: bioconductor-awfisher

   |downloads_bioconductor-awfisher| |docker_bioconductor-awfisher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-edger: ``>=4.0.2,<4.1.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-awfisher

   and update with::

      mamba update bioconductor-awfisher

  To create a new environment, run::

      mamba create --name myenvname bioconductor-awfisher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-awfisher:<tag>

   (see `bioconductor-awfisher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-awfisher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-awfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-awfisher
   :alt:   (downloads)
.. |docker_bioconductor-awfisher| image:: https://quay.io/repository/biocontainers/bioconductor-awfisher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-awfisher
.. _`bioconductor-awfisher/tags`: https://quay.io/repository/biocontainers/bioconductor-awfisher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-awfisher";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-awfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-awfisher/README.html
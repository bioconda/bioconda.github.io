:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpannot'
.. highlight: bash

bioconductor-hpannot
====================

.. conda:recipe:: bioconductor-hpannot
   :replaces_section_title:
   :noindex:

   Anotation package for Hipathia package

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hpAnnot.html
   :license: GPL-2
   :recipe: /`bioconductor-hpannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpannot/meta.yaml>`_

   Package containing example and annotation data for Hipathia package. Hipathia is a method for the computation of signal transduction along signaling pathways from transcriptomic data. The method is based on an iterative algorithm which is able to compute the signal intensity passing through the nodes of a network by taking into account the level of expression of each gene and the intensity of the signal arriving to it. It also provides a new approach to functional analysis allowing to compute the signal arriving to the functions annotated to each pathway. Hipathia depends on this package to be functional.


.. conda:package:: bioconductor-hpannot

   |downloads_bioconductor-hpannot| |docker_bioconductor-hpannot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-3</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
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

      mamba install bioconductor-hpannot

   and update with::

      mamba update bioconductor-hpannot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hpannot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpannot:<tag>

   (see `bioconductor-hpannot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpannot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpannot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpannot
   :alt:   (downloads)
.. |docker_bioconductor-hpannot| image:: https://quay.io/repository/biocontainers/bioconductor-hpannot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpannot
.. _`bioconductor-hpannot/tags`: https://quay.io/repository/biocontainers/bioconductor-hpannot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpannot";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpannot/README.html
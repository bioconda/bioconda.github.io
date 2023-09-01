:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diggit'
.. highlight: bash

bioconductor-diggit
===================

.. conda:recipe:: bioconductor-diggit
   :replaces_section_title:
   :noindex:

   Inference of Genetic Variants Driving Cellular Phenotypes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/diggit.html
   :license: file LICENSE
   :recipe: /`bioconductor-diggit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggit/meta.yaml>`_

   Inference of Genetic Variants Driving Cellullar Phenotypes by the DIGGIT algorithm


.. conda:package:: bioconductor-diggit

   |downloads_bioconductor-diggit| |docker_bioconductor-diggit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-viper: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ks: 
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

      mamba install bioconductor-diggit

   and update with::

      mamba update bioconductor-diggit

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diggit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diggit:<tag>

   (see `bioconductor-diggit/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diggit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diggit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diggit
   :alt:   (downloads)
.. |docker_bioconductor-diggit| image:: https://quay.io/repository/biocontainers/bioconductor-diggit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diggit
.. _`bioconductor-diggit/tags`: https://quay.io/repository/biocontainers/bioconductor-diggit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diggit";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diggit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diggit/README.html
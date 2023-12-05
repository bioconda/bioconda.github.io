:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onassisjavalibs'
.. highlight: bash

bioconductor-onassisjavalibs
============================

.. conda:recipe:: bioconductor-onassisjavalibs
   :replaces_section_title:
   :noindex:

   OnassisJavaLibs\, java libraries to run conceptmapper and semantic similarity

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/OnassisJavaLibs.html
   :license: GPL-2
   :recipe: /`bioconductor-onassisjavalibs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassisjavalibs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassisjavalibs/meta.yaml>`_

   A package that contains java libraries to call conceptmapper and compute semnatic similarity from R


.. conda:package:: bioconductor-onassisjavalibs

   |downloads_bioconductor-onassisjavalibs| |docker_bioconductor-onassisjavalibs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.19.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.19.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjava: 
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

      mamba install bioconductor-onassisjavalibs

   and update with::

      mamba update bioconductor-onassisjavalibs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-onassisjavalibs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onassisjavalibs:<tag>

   (see `bioconductor-onassisjavalibs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onassisjavalibs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onassisjavalibs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-onassisjavalibs
   :alt:   (downloads)
.. |docker_bioconductor-onassisjavalibs| image:: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs
.. _`bioconductor-onassisjavalibs/tags`: https://quay.io/repository/biocontainers/bioconductor-onassisjavalibs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-onassisjavalibs";
        var versions = ["1.24.0","1.22.0","1.19.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onassisjavalibs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onassisjavalibs/README.html
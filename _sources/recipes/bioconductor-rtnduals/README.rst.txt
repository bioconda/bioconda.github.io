:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtnduals'
.. highlight: bash

bioconductor-rtnduals
=====================

.. conda:recipe:: bioconductor-rtnduals
   :replaces_section_title:
   :noindex:

   Analysis of co\-regulation and inference of \'dual regulons\'

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RTNduals.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rtnduals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtnduals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtnduals/meta.yaml>`_

   RTNduals is a tool that searches for possible co\-regulatory loops between regulon pairs generated by the RTN package. It compares the shared targets in order to infer \'dual regulons\'\, a new concept that tests whether regulators can co\-operate or compete in influencing targets.


.. conda:package:: bioconductor-rtnduals

   |downloads_bioconductor-rtnduals| |docker_bioconductor-rtnduals|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rtn: ``>=2.30.0,<2.31.0``
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

      mamba install bioconductor-rtnduals

   and update with::

      mamba update bioconductor-rtnduals

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtnduals

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtnduals:<tag>

   (see `bioconductor-rtnduals/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtnduals| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtnduals.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtnduals
   :alt:   (downloads)
.. |docker_bioconductor-rtnduals| image:: https://quay.io/repository/biocontainers/bioconductor-rtnduals/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtnduals
.. _`bioconductor-rtnduals/tags`: https://quay.io/repository/biocontainers/bioconductor-rtnduals?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtnduals";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtnduals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtnduals/README.html
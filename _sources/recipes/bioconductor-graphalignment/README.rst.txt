:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphalignment'
.. highlight: bash

bioconductor-graphalignment
===========================

.. conda:recipe:: bioconductor-graphalignment
   :replaces_section_title:
   :noindex:

   GraphAlignment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GraphAlignment.html
   :license: file LICENSE
   :recipe: /`bioconductor-graphalignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphalignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphalignment/meta.yaml>`_

   Graph alignment is an extension package for the R programming environment which provides functions for finding an alignment between two networks based on link and node similarity scores. \(J. Berg and M. Laessig\, \"Cross\-species analysis of biological networks by Bayesian alignment\"\, PNAS 103 \(29\)\, 10967\-10972 \(2006\)\)


.. conda:package:: bioconductor-graphalignment

   |downloads_bioconductor-graphalignment| |docker_bioconductor-graphalignment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-2</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-2``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-graphalignment

   and update with::

      mamba update bioconductor-graphalignment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graphalignment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphalignment:<tag>

   (see `bioconductor-graphalignment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphalignment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphalignment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graphalignment
   :alt:   (downloads)
.. |docker_bioconductor-graphalignment| image:: https://quay.io/repository/biocontainers/bioconductor-graphalignment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphalignment
.. _`bioconductor-graphalignment/tags`: https://quay.io/repository/biocontainers/bioconductor-graphalignment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graphalignment";
        var versions = ["1.70.0","1.66.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphalignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphalignment/README.html
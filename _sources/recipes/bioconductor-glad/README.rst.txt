:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glad'
.. highlight: bash

bioconductor-glad
=================

.. conda:recipe:: bioconductor-glad
   :replaces_section_title:
   :noindex:

   Gain and Loss Analysis of DNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GLAD.html
   :license: GPL-2
   :recipe: /`bioconductor-glad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glad/meta.yaml>`_

   Analysis of array CGH data \: detection of breakpoints in genomic profiles and assignment of a status \(gain\, normal or loss\) to each chromosomal regions identified.


.. conda:package:: bioconductor-glad

   |downloads_bioconductor-glad| |docker_bioconductor-glad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.70.0-0</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  <code>2.62.0-2</code>,  <code>2.62.0-1</code>,  <code>2.62.0-0</code>,  <code>2.58.0-3</code>,  <code>2.58.0-2</code>,  <code>2.58.0-1</code>,  </span></summary>
      

      ``2.70.0-0``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.62.0-2``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.58.0-3``,  ``2.58.0-2``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-aws: 
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

      mamba install bioconductor-glad

   and update with::

      mamba update bioconductor-glad

  To create a new environment, run::

      mamba create --name myenvname bioconductor-glad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glad:<tag>

   (see `bioconductor-glad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glad
   :alt:   (downloads)
.. |docker_bioconductor-glad| image:: https://quay.io/repository/biocontainers/bioconductor-glad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glad
.. _`bioconductor-glad/tags`: https://quay.io/repository/biocontainers/bioconductor-glad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-glad";
        var versions = ["2.70.0","2.66.0","2.64.0","2.62.0","2.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glad/README.html
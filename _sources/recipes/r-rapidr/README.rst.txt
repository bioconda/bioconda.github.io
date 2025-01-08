:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rapidr'
.. highlight: bash

r-rapidr
========

.. conda:recipe:: r-rapidr
   :replaces_section_title:
   :noindex:

   Package to perform non\-invasive fetal testing for aneuploidies using sequencing count data from cell\-free DNA

   :homepage: https://CRAN.R-project.org/package=RAPIDR
   :license: GPL3 / GPL-3
   :recipe: /`r-rapidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr/meta.yaml>`_

   


.. conda:package:: r-rapidr

   |downloads_r-rapidr| |docker_r-rapidr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-10</code>,  <code>0.1.1-9</code>,  <code>0.1.1-8</code>,  <code>0.1.1-7</code>,  <code>0.1.1-6</code>,  <code>0.1.1-5</code>,  <code>0.1.1-4</code>,  <code>0.1.1-3</code>,  <code>0.1.1-2</code>,  </span></summary>
      

      ``0.1.1-10``,  ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-propcis: 
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

      mamba install r-rapidr

   and update with::

      mamba update r-rapidr

  To create a new environment, run::

      mamba create --name myenvname r-rapidr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rapidr:<tag>

   (see `r-rapidr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rapidr| image:: https://img.shields.io/conda/dn/bioconda/r-rapidr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rapidr
   :alt:   (downloads)
.. |docker_r-rapidr| image:: https://quay.io/repository/biocontainers/r-rapidr/status
   :target: https://quay.io/repository/biocontainers/r-rapidr
.. _`r-rapidr/tags`: https://quay.io/repository/biocontainers/r-rapidr?tab=tags


.. raw:: html

    <script>
        var package = "r-rapidr";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rapidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rapidr/README.html
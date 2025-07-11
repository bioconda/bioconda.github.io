:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rphast'
.. highlight: bash

r-rphast
========

.. conda:recipe:: r-rphast
   :replaces_section_title:
   :noindex:

   Provides an R interface to the \'PHAST\'\(\<http\:\/\/compgen.cshl.edu\/phast\/\>\) software \(Phylogenetic Analysis with Space\/Time Models\).  It can be used for many types of analysis in comparative and evolutionary genomics\, such as estimating models of evolution from sequence data\, scoring alignments for conservation or acceleration\, and predicting elements based on conservation or custom phylogenetic hidden Markov models.  It can also perform many basic operations on multiple sequence alignments and phylogenetic trees.

   :homepage: http://compgen.cshl.edu/rphast
   :license: BSD / BSD_3_clause + file LICENSE
   :recipe: /`r-rphast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphast/meta.yaml>`_

   


.. conda:package:: r-rphast

   |downloads_r-rphast| |docker_r-rphast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.11-0</code>,  <code>1.6.9-9</code>,  <code>1.6.9-8</code>,  <code>1.6.9-7</code>,  <code>1.6.9-6</code>,  <code>1.6.9-5</code>,  <code>1.6.9-4</code>,  <code>1.6.9-3</code>,  <code>1.6.9-2</code>,  </span></summary>
      

      ``1.6.11-0``,  ``1.6.9-9``,  ``1.6.9-8``,  ``1.6.9-7``,  ``1.6.9-6``,  ``1.6.9-5``,  ``1.6.9-4``,  ``1.6.9-3``,  ``1.6.9-2``,  ``1.6.9-1``,  ``1.6.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends blis: ``>=0.9.0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
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

      mamba install r-rphast

   and update with::

      mamba update r-rphast

  To create a new environment, run::

      mamba create --name myenvname r-rphast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-rphast:<tag>

   (see `r-rphast/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rphast| image:: https://img.shields.io/conda/dn/bioconda/r-rphast.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rphast
   :alt:   (downloads)
.. |docker_r-rphast| image:: https://quay.io/repository/biocontainers/r-rphast/status
   :target: https://quay.io/repository/biocontainers/r-rphast
.. _`r-rphast/tags`: https://quay.io/repository/biocontainers/r-rphast?tab=tags


.. raw:: html

    <script>
        var package = "r-rphast";
        var versions = ["1.6.11","1.6.9","1.6.9","1.6.9","1.6.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rphast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rphast/README.html
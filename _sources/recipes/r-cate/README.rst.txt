:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cate'
.. highlight: bash

r-cate
======

.. conda:recipe:: r-cate
   :replaces_section_title:
   :noindex:

   Provides several methods for factor analysis in high dimension \(both n\,p \>\> 1\) and methods to adjust for possible confounders in multiple hypothesis testing.

   :homepage: https://CRAN.R-project.org/package=cate
   :license: GPL2 / GPL-2
   :recipe: /`r-cate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cate/meta.yaml>`_

   


.. conda:package:: r-cate

   |downloads_r-cate| |docker_r-cate|

   :versions:
      
      

      ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0.4-0``

      

   
   :depends bioconductor-sva: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-esabcv: 
   :depends r-leapp: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-ruv: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-cate

   and update with::

      mamba update r-cate

  To create a new environment, run::

      mamba create --name myenvname r-cate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cate:<tag>

   (see `r-cate/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cate| image:: https://img.shields.io/conda/dn/bioconda/r-cate.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cate
   :alt:   (downloads)
.. |docker_r-cate| image:: https://quay.io/repository/biocontainers/r-cate/status
   :target: https://quay.io/repository/biocontainers/r-cate
.. _`r-cate/tags`: https://quay.io/repository/biocontainers/r-cate?tab=tags


.. raw:: html

    <script>
        var package = "r-cate";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cate/README.html
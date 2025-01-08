:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-immunedeconv'
.. highlight: bash

r-immunedeconv
==============

.. conda:recipe:: r-immunedeconv
   :replaces_section_title:
   :noindex:

   collection of methods for immune cell deconvolution of bulk RNA\-seq samples.

   :homepage: https://github.com/omnideconv/immunedeconv
   :license: BSD / BSD_3_clause
   :recipe: /`r-immunedeconv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv/meta.yaml>`_
   :links: doi: :doi:`10.1101/463828`

   


.. conda:package:: r-immunedeconv

   |downloads_r-immunedeconv| |docker_r-immunedeconv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-3</code>,  <code>2.1.2-2</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.3-2</code>,  </span></summary>
      

      ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocparallel: 
   :depends bioconductor-biomart: 
   :depends bioconductor-preprocesscore: 
   :depends bioconductor-quantiseqr: 
   :depends bioconductor-sva: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-comics: 
   :depends r-consensustme: 
   :depends r-data.tree: ``>=0.7``
   :depends r-dplyr: ``>=0.7``
   :depends r-e1071: ``>=1.6``
   :depends r-epic: ``>=1.1``
   :depends r-limsolve: ``>=1.5.5.1``
   :depends r-magrittr: ``>=1.5``
   :depends r-mcpcounter: 
   :depends r-mmcpcounter: 
   :depends r-readr: ``>=1.1``
   :depends r-readxl: ``>=1.0``
   :depends r-testit: ``>=0.7``
   :depends r-tibble: ``>=1.4.2``
   :depends r-xcell: ``>=1.2``
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

      mamba install r-immunedeconv

   and update with::

      mamba update r-immunedeconv

  To create a new environment, run::

      mamba create --name myenvname r-immunedeconv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-immunedeconv:<tag>

   (see `r-immunedeconv/tags`_ for valid values for ``<tag>``)


.. |downloads_r-immunedeconv| image:: https://img.shields.io/conda/dn/bioconda/r-immunedeconv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-immunedeconv
   :alt:   (downloads)
.. |docker_r-immunedeconv| image:: https://quay.io/repository/biocontainers/r-immunedeconv/status
   :target: https://quay.io/repository/biocontainers/r-immunedeconv
.. _`r-immunedeconv/tags`: https://quay.io/repository/biocontainers/r-immunedeconv?tab=tags


.. raw:: html

    <script>
        var package = "r-immunedeconv";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-immunedeconv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-immunedeconv/README.html
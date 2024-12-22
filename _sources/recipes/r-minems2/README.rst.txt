:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minems2'
.. highlight: bash

r-minems2
=========

.. conda:recipe:: r-minems2
   :replaces_section_title:
   :noindex:

   Mine MS\-MS spectra using a frequent usbgraph mining approach.

   :homepage: https://github.com/adelabriere/mineMS2
   :license: GPL-3.0
   :recipe: /`r-minems2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2/meta.yaml>`_

   


.. conda:package:: r-minems2

   |downloads_r-minems2| |docker_r-minems2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.3-8</code>,  <code>0.9.3-7</code>,  <code>0.9.3-6</code>,  <code>0.9.3-5</code>,  <code>0.9.3-4</code>,  <code>0.9.3-3</code>,  <code>0.9.3-2</code>,  <code>0.9.3-1</code>,  <code>0.9.3-0</code>,  </span></summary>
      

      ``0.9.3-8``,  ``0.9.3-7``,  ``0.9.3-6``,  ``0.9.3-5``,  ``0.9.3-4``,  ``0.9.3-3``,  ``0.9.3-2``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.12.13``
   :depends r-stringr: 
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

      mamba install r-minems2

   and update with::

      mamba update r-minems2

  To create a new environment, run::

      mamba create --name myenvname r-minems2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-minems2:<tag>

   (see `r-minems2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-minems2| image:: https://img.shields.io/conda/dn/bioconda/r-minems2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minems2
   :alt:   (downloads)
.. |docker_r-minems2| image:: https://quay.io/repository/biocontainers/r-minems2/status
   :target: https://quay.io/repository/biocontainers/r-minems2
.. _`r-minems2/tags`: https://quay.io/repository/biocontainers/r-minems2?tab=tags


.. raw:: html

    <script>
        var package = "r-minems2";
        var versions = ["0.9.3","0.9.3","0.9.3","0.9.3","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minems2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minems2/README.html
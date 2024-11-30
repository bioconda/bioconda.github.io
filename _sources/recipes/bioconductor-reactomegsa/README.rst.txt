:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegsa'
.. highlight: bash

bioconductor-reactomegsa
========================

.. conda:recipe:: bioconductor-reactomegsa
   :replaces_section_title:
   :noindex:

   Client for the Reactome Analysis Service for comparative multi\-omics gene set analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReactomeGSA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-reactomegsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegsa/meta.yaml>`_

   The ReactomeGSA packages uses Reactome\'s online analysis service to perform a multi\-omics gene set analysis. The main advantage of this package is\, that the retrieved results can be visualized using REACTOME\'s powerful webapplication. Since Reactome\'s analysis service also uses R to perfrom the actual gene set analysis you will get similar results when using the same packages \(such as limma and edgeR\) locally. Therefore\, if you only require a gene set analysis\, different packages are more suited.


.. conda:package:: bioconductor-reactomegsa

   |downloads_bioconductor-reactomegsa| |docker_bioconductor-reactomegsa|

   :versions:
      
      

      ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :depends r-tidyr: 
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

      mamba install bioconductor-reactomegsa

   and update with::

      mamba update bioconductor-reactomegsa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reactomegsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomegsa:<tag>

   (see `bioconductor-reactomegsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomegsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegsa
   :alt:   (downloads)
.. |docker_bioconductor-reactomegsa| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegsa
.. _`bioconductor-reactomegsa/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomegsa";
        var versions = ["1.16.1","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegsa/README.html
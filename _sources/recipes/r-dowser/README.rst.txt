:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dowser'
.. highlight: bash

r-dowser
========

.. conda:recipe:: r-dowser
   :replaces_section_title:
   :noindex:

   Provides a set of functions for inferring\, visualizing\, and analyzing B cell phylogenetic trees. Provides methods to 1\) reconstruct unmutated ancestral sequences\, 2\) build B cell phylogenetic trees using multiple methods\, 3\) visualize trees with metadata at the tips\, 4\) reconstruct intermediate sequences\, 5\) detect biased ancestor\-descendant relationships among metadata types Workflow examples available at documentation site \(see URL\). Citations\: Hoehn et al \(2020\) \<doi\:10.1101\/2020.05.30.124446\>\, Hoehn et al \(2021\) \<doi\:10.1101\/2021.01.06.425648\>.

   :homepage: https://dowser.readthedocs.io
   :license: AGPL / AGPL-3
   :recipe: /`r-dowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dowser/meta.yaml>`_

   


.. conda:package:: r-dowser

   |downloads_r-dowser| |docker_r-dowser|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-ggtree: 
   :depends r-alakazam: ``>=1.1.0``
   :depends r-ape: ``>=5.5``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: ``>=0.8.1``
   :depends r-ggplot2: ``>=3.2.0``
   :depends r-gridextra: 
   :depends r-markdown: 
   :depends r-phangorn: ``>=2.7.1``
   :depends r-phylotate: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-shazam: ``>=1.1.0``
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
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

      mamba install r-dowser

   and update with::

      mamba update r-dowser

  To create a new environment, run::

      mamba create --name myenvname r-dowser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dowser:<tag>

   (see `r-dowser/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dowser| image:: https://img.shields.io/conda/dn/bioconda/r-dowser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dowser
   :alt:   (downloads)
.. |docker_r-dowser| image:: https://quay.io/repository/biocontainers/r-dowser/status
   :target: https://quay.io/repository/biocontainers/r-dowser
.. _`r-dowser/tags`: https://quay.io/repository/biocontainers/r-dowser?tab=tags


.. raw:: html

    <script>
        var package = "r-dowser";
        var versions = ["1.2.0","1.1.0","1.1.0","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dowser/README.html
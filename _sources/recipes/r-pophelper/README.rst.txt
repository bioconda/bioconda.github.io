:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pophelper'
.. highlight: bash

r-pophelper
===========

.. conda:recipe:: r-pophelper
   :replaces_section_title:
   :noindex:

   A set of useful functions for processing admixture proportion files from the population structure analysis softwares STRUCTURE\, TESS\, ADMIXTURE\, BAPS\, fastSTRUCTURE etc. The package contains functions to read runs\, tabulate runs\, summarise runs\, plot runs\, estimate K using Evanno method\, export clumpp files\, export distruct files and generate barplots.

   :homepage: https://github.com/royfrancis/pophelper
   :license: GPL3 / GPL-3
   :recipe: /`r-pophelper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pophelper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pophelper/meta.yaml>`_

   


.. conda:package:: r-pophelper

   |downloads_r-pophelper| |docker_r-pophelper|

   :versions:
      
      

      ``2.3.1-4``,  ``2.3.1-3``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.7-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cairo: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-label.switching: 
   :depends r-tidyr: 
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

      mamba install r-pophelper

   and update with::

      mamba update r-pophelper

  To create a new environment, run::

      mamba create --name myenvname r-pophelper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pophelper:<tag>

   (see `r-pophelper/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pophelper| image:: https://img.shields.io/conda/dn/bioconda/r-pophelper.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pophelper
   :alt:   (downloads)
.. |docker_r-pophelper| image:: https://quay.io/repository/biocontainers/r-pophelper/status
   :target: https://quay.io/repository/biocontainers/r-pophelper
.. _`r-pophelper/tags`: https://quay.io/repository/biocontainers/r-pophelper?tab=tags


.. raw:: html

    <script>
        var package = "r-pophelper";
        var versions = ["2.3.1","2.3.1","2.3.1","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pophelper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pophelper/README.html
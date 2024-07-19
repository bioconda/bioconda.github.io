:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clermontyping'
.. highlight: bash

clermontyping
=============

.. conda:recipe:: clermontyping
   :replaces_section_title:
   :noindex:

    determine the Clermont  E coli phylotype

   :homepage: https://github.com/happykhan/ClermonTyping
   :license: GPL / GPL-3.0-only
   :recipe: /`clermontyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clermontyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clermontyping/meta.yaml>`_

   Determines the Clermont phylotype of a given E coli strain by performing in silico quadriplex PCR


.. conda:package:: clermontyping

   |downloads_clermontyping| |docker_clermontyping|

   :versions:
      
      

      ``24.02-1``,  ``24.02-0``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends mash: 
   :depends pandoc: 
   :depends python: 
   :depends r-dplyr: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-readr: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install clermontyping

   and update with::

      mamba update clermontyping

  To create a new environment, run::

      mamba create --name myenvname clermontyping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clermontyping:<tag>

   (see `clermontyping/tags`_ for valid values for ``<tag>``)


.. |downloads_clermontyping| image:: https://img.shields.io/conda/dn/bioconda/clermontyping.svg?style=flat
   :target: https://anaconda.org/bioconda/clermontyping
   :alt:   (downloads)
.. |docker_clermontyping| image:: https://quay.io/repository/biocontainers/clermontyping/status
   :target: https://quay.io/repository/biocontainers/clermontyping
.. _`clermontyping/tags`: https://quay.io/repository/biocontainers/clermontyping?tab=tags


.. raw:: html

    <script>
        var package = "clermontyping";
        var versions = ["24.02","24.02","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clermontyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clermontyping/README.html
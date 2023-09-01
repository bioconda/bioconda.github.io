:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-shaman'
.. highlight: bash

r-shaman
========

.. conda:recipe:: r-shaman
   :replaces_section_title:
   :noindex:

   The shaman package \- sampling HiC contact matrices for a\-parametric normalization

   :homepage: https://tanaylab.github.io/shaman/
   :license: GPL
   :recipe: /`r-shaman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shaman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shaman/meta.yaml>`_

   


.. conda:package:: r-shaman

   |downloads_r-shaman| |docker_r-shaman|

   :versions:
      
      

      ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-gviz: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-domc: 
   :depends r-misha: 
   :depends r-plyr: 
   :depends r-rann: 
   :depends r-reshape2: 
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

      mamba install r-shaman

   and update with::

      mamba update r-shaman

  To create a new environment, run::

      mamba create --name myenvname r-shaman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-shaman:<tag>

   (see `r-shaman/tags`_ for valid values for ``<tag>``)


.. |downloads_r-shaman| image:: https://img.shields.io/conda/dn/bioconda/r-shaman.svg?style=flat
   :target: https://anaconda.org/bioconda/r-shaman
   :alt:   (downloads)
.. |docker_r-shaman| image:: https://quay.io/repository/biocontainers/r-shaman/status
   :target: https://quay.io/repository/biocontainers/r-shaman
.. _`r-shaman/tags`: https://quay.io/repository/biocontainers/r-shaman?tab=tags


.. raw:: html

    <script>
        var package = "r-shaman";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shaman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shaman/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gifrop'
.. highlight: bash

gifrop
======

.. conda:recipe:: gifrop
   :replaces_section_title:
   :noindex:

   Identify\, classify\, and cluster genomic islands from roary pangenomes

   :homepage: https://github.com/jtrachsel/gifrop
   :license: GPL2
   :recipe: /`gifrop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gifrop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gifrop/meta.yaml>`_

   


.. conda:package:: gifrop

   |downloads_gifrop| |docker_gifrop|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.1-0``

      

   
   :depends abricate: ``>=1.0.0``
   :depends bioconductor-biostrings: 
   :depends bioconductor-bsgenome: 
   :depends parallel: 
   :depends prokka: ``>=1.14.6``
   :depends r-base: ``>=3.6``
   :depends r-digest: 
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-paralleldist: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends roary: ``>=3.13.0``
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

      mamba install gifrop

   and update with::

      mamba update gifrop

  To create a new environment, run::

      mamba create --name myenvname gifrop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gifrop:<tag>

   (see `gifrop/tags`_ for valid values for ``<tag>``)


.. |downloads_gifrop| image:: https://img.shields.io/conda/dn/bioconda/gifrop.svg?style=flat
   :target: https://anaconda.org/bioconda/gifrop
   :alt:   (downloads)
.. |docker_gifrop| image:: https://quay.io/repository/biocontainers/gifrop/status
   :target: https://quay.io/repository/biocontainers/gifrop
.. _`gifrop/tags`: https://quay.io/repository/biocontainers/gifrop?tab=tags


.. raw:: html

    <script>
        var package = "gifrop";
        var versions = ["0.0.9","0.0.6","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gifrop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gifrop/README.html
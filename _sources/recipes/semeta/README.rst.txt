:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semeta'
.. highlight: bash

semeta
======

.. conda:recipe:: semeta
   :replaces_section_title:
   :noindex:

   SeMeta is a new software for taxonomic assignment of metagenomic reads. It
   supports both single\-end and paired\-end reads. The software is implemented
   in C\+\+


   :homepage: http://it.hcmute.edu.vn/bioinfo/metapro/SeMeta.html
   :license: GPL-3
   :recipe: /`semeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semeta/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0872-x`

   


.. conda:package:: semeta

   |downloads_semeta| |docker_semeta|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends blast: 
   :depends libgcc: 
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

      mamba install semeta

   and update with::

      mamba update semeta

  To create a new environment, run::

      mamba create --name myenvname semeta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/semeta:<tag>

   (see `semeta/tags`_ for valid values for ``<tag>``)


.. |downloads_semeta| image:: https://img.shields.io/conda/dn/bioconda/semeta.svg?style=flat
   :target: https://anaconda.org/bioconda/semeta
   :alt:   (downloads)
.. |docker_semeta| image:: https://quay.io/repository/biocontainers/semeta/status
   :target: https://quay.io/repository/biocontainers/semeta
.. _`semeta/tags`: https://quay.io/repository/biocontainers/semeta?tab=tags


.. raw:: html

    <script>
        var package = "semeta";
        var versions = ["1.0"];
    </script>





Notes
-----
Databases are required. Please see the project homepage.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semeta/README.html
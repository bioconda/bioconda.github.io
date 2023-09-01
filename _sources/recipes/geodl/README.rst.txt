:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geodl'
.. highlight: bash

geodl
=====

.. conda:recipe:: geodl
   :replaces_section_title:
   :noindex:

   Download FASTQ files from GEO\-NCBI and ENA with ease

   :homepage: https://github.com/jduc/geoDL
   :license: GPL-3-0
   :recipe: /`geodl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geodl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geodl/meta.yaml>`_

   


.. conda:package:: geodl

   |downloads_geodl| |docker_geodl|

   :versions:
      
      

      ``1.0b5.1-1``,  ``1.0b5.1-0``,  ``1.0b1-0``

      

   
   :depends beautifulsoup4: 
   :depends colorama: 
   :depends lxml: 
   :depends python: 
   :depends six: 
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

      mamba install geodl

   and update with::

      mamba update geodl

  To create a new environment, run::

      mamba create --name myenvname geodl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geodl:<tag>

   (see `geodl/tags`_ for valid values for ``<tag>``)


.. |downloads_geodl| image:: https://img.shields.io/conda/dn/bioconda/geodl.svg?style=flat
   :target: https://anaconda.org/bioconda/geodl
   :alt:   (downloads)
.. |docker_geodl| image:: https://quay.io/repository/biocontainers/geodl/status
   :target: https://quay.io/repository/biocontainers/geodl
.. _`geodl/tags`: https://quay.io/repository/biocontainers/geodl?tab=tags


.. raw:: html

    <script>
        var package = "geodl";
        var versions = ["1.0b5.1","1.0b5.1","1.0b1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geodl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geodl/README.html
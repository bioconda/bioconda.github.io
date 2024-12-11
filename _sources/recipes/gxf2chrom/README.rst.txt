:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gxf2chrom'
.. highlight: bash

gxf2chrom
=========

.. conda:recipe:: gxf2chrom
   :replaces_section_title:
   :noindex:

   Everything in .chrom from GTF\/GFF

   :homepage: https://github.com/alejandrogzi/gxf2chrom
   :license: MIT / MIT
   :recipe: /`gxf2chrom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxf2chrom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gxf2chrom/meta.yaml>`_

   


.. conda:package:: gxf2chrom

   |downloads_gxf2chrom| |docker_gxf2chrom|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install gxf2chrom

   and update with::

      mamba update gxf2chrom

  To create a new environment, run::

      mamba create --name myenvname gxf2chrom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gxf2chrom:<tag>

   (see `gxf2chrom/tags`_ for valid values for ``<tag>``)


.. |downloads_gxf2chrom| image:: https://img.shields.io/conda/dn/bioconda/gxf2chrom.svg?style=flat
   :target: https://anaconda.org/bioconda/gxf2chrom
   :alt:   (downloads)
.. |docker_gxf2chrom| image:: https://quay.io/repository/biocontainers/gxf2chrom/status
   :target: https://quay.io/repository/biocontainers/gxf2chrom
.. _`gxf2chrom/tags`: https://quay.io/repository/biocontainers/gxf2chrom?tab=tags


.. raw:: html

    <script>
        var package = "gxf2chrom";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gxf2chrom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gxf2chrom/README.html
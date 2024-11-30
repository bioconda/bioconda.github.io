:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmetl'
.. highlight: bash

rmetl
=====

.. conda:recipe:: rmetl
   :replaces_section_title:
   :noindex:

   rMETL is a realignment\-based Mobile Element insertion detection Tool for Long read

   :homepage: https://github.com/tjiangHIT/rMETL
   :license: MIT / MIT
   :recipe: /`rmetl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmetl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmetl/meta.yaml>`_

   


.. conda:package:: rmetl

   |downloads_rmetl| |docker_rmetl|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: 
   :depends cigar: 
   :depends ngmlr: 
   :depends pysam: 
   :depends python: ``2.7.*``
   :depends samtools: 
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

      mamba install rmetl

   and update with::

      mamba update rmetl

  To create a new environment, run::

      mamba create --name myenvname rmetl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rmetl:<tag>

   (see `rmetl/tags`_ for valid values for ``<tag>``)


.. |downloads_rmetl| image:: https://img.shields.io/conda/dn/bioconda/rmetl.svg?style=flat
   :target: https://anaconda.org/bioconda/rmetl
   :alt:   (downloads)
.. |docker_rmetl| image:: https://quay.io/repository/biocontainers/rmetl/status
   :target: https://quay.io/repository/biocontainers/rmetl
.. _`rmetl/tags`: https://quay.io/repository/biocontainers/rmetl?tab=tags


.. raw:: html

    <script>
        var package = "rmetl";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmetl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmetl/README.html
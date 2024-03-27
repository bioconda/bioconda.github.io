:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magus-msa'
.. highlight: bash

magus-msa
=========

.. conda:recipe:: magus-msa
   :replaces_section_title:
   :noindex:

   Multiple Sequence Alignment using Graph Clustering

   :homepage: https://github.com/vlasmirnov/MAGUS
   :documentation: https://github.com/vlasmirnov/MAGUS/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`magus-msa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magus-msa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magus-msa/meta.yaml>`_
   :links: biotools: :biotools:`magus`, doi: :doi:`10.1093/bioinformatics/btaa992`

   


.. conda:package:: magus-msa

   |downloads_magus-msa| |docker_magus-msa|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.2a-0``

      

   
   :depends clustalo: 
   :depends dendropy: ``>=4.5.2``
   :depends fasttree: 
   :depends hmmer: 
   :depends mafft: 
   :depends mcl: 
   :depends python: ``>=3.6``
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

      mamba install magus-msa

   and update with::

      mamba update magus-msa

  To create a new environment, run::

      mamba create --name myenvname magus-msa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magus-msa:<tag>

   (see `magus-msa/tags`_ for valid values for ``<tag>``)


.. |downloads_magus-msa| image:: https://img.shields.io/conda/dn/bioconda/magus-msa.svg?style=flat
   :target: https://anaconda.org/bioconda/magus-msa
   :alt:   (downloads)
.. |docker_magus-msa| image:: https://quay.io/repository/biocontainers/magus-msa/status
   :target: https://quay.io/repository/biocontainers/magus-msa
.. _`magus-msa/tags`: https://quay.io/repository/biocontainers/magus-msa?tab=tags


.. raw:: html

    <script>
        var package = "magus-msa";
        var versions = ["0.2.0","0.1.3","0.1.2","0.1.2a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magus-msa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magus-msa/README.html
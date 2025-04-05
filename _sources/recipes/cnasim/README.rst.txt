:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnasim'
.. highlight: bash

cnasim
======

.. conda:recipe:: cnasim
   :replaces_section_title:
   :noindex:

   Improved simulation of single\-cell copy number profiles and DNA\-seq data from tumors

   :homepage: https://github.com/samsonweiner/CNAsim
   :license: GPL-3.0-only
   :recipe: /`cnasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnasim/meta.yaml>`_

   CNAsim is a software package for improved simulation of single\-cell copy number alteration \(CNA\) data from tumors. See our paper with the same name published in Bioinformatics.


.. conda:package:: cnasim

   |downloads_cnasim| |docker_cnasim|

   :versions:
      
      

      ``1.3.5-0``,  ``1.3.4-0``

      

   
   :depends biopython: ``>=1.8.1``
   :depends dwgsim: 
   :depends msprime: ``>=1.2.0``
   :depends numpy: ``>=1.24.3``
   :depends pyfaidx: ``>=0.7.2.1``
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends scipy: ``>=1.10.1``
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

      mamba install cnasim

   and update with::

      mamba update cnasim

  To create a new environment, run::

      mamba create --name myenvname cnasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnasim:<tag>

   (see `cnasim/tags`_ for valid values for ``<tag>``)


.. |downloads_cnasim| image:: https://img.shields.io/conda/dn/bioconda/cnasim.svg?style=flat
   :target: https://anaconda.org/bioconda/cnasim
   :alt:   (downloads)
.. |docker_cnasim| image:: https://quay.io/repository/biocontainers/cnasim/status
   :target: https://quay.io/repository/biocontainers/cnasim
.. _`cnasim/tags`: https://quay.io/repository/biocontainers/cnasim?tab=tags


.. raw:: html

    <script>
        var package = "cnasim";
        var versions = ["1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnasim/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'screadcounts'
.. highlight: bash

screadcounts
============

.. conda:recipe:: screadcounts
   :replaces_section_title:
   :noindex:

   SCReadCounts is a computational tool for a cell\-level assessment of the read counts bearing a particular nucleotide at genomic positions of interest from single cell RNA sequencing \(scRNA\-seq\) data. 

   :homepage: https://horvathlab.github.io/NGS/SCReadCounts
   :license: MIT
   :recipe: /`screadcounts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screadcounts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screadcounts/meta.yaml>`_

   


.. conda:package:: screadcounts

   |downloads_screadcounts| |docker_screadcounts|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends scipy: 
   :depends wxpython: 
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

      mamba install screadcounts

   and update with::

      mamba update screadcounts

  To create a new environment, run::

      mamba create --name myenvname screadcounts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/screadcounts:<tag>

   (see `screadcounts/tags`_ for valid values for ``<tag>``)


.. |downloads_screadcounts| image:: https://img.shields.io/conda/dn/bioconda/screadcounts.svg?style=flat
   :target: https://anaconda.org/bioconda/screadcounts
   :alt:   (downloads)
.. |docker_screadcounts| image:: https://quay.io/repository/biocontainers/screadcounts/status
   :target: https://quay.io/repository/biocontainers/screadcounts
.. _`screadcounts/tags`: https://quay.io/repository/biocontainers/screadcounts?tab=tags


.. raw:: html

    <script>
        var package = "screadcounts";
        var versions = ["1.3.2","1.3.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/screadcounts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/screadcounts/README.html
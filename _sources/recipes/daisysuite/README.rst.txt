:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'daisysuite'
.. highlight: bash

daisysuite
==========

.. conda:recipe:: daisysuite
   :replaces_section_title:
   :noindex:

   DaisySuite \- mapping\-based pipeline for horizontal gene transfer \(HGT\) detection using sequencing data

   :homepage: https://gitlab.com/eseiler/DaisySuite
   :license: GNU GPLv3
   :recipe: /`daisysuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisysuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daisysuite/meta.yaml>`_

   


.. conda:package:: daisysuite

   |downloads_daisysuite| |docker_daisysuite|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bedtools: ``2.22``
   :depends biopython: ``1.72``
   :depends bwa: ``0.7.12``
   :depends clever-toolkit: ``2.0rc3``
   :depends gustaf: ``1.0.8``
   :depends mason: ``2.0.7``
   :depends pandas: ``0.18.1``
   :depends pysam: ``0.9.1.4``
   :depends sak: ``0.4.6``
   :depends samtools: ``1.9``
   :depends scipy: ``1.1.0``
   :depends snakemake: ``3.9.0``
   :depends stellar: ``1.4.9``
   :depends yara: ``0.9.6``
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

      mamba install daisysuite

   and update with::

      mamba update daisysuite

  To create a new environment, run::

      mamba create --name myenvname daisysuite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/daisysuite:<tag>

   (see `daisysuite/tags`_ for valid values for ``<tag>``)


.. |downloads_daisysuite| image:: https://img.shields.io/conda/dn/bioconda/daisysuite.svg?style=flat
   :target: https://anaconda.org/bioconda/daisysuite
   :alt:   (downloads)
.. |docker_daisysuite| image:: https://quay.io/repository/biocontainers/daisysuite/status
   :target: https://quay.io/repository/biocontainers/daisysuite
.. _`daisysuite/tags`: https://quay.io/repository/biocontainers/daisysuite?tab=tags


.. raw:: html

    <script>
        var package = "daisysuite";
        var versions = ["1.3.0","1.3.0","1.3.0","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daisysuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daisysuite/README.html
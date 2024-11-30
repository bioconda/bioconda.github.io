:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellbender'
.. highlight: bash

cellbender
==========

.. conda:recipe:: cellbender
   :replaces_section_title:
   :noindex:

   A software package for eliminating technical artifacts from high\-throughput single\-cell RNA sequencing \(scRNA\-seq\) data

   :homepage: https://github.com/broadinstitute/CellBender
   :documentation: https://cellbender.readthedocs.io/en/latest
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cellbender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellbender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellbender/meta.yaml>`_
   :links: biotools: :biotools:`CellBender`, doi: :doi:`10.1038/s41592-023-01943-7`

   


.. conda:package:: cellbender

   |downloads_cellbender| |docker_cellbender|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.0-0``

      

   
   :depends anndata: ``>=0.7``
   :depends ipython: 
   :depends jupyter: 
   :depends jupyter_contrib_nbextensions: 
   :depends loompy: 
   :depends matplotlib-base: 
   :depends nbconvert: ``<7.0.0``
   :depends notebook: ``<7.0.0``
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends pyro-ppl: ``>=1.8.4``
   :depends pytables: 
   :depends python: ``3.7.*``
   :depends pytorch: 
   :depends scipy: 
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

      mamba install cellbender

   and update with::

      mamba update cellbender

  To create a new environment, run::

      mamba create --name myenvname cellbender

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellbender:<tag>

   (see `cellbender/tags`_ for valid values for ``<tag>``)


.. |downloads_cellbender| image:: https://img.shields.io/conda/dn/bioconda/cellbender.svg?style=flat
   :target: https://anaconda.org/bioconda/cellbender
   :alt:   (downloads)
.. |docker_cellbender| image:: https://quay.io/repository/biocontainers/cellbender/status
   :target: https://quay.io/repository/biocontainers/cellbender
.. _`cellbender/tags`: https://quay.io/repository/biocontainers/cellbender?tab=tags


.. raw:: html

    <script>
        var package = "cellbender";
        var versions = ["0.3.2","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellbender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellbender/README.html
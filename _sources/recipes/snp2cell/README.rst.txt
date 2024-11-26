:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp2cell'
.. highlight: bash

snp2cell
========

.. conda:recipe:: snp2cell
   :replaces_section_title:
   :noindex:

   A package for finding enriched regulatory networks from GWAS and single cell data.

   :homepage: https://github.com/Teichlab/snp2cell
   :license: BSD / BSD-3-Clause
   :recipe: /`snp2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp2cell/meta.yaml>`_

   A package for identifying gene regulation involved in specific traits and cell types. It combines three elements\: \(i\) GWAS summary statistics\, \(ii\) single cell data and \(iii\) a base gene regulatory network.


.. conda:package:: snp2cell

   |downloads_snp2cell| |docker_snp2cell|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends dill: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pybiomart: 
   :depends pyranges: 
   :depends python: ``>=3.8,<3.12``
   :depends rich: 
   :depends scanpy: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends tqdm: 
   :depends typer: 
   :depends typing_extensions: 
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

      mamba install snp2cell

   and update with::

      mamba update snp2cell

  To create a new environment, run::

      mamba create --name myenvname snp2cell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snp2cell:<tag>

   (see `snp2cell/tags`_ for valid values for ``<tag>``)


.. |downloads_snp2cell| image:: https://img.shields.io/conda/dn/bioconda/snp2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/snp2cell
   :alt:   (downloads)
.. |docker_snp2cell| image:: https://quay.io/repository/biocontainers/snp2cell/status
   :target: https://quay.io/repository/biocontainers/snp2cell
.. _`snp2cell/tags`: https://quay.io/repository/biocontainers/snp2cell?tab=tags


.. raw:: html

    <script>
        var package = "snp2cell";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp2cell/README.html
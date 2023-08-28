:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fba'
.. highlight: bash

fba
===

.. conda:recipe:: fba
   :replaces_section_title:
   :noindex:

   Tools for single\-cell feature barcoding analysis. Citation\: Duan\, et al \(2021\) \<doi\:10.1093\/bioinformatics\/btab375\>.

   :homepage: https://github.com/jlduan/fba
   :documentation: https://jlduan.github.io/fba
   
   :license: MIT
   :recipe: /`fba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fba/meta.yaml>`_

   \'fba is a flexible and streamlined toolbox for quality control\, quantification\, demultiplexing of various single\-cell feature barcoding assays. It can be applied to customized feature barcoding specifications\, including different CRISPR constructs or targeted enriched transcripts. fba allows users to customize a wide range of parameters for the quantification and demultiplexing process. fba also has a user\-friendly quality control module\, which is helpful in troubleshooting feature barcoding experiments.\'



.. conda:package:: fba

   |downloads_fba| |docker_fba|

   :versions:
      
      

      ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10.post1-0``

      

   
   :depends dnaio: ``>=0.10.0``
   :depends hdbscan: ``>=0.8.21``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.19.0``
   :depends pandas: ``>=1.0.0``
   :depends polyleven: ``>=0.5``
   :depends pyclustering: ``>=0.10.1``
   :depends pysam: ``>=0.14.0``
   :depends python: ``>=3.6``
   :depends regex: 
   :depends scikit-learn: ``>=0.23.0``
   :depends scipy: ``>=1.5.0``
   :depends seaborn: ``>=0.10.0``
   :depends statsmodels: ``>=0.11.1``
   :depends umap-learn: 
   :depends umi_tools: ``>=1.0.0``
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

      mamba install fba

   and update with::

      mamba update fba

  To create a new environment, run::

      mamba create --name myenvname fba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fba:<tag>

   (see `fba/tags`_ for valid values for ``<tag>``)


.. |downloads_fba| image:: https://img.shields.io/conda/dn/bioconda/fba.svg?style=flat
   :target: https://anaconda.org/bioconda/fba
   :alt:   (downloads)
.. |docker_fba| image:: https://quay.io/repository/biocontainers/fba/status
   :target: https://quay.io/repository/biocontainers/fba
.. _`fba/tags`: https://quay.io/repository/biocontainers/fba?tab=tags


.. raw:: html

    <script>
        var package = "fba";
        var versions = ["0.0.13","0.0.12","0.0.11","0.0.10.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fba/README.html
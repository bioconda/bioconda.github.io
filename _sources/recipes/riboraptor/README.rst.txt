:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboraptor'
.. highlight: bash

riboraptor
==========

.. conda:recipe:: riboraptor
   :replaces_section_title:
   :noindex:

   Python package to analyse ribosome profiling data

   :homepage: https://github.com/saketkc/riboraptor
   :documentation: https://saketkc.github.io/riboraptor
   
   :license: BSD / BSD License
   :recipe: /`riboraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboraptor/meta.yaml>`_

   


.. conda:package:: riboraptor

   |downloads_riboraptor| |docker_riboraptor|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends biopython: ``>=1.70``
   :depends click: ``>=6.0``
   :depends click-help-colors: ``>=0.3``
   :depends fastqc: 
   :depends htseq: ``>=0.9.1``
   :depends matplotlib: ``>=2.1.0``
   :depends numpy: ``>=1.11.0``
   :depends pandas: ``>=0.20.3``
   :depends pybedtools: ``>=0.7.10``
   :depends pybigwig: ``>=0.2.8``
   :depends pyfaidx: ``>=0.5.0``
   :depends pysam: ``>=0.11.2.2``
   :depends python: ``>=3``
   :depends scipy: ``>=0.19.1``
   :depends seaborn: ``>=0.8.1``
   :depends six: ``>=1.11.0``
   :depends snakemake: 
   :depends sra-tools: 
   :depends star: 
   :depends statsmodels: ``>=0.8.0``
   :depends trim-galore: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedsort: 
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

      mamba install riboraptor

   and update with::

      mamba update riboraptor

  To create a new environment, run::

      mamba create --name myenvname riboraptor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riboraptor:<tag>

   (see `riboraptor/tags`_ for valid values for ``<tag>``)


.. |downloads_riboraptor| image:: https://img.shields.io/conda/dn/bioconda/riboraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/riboraptor
   :alt:   (downloads)
.. |docker_riboraptor| image:: https://quay.io/repository/biocontainers/riboraptor/status
   :target: https://quay.io/repository/biocontainers/riboraptor
.. _`riboraptor/tags`: https://quay.io/repository/biocontainers/riboraptor?tab=tags


.. raw:: html

    <script>
        var package = "riboraptor";
        var versions = ["0.2.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboraptor/README.html
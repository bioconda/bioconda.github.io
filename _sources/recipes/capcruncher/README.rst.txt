:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capcruncher'
.. highlight: bash

capcruncher
===========

.. conda:recipe:: capcruncher
   :replaces_section_title:
   :noindex:

   An end\-to\-end solution for processing Capture\-C\, Tri\-C and Tiled\-C data

   :homepage: https://github.com/sims-lab/CapCruncher.git
   :documentation: https://sims-lab.github.io/CapCruncher/
   
   :developer docs: https://github.com/sims-lab/CapCruncher
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`capcruncher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capcruncher/meta.yaml>`_

   


.. conda:package:: capcruncher

   |downloads_capcruncher| |docker_capcruncher|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.1.1a1-0``,  ``0.1.0a2-0``

      

   
   :depends click: ``<=8.2.0``
   :depends cooler: 
   :depends duckdb: 
   :depends h5py: 
   :depends loguru: 
   :depends more-itertools: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: ``<=2.0.1``
   :depends plotly: ``>5.0.0,<=5.10.0``
   :depends pyarrow: ``>8.0.0,<=9.0.0``
   :depends pybedtools: 
   :depends pyranges: 
   :depends pysam: ``>0.15.0,<=0.19.1``
   :depends python: ``>=3.10``
   :depends python-xxhash: 
   :depends pyyaml: ``>=6.0``
   :depends quarto: 
   :depends ray: 
   :depends seaborn: 
   :depends sh: 
   :depends snakemake: ``<=7.30.2``
   :depends tqdm: 
   :depends trackhub: 
   :depends tracknado: 
   :depends ujson: 
   :depends xopen: 
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

      mamba install capcruncher

   and update with::

      mamba update capcruncher

  To create a new environment, run::

      mamba create --name myenvname capcruncher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/capcruncher:<tag>

   (see `capcruncher/tags`_ for valid values for ``<tag>``)


.. |downloads_capcruncher| image:: https://img.shields.io/conda/dn/bioconda/capcruncher.svg?style=flat
   :target: https://anaconda.org/bioconda/capcruncher
   :alt:   (downloads)
.. |docker_capcruncher| image:: https://quay.io/repository/biocontainers/capcruncher/status
   :target: https://quay.io/repository/biocontainers/capcruncher
.. _`capcruncher/tags`: https://quay.io/repository/biocontainers/capcruncher?tab=tags


.. raw:: html

    <script>
        var package = "capcruncher";
        var versions = ["0.3.5","0.3.4","0.2.3","0.2.2","0.1.1a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capcruncher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capcruncher/README.html
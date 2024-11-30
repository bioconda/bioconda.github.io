:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-smap'
.. highlight: bash

ngs-smap
========

.. conda:recipe:: ngs-smap
   :replaces_section_title:
   :noindex:

   SMAP is an analysis tool for stack\-based NGS read mapping

   :homepage: https://gitlab.com/truttink/smap
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ngs-smap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap/meta.yaml>`_

   


.. conda:package:: ngs-smap

   |downloads_ngs-smap| |docker_ngs-smap|

   :versions:
      
      

      ``5.0.1-0``,  ``4.6.5-0``,  ``4.6.4-0``,  ``4.6.2-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``

      

   
   :depends biopython: ``>=1.8``
   :depends colorlog: ``>=6.6.0,<6.7``
   :depends cutadapt: ``4.4``
   :depends gffpandas: ``1.2.*``
   :depends gffutils: 
   :depends matplotlib-base: ``>=3.5.1,<3.6``
   :depends natsort: ``8.2.0``
   :depends numexpr: 
   :depends openpyxl: ``>=3.0.9,<3.1.0``
   :depends pandas: ``>=2.0.3,<2.1.0``
   :depends plotly: ``>=5.5``
   :depends primer3-py: 
   :depends pybedtools: ``>=0.9.0,<0.10``
   :depends pysam: ``>=0.22.0,<0.23.0``
   :depends python: ``>=3.8.1,!=3.11``
   :depends scipy: 
   :depends seaborn: ``0.12.1``
   :depends tqdm: 
   :depends typing-extensions: ``>=4.0.0,<4.1.1``
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

      mamba install ngs-smap

   and update with::

      mamba update ngs-smap

  To create a new environment, run::

      mamba create --name myenvname ngs-smap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngs-smap:<tag>

   (see `ngs-smap/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-smap| image:: https://img.shields.io/conda/dn/bioconda/ngs-smap.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-smap
   :alt:   (downloads)
.. |docker_ngs-smap| image:: https://quay.io/repository/biocontainers/ngs-smap/status
   :target: https://quay.io/repository/biocontainers/ngs-smap
.. _`ngs-smap/tags`: https://quay.io/repository/biocontainers/ngs-smap?tab=tags


.. raw:: html

    <script>
        var package = "ngs-smap";
        var versions = ["5.0.1","4.6.5","4.6.4","4.6.2","4.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-smap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-smap/README.html
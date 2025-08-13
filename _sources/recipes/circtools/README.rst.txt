:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circtools'
.. highlight: bash

circtools
=========

.. conda:recipe:: circtools
   :replaces_section_title:
   :noindex:

   circtools \- a circular RNA toolbox.

   :homepage: https://github.com/jakobilab/circtools
   :documentation: https://docs.circ.tools/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`circtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty948`, biotools: :biotools:`circtools`

   


.. conda:package:: circtools

   |downloads_circtools| |docker_circtools|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends bioconductor-ballgown: 
   :depends bioconductor-biomart: 
   :depends bioconductor-edger: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggbio: 
   :depends biopython: ``>=1.71``
   :depends htseq: ``>=2.0.0``
   :depends numpy: ``>=1.14.5``
   :depends pandas: ``>=0.25.0``
   :depends pathos: ``>=0.3.0``
   :depends pybedtools: ``>=0.7.10``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.8``
   :depends pyyaml: ``>=6.0.2``
   :depends r-amap: 
   :depends r-aod: 
   :depends r-base: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-formattable: 
   :depends r-ggfortify: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-hmisc: 
   :depends r-kableextra: 
   :depends r-openxlsx: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends reportlab: ``>=3.3.0``
   :depends requests: ``>=2.32.3``
   :depends scipy: ``>=0.19.0``
   :depends star: 
   :depends statsmodels: 
   :depends stringtie: 
   :depends tqdm: ``>=4.67.1``
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

      mamba install circtools

   and update with::

      mamba update circtools

  To create a new environment, run::

      mamba create --name myenvname circtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circtools:<tag>

   (see `circtools/tags`_ for valid values for ``<tag>``)


.. |downloads_circtools| image:: https://img.shields.io/conda/dn/bioconda/circtools.svg?style=flat
   :target: https://anaconda.org/bioconda/circtools
   :alt:   (downloads)
.. |docker_circtools| image:: https://quay.io/repository/biocontainers/circtools/status
   :target: https://quay.io/repository/biocontainers/circtools
.. _`circtools/tags`: https://quay.io/repository/biocontainers/circtools?tab=tags


.. raw:: html

    <script>
        var package = "circtools";
        var versions = ["2.0.2","2.0.1","2.0","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circtools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esviritu'
.. highlight: bash

esviritu
========

.. conda:recipe:: esviritu
   :replaces_section_title:
   :noindex:

   EsViritu\: Read mapping pipeline for detection and measurement of virus pathogens from metagenomic or clinical data

   :homepage: https://github.com/cmmr/EsViritu
   :license: MIT
   :recipe: /`esviritu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2023.05.03.23289441`

   


.. conda:package:: esviritu

   |downloads_esviritu| |docker_esviritu|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``

      

   
   :depends bedtools: ``2.30.0.*``
   :depends bioawk: ``1.0.*``
   :depends biopython: 
   :depends blast: ``>=2.13.0``
   :depends bwa-mem2: ``2.2.1.*``
   :depends coverm: ``0.6.1.*``
   :depends dashing: ``1.0.*``
   :depends fastani: ``>=1.3``
   :depends fastp: ``>=0.23.2``
   :depends minimap2: ``>=2.21``
   :depends numpy: 
   :depends python: ``>=3.8``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-htmltools: 
   :depends r-knitr: 
   :depends r-lubridate: 
   :depends r-rcolorbrewer: 
   :depends r-reactable: 
   :depends r-reactablefmtr: 
   :depends r-readxl: 
   :depends r-remotes: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-viridis: 
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :depends seqfu: ``>=1.17.1``
   :depends seqkit: ``2.4.0.*``
   :depends tqdm: 
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

      mamba install esviritu

   and update with::

      mamba update esviritu

  To create a new environment, run::

      mamba create --name myenvname esviritu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esviritu:<tag>

   (see `esviritu/tags`_ for valid values for ``<tag>``)


.. |downloads_esviritu| image:: https://img.shields.io/conda/dn/bioconda/esviritu.svg?style=flat
   :target: https://anaconda.org/bioconda/esviritu
   :alt:   (downloads)
.. |docker_esviritu| image:: https://quay.io/repository/biocontainers/esviritu/status
   :target: https://quay.io/repository/biocontainers/esviritu
.. _`esviritu/tags`: https://quay.io/repository/biocontainers/esviritu?tab=tags


.. raw:: html

    <script>
        var package = "esviritu";
        var versions = ["0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esviritu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esviritu/README.html
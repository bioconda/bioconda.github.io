:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esviritu'
.. highlight: bash

esviritu
========

.. conda:recipe:: esviritu
   :replaces_section_title:
   :noindex:

   Read mapping pipeline for detection and measurement of human and animal virus pathogens from short read metagenomic environmental or clinical samples.

   :homepage: https://github.com/cmmr/EsViritu
   :license: MIT
   :recipe: /`esviritu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esviritu/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-023-42064-1`

   


.. conda:package:: esviritu

   |downloads_esviritu| |docker_esviritu|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.2.3-0``,  ``0.2.2-0``

      

   
   :depends fastp: ``>=0.23.2``
   :depends minimap2: ``>=2.21``
   :depends numpy: 
   :depends polars: 
   :depends pysam: 
   :depends python: ``>=3.11``
   :depends pyyaml: 
   :depends r-base: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-reactable: 
   :depends r-reactablefmtr: 
   :depends r-remotes: 
   :depends r-scales: 
   :depends samtools: ``>=1.15``
   :depends seqkit: 
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
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.0.3"];
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
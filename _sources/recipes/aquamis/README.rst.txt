:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquamis'
.. highlight: bash

aquamis
=======

.. conda:recipe:: aquamis
   :replaces_section_title:
   :noindex:

   AQUAMIS is a snakemake pipeline for routine assembly and quality assessment of microbial isolate sequencing experiments.

   :homepage: https://gitlab.com/bfr_bioinformatics/AQUAMIS
   :license: BSD-3
   :recipe: /`aquamis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis/meta.yaml>`_

   


.. conda:package:: aquamis

   |downloads_aquamis| |docker_aquamis|

   :versions:
      
      

      ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends bracken: ``>=2.6.0``
   :depends cerberus: ``>=1.3.2``
   :depends confindr: ``>=0.7.4``
   :depends fastp: ``>=0.20.1``
   :depends genson: ``>=1.2.2``
   :depends jsonschema: ``>=3.2``
   :depends kmc: ``3.1.0.*``
   :depends kraken2: ``>=2.1.1``
   :depends mash: ``>=2.3``
   :depends mlst: ``>=2.19.0``
   :depends numpy: ``>=1.19``
   :depends pandas: ``>=1.2.3``
   :depends pandoc: ``2.11.*``
   :depends python: ``>=3.7``
   :depends pyyaml: ``>=5.4.1``
   :depends quast: ``>=5.0.2``
   :depends r-base: ``3.6.3.*``
   :depends r-dt: ``>=0.16``
   :depends r-knitr: ``>=1.31``
   :depends r-rmarkdown: ``<=2.7``
   :depends r-rrapply: ``1.2.2.*``
   :depends r-tidyverse: ``1.3.0.*``
   :depends r-urltools: ``1.7.3.*``
   :depends shovill: ``>=1.1.0``
   :depends snakemake-minimal: ``>=6.0.0``
   :depends taxonkit: ``>=0.6.2``
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

      mamba install aquamis

   and update with::

      mamba update aquamis

  To create a new environment, run::

      mamba create --name myenvname aquamis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aquamis:<tag>

   (see `aquamis/tags`_ for valid values for ``<tag>``)


.. |downloads_aquamis| image:: https://img.shields.io/conda/dn/bioconda/aquamis.svg?style=flat
   :target: https://anaconda.org/bioconda/aquamis
   :alt:   (downloads)
.. |docker_aquamis| image:: https://quay.io/repository/biocontainers/aquamis/status
   :target: https://quay.io/repository/biocontainers/aquamis
.. _`aquamis/tags`: https://quay.io/repository/biocontainers/aquamis?tab=tags


.. raw:: html

    <script>
        var package = "aquamis";
        var versions = ["1.3.7","1.3.6","1.3.5","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquamis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquamis/README.html
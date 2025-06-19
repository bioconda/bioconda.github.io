:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hymet2'
.. highlight: bash

hymet2
======

.. conda:recipe:: hymet2
   :replaces_section_title:
   :noindex:

   HYMET \(Hybrid Metagenomic Tool\) for taxonomic identification of metagenomic sequences.

   :homepage: https://github.com/inesbmartins02/HYMET2
   :license: MIT / MIT
   :recipe: /`hymet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet2/meta.yaml>`_

   HYMET is a taxonomic identification tool designed for metagenomic sequence analysis. 
   It uses a combination of tools including Mash\, Mashmap\, Minimap2\, and custom classification 
   algorithms to identify the taxonomic origin of metagenomic sequences with high accuracy.



.. conda:package:: hymet2

   |downloads_hymet2| |docker_hymet2|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends csvkit: 
   :depends mash: 
   :depends mashmap: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends perl: 
   :depends python: ``>=3.8``
   :depends tqdm: 
   :depends wget: 
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

      mamba install hymet2

   and update with::

      mamba update hymet2

  To create a new environment, run::

      mamba create --name myenvname hymet2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hymet2:<tag>

   (see `hymet2/tags`_ for valid values for ``<tag>``)


.. |downloads_hymet2| image:: https://img.shields.io/conda/dn/bioconda/hymet2.svg?style=flat
   :target: https://anaconda.org/bioconda/hymet2
   :alt:   (downloads)
.. |docker_hymet2| image:: https://quay.io/repository/biocontainers/hymet2/status
   :target: https://quay.io/repository/biocontainers/hymet2
.. _`hymet2/tags`: https://quay.io/repository/biocontainers/hymet2?tab=tags


.. raw:: html

    <script>
        var package = "hymet2";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hymet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hymet2/README.html
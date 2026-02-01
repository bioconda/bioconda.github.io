:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaamrplus'
.. highlight: bash

metaamrplus
===========

.. conda:recipe:: metaamrplus
   :replaces_section_title:
   :noindex:

   MetaAMRplus\: unified detection of antimicrobial and metal resistance genes with colocalisation analysis

   :homepage: https://github.com/migshaw03/MetaAMRplus
   :license: MIT
   :recipe: /`metaamrplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaamrplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaamrplus/meta.yaml>`_

   MetaAMRplus is a command\-line platform for the simultaneous identification
   of antimicrobial resistance genes\, metal and biocide resistance genes\,
   and their genomic colocalisation in bacterial genomes and plasmids.
   The tool integrates AMRFinder and BacMet databases and is designed for
   reproducible large\-scale genomic analyses.



.. conda:package:: metaamrplus

   |downloads_metaamrplus| |docker_metaamrplus|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends awk: 
   :depends blast: 
   :depends ncbi-amrfinderplus: 
   :depends pandas: 
   :depends python: ``>=3.8``
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

      mamba install metaamrplus

   and update with::

      mamba update metaamrplus

  To create a new environment, run::

      mamba create --name myenvname metaamrplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaamrplus:<tag>

   (see `metaamrplus/tags`_ for valid values for ``<tag>``)


.. |downloads_metaamrplus| image:: https://img.shields.io/conda/dn/bioconda/metaamrplus.svg?style=flat
   :target: https://anaconda.org/bioconda/metaamrplus
   :alt:   (downloads)
.. |docker_metaamrplus| image:: https://quay.io/repository/biocontainers/metaamrplus/status
   :target: https://quay.io/repository/biocontainers/metaamrplus
.. _`metaamrplus/tags`: https://quay.io/repository/biocontainers/metaamrplus?tab=tags


.. raw:: html

    <script>
        var package = "metaamrplus";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaamrplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaamrplus/README.html
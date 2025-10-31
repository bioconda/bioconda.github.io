:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hymet'
.. highlight: bash

hymet
=====

.. conda:recipe:: hymet
   :replaces_section_title:
   :noindex:

   HYMET provides hybrid Mash\+minimap2 metagenomic classification with benchmark and case\-study tooling.

   :homepage: https://github.com/ieeta-pt/HYMET
   :license: MIT / MIT
   :recipe: /`hymet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet/meta.yaml>`_
   :links: biotools: :biotools:`hymet`

   HYMET couples Mash candidate filtering\, minimap2 alignment\, and a weighted LCA resolver to classify contigs
   and reads. The project bundles the new Python CLI \(\`bin\/hymet\`\)\, the legacy Perl pipeline\, CAMI benchmark
   harnesses\, and case\-study analysis scripts so users can reproduce the published experiments directly.



.. conda:package:: hymet

   |downloads_hymet| |docker_hymet|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends csvkit: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends perl: 
   :depends python: ``>=3.9``
   :depends seaborn: 
   :depends taxonkit: 
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

      mamba install hymet

   and update with::

      mamba update hymet

  To create a new environment, run::

      mamba create --name myenvname hymet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hymet:<tag>

   (see `hymet/tags`_ for valid values for ``<tag>``)


.. |downloads_hymet| image:: https://img.shields.io/conda/dn/bioconda/hymet.svg?style=flat
   :target: https://anaconda.org/bioconda/hymet
   :alt:   (downloads)
.. |docker_hymet| image:: https://quay.io/repository/biocontainers/hymet/status
   :target: https://quay.io/repository/biocontainers/hymet
.. _`hymet/tags`: https://quay.io/repository/biocontainers/hymet?tab=tags


.. raw:: html

    <script>
        var package = "hymet";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hymet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hymet/README.html
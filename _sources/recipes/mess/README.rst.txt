:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mess'
.. highlight: bash

mess
====

.. conda:recipe:: mess
   :replaces_section_title:
   :noindex:

   Snakemake pipeline for simulating shotgun metagenomic samples

   :homepage: https://github.com/metagenlab/MeSS
   :documentation: https://metagenlab.github.io/MeSS
   
   :license: MIT / MIT
   :recipe: /`mess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mess/meta.yaml>`_

   


.. conda:package:: mess

   |downloads_mess| |docker_mess|

   :versions:
      
      

      ``0.8.0-0``,  ``0.2.2-0``,  ``v0.2.1-0``

      

   
   :depends attrmap: ``>=0.0.7``
   :depends biopython: ``>=1.83``
   :depends pandas: ``>=2.2.1``
   :depends pulp: ``<2.8``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=6.0.1``
   :depends rich-click: ``>=1.7.4``
   :depends snakemake-minimal: ``>=7.32.4``
   :depends snaketool-utils: ``>=0.0.5``
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

      mamba install mess

   and update with::

      mamba update mess

  To create a new environment, run::

      mamba create --name myenvname mess

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mess:<tag>

   (see `mess/tags`_ for valid values for ``<tag>``)


.. |downloads_mess| image:: https://img.shields.io/conda/dn/bioconda/mess.svg?style=flat
   :target: https://anaconda.org/bioconda/mess
   :alt:   (downloads)
.. |docker_mess| image:: https://quay.io/repository/biocontainers/mess/status
   :target: https://quay.io/repository/biocontainers/mess
.. _`mess/tags`: https://quay.io/repository/biocontainers/mess?tab=tags


.. raw:: html

    <script>
        var package = "mess";
        var versions = ["0.8.0","0.2.2","v0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mess/README.html
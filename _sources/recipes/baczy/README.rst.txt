:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baczy'
.. highlight: bash

baczy
=====

.. conda:recipe:: baczy
   :replaces_section_title:
   :noindex:

   Bacterial toolkit

   :homepage: https://github.com/npbhavya/baczy/
   :documentation: https://github.com/npbhavya/baczy
   
   :developer docs: https://github.com/npbhavya/baczy
   :license: MIT / MIT
   :recipe: /`baczy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baczy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baczy/meta.yaml>`_

   Bacterial genome analysis workflow that identifies antibiotic resistance\, defense mechanisms\, virulence factors\, prophages\, and capsule\-related genes.


.. conda:package:: baczy

   |downloads_baczy| |docker_baczy|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends attrmap: ``>=0.0.7``
   :depends biopython: ``>=1.8.1``
   :depends click: ``>=8.1.3``
   :depends jinja2: ``>=3.0.2``
   :depends metasnek: ``>=0.0.4``
   :depends pandas: 
   :depends python: ``<3.12``
   :depends pyyaml: ``>=6.0``
   :depends snakemake-minimal: ``>=7.14.0``
   :depends snaketool-utils: ``>=0.0.4``
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

      mamba install baczy

   and update with::

      mamba update baczy

  To create a new environment, run::

      mamba create --name myenvname baczy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/baczy:<tag>

   (see `baczy/tags`_ for valid values for ``<tag>``)


.. |downloads_baczy| image:: https://img.shields.io/conda/dn/bioconda/baczy.svg?style=flat
   :target: https://anaconda.org/bioconda/baczy
   :alt:   (downloads)
.. |docker_baczy| image:: https://quay.io/repository/biocontainers/baczy/status
   :target: https://quay.io/repository/biocontainers/baczy
.. _`baczy/tags`: https://quay.io/repository/biocontainers/baczy?tab=tags


.. raw:: html

    <script>
        var package = "baczy";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baczy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baczy/README.html
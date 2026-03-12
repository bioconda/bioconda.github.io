:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagenomescope'
.. highlight: bash

metagenomescope
===============

.. conda:recipe:: metagenomescope
   :replaces_section_title:
   :noindex:

   Visualization tool for \(meta\)genome assembly graphs

   :homepage: https://github.com/marbl/MetagenomeScope
   :license: GPL3 / GPL-3.0-only
   :recipe: /`metagenomescope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenomescope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenomescope/meta.yaml>`_

   


.. conda:package:: metagenomescope

   |downloads_metagenomescope| |docker_metagenomescope|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends click: 
   :depends dash: 
   :depends dash-ag-grid: ``>=33.3.3``
   :depends dash-bootstrap-components: 
   :depends gfapy: 
   :depends graphviz: 
   :depends networkx: 
   :depends pandas: 
   :depends plotly: 
   :depends pyfastg: ``>=0.2.0``
   :depends pygraphviz: 
   :depends python: 
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

      mamba install metagenomescope

   and update with::

      mamba update metagenomescope

  To create a new environment, run::

      mamba create --name myenvname metagenomescope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metagenomescope:<tag>

   (see `metagenomescope/tags`_ for valid values for ``<tag>``)


.. |downloads_metagenomescope| image:: https://img.shields.io/conda/dn/bioconda/metagenomescope.svg?style=flat
   :target: https://anaconda.org/bioconda/metagenomescope
   :alt:   (downloads)
.. |docker_metagenomescope| image:: https://quay.io/repository/biocontainers/metagenomescope/status
   :target: https://quay.io/repository/biocontainers/metagenomescope
.. _`metagenomescope/tags`: https://quay.io/repository/biocontainers/metagenomescope?tab=tags


.. raw:: html

    <script>
        var package = "metagenomescope";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagenomescope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagenomescope/README.html
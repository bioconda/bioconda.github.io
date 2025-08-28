:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassiopeia'
.. highlight: bash

cassiopeia
==========

.. conda:recipe:: cassiopeia
   :replaces_section_title:
   :noindex:

   An end\-to\-end pipeline for single\-cell lineage tracing experiments.

   :homepage: https://github.com/YosefLab/Cassiopeia
   :license: MIT / MIT
   :recipe: /`cassiopeia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopeia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopeia/meta.yaml>`_

   


.. conda:package:: cassiopeia

   |downloads_cassiopeia| |docker_cassiopeia|

   :versions:
      
      

      ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends biopython: ``>=1.71``
   :depends bokeh: ``>=0.12.15``
   :depends ccphylo: 
   :depends ete3: ``>=3.1.1``
   :depends hits: 
   :depends itolapi: 
   :depends libgcc: ``>=13``
   :depends matplotlib-base: ``>=2.2.2``
   :depends nbconvert: ``>=5.4.0``
   :depends nbformat: ``>=4.4.0``
   :depends networkx: ``>=2.5``
   :depends ngs-tools: ``>=1.5.3``
   :depends numba: ``>=0.51.0``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: ``>=1.1.4``
   :depends pysam: ``>=0.14.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-levenshtein: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: ``>=3.12``
   :depends scipy: ``>=1.2.0``
   :depends tqdm: ``>=4``
   :depends typing-extensions: ``>=3.7.4``
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

      mamba install cassiopeia

   and update with::

      mamba update cassiopeia

  To create a new environment, run::

      mamba create --name myenvname cassiopeia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cassiopeia:<tag>

   (see `cassiopeia/tags`_ for valid values for ``<tag>``)


.. |downloads_cassiopeia| image:: https://img.shields.io/conda/dn/bioconda/cassiopeia.svg?style=flat
   :target: https://anaconda.org/bioconda/cassiopeia
   :alt:   (downloads)
.. |docker_cassiopeia| image:: https://quay.io/repository/biocontainers/cassiopeia/status
   :target: https://quay.io/repository/biocontainers/cassiopeia
.. _`cassiopeia/tags`: https://quay.io/repository/biocontainers/cassiopeia?tab=tags


.. raw:: html

    <script>
        var package = "cassiopeia";
        var versions = ["2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopeia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopeia/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netmd'
.. highlight: bash

netmd
=====

.. conda:recipe:: netmd
   :replaces_section_title:
   :noindex:

   NetMD is a computational method for identifying consensus behavior across multiple molecular dynamics simulations.

   :homepage: https://github.com/mazzalab/NetMD
   :license: MIT / MIT
   :recipe: /`netmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netmd/meta.yaml>`_

   Using Graph\-based Embeddings and Dynamic Time Warping\, \*NetMD\* aligns trajectories that may be temporally out of sync and 
   pinpoints the replicas that most faithfully represent the overall ensemble behavior. This enables consistent comparisons across simulations 
   and supports reliable characterization of system variants\, making it easier to detect shared patterns and reduce the influence of outliers 
   or simulation artifacts.



.. conda:package:: netmd

   |downloads_netmd| |docker_netmd|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends colorama: 
   :depends decorator: ``5.1.*``
   :depends gensim: ``>=4.0.0``
   :depends h5py: 
   :depends hdf5: 
   :depends ipykernel: 
   :depends matplotlib-base: 
   :depends nbformat: ``>=4.2.0``
   :depends networkx: ``>=3.3``
   :depends numpy: ``>=1.22``
   :depends pandas: ``>=1.2.0``
   :depends plotly: 
   :depends pygsp: 
   :depends python: ``>=3.10,<=3.12.8``
   :depends python-levenshtein: 
   :depends python-louvain: 
   :depends pyyaml: 
   :depends ruptures: 
   :depends scikit-learn: 
   :depends scipy: ``<1.13``
   :depends tqdm: 
   :depends tslearn: 
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

      mamba install netmd

   and update with::

      mamba update netmd

  To create a new environment, run::

      mamba create --name myenvname netmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/netmd:<tag>

   (see `netmd/tags`_ for valid values for ``<tag>``)


.. |downloads_netmd| image:: https://img.shields.io/conda/dn/bioconda/netmd.svg?style=flat
   :target: https://anaconda.org/bioconda/netmd
   :alt:   (downloads)
.. |docker_netmd| image:: https://quay.io/repository/biocontainers/netmd/status
   :target: https://quay.io/repository/biocontainers/netmd
.. _`netmd/tags`: https://quay.io/repository/biocontainers/netmd?tab=tags


.. raw:: html

    <script>
        var package = "netmd";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netmd/README.html
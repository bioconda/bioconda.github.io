:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scglue'
.. highlight: bash

scglue
======

.. conda:recipe:: scglue
   :replaces_section_title:
   :noindex:

   Graph\-linked unified embedding for unpaired single\-cell multi\-omics data integration

   :homepage: https://github.com/gao-lab/GLUE
   :documentation: https://scglue.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`scglue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scglue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scglue/meta.yaml>`_

   GLUE is a flexible framework that utilizes prior knowledge about feature
   relations to bridge the gap between different feature spaces during unpaired
   multi\-modal data integration.



.. conda:package:: scglue

   |downloads_scglue| |docker_scglue|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends anndata: ``>=0.7``
   :depends dill: ``>=0.2.3``
   :depends h5py: ``>=2.10``
   :depends leidenalg: ``>=0.7``
   :depends matplotlib-base: ``>=3.1.2``
   :depends muon: ``>=0.1.5``
   :depends networkx: ``>=2``
   :depends numpy: ``>=1.19,<1.22``
   :depends packaging: ``>=16.8``
   :depends pandas: ``>=1.1``
   :depends parse: ``>=1.3.2``
   :depends pybedtools: ``>=0.8.1``
   :depends pynvml: ``>=8.0.1``
   :depends pyro-ppl: ``>=1.0``
   :depends python: ``>=3.6``
   :depends pytorch: ``>=1.8``
   :depends pytorch-ignite: ``>=0.4.1``
   :depends scanpy: ``>=1.5``
   :depends scikit-learn: ``>=0.21.2``
   :depends scipy: ``>=1.3``
   :depends seaborn: ``>=0.9``
   :depends sparse: ``>=0.3.1``
   :depends statsmodels: ``>=0.10``
   :depends tensorboardx: ``>=1.4``
   :depends tqdm: ``>=4.27``
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

      mamba install scglue

   and update with::

      mamba update scglue

  To create a new environment, run::

      mamba create --name myenvname scglue

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scglue:<tag>

   (see `scglue/tags`_ for valid values for ``<tag>``)


.. |downloads_scglue| image:: https://img.shields.io/conda/dn/bioconda/scglue.svg?style=flat
   :target: https://anaconda.org/bioconda/scglue
   :alt:   (downloads)
.. |docker_scglue| image:: https://quay.io/repository/biocontainers/scglue/status
   :target: https://quay.io/repository/biocontainers/scglue
.. _`scglue/tags`: https://quay.io/repository/biocontainers/scglue?tab=tags


.. raw:: html

    <script>
        var package = "scglue";
        var versions = ["0.4.0","0.3.2","0.3.1","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scglue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scglue/README.html
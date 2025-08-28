:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexynesis'
.. highlight: bash

flexynesis
==========

.. conda:recipe:: flexynesis
   :replaces_section_title:
   :noindex:

   A deep\-learning\-based multi\-omics bulk sequencing data integration suite with a focus on \(pre\-\)clinical endpoint prediction.

   :homepage: https://github.com/BIMSBbioinfo/flexynesis
   :documentation: https://bimsbstatic.mdc-berlin.de/akalin/buyar/flexynesis/site/getting_started
   
   :license: OTHER
   :recipe: /`flexynesis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexynesis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexynesis/meta.yaml>`_

   This is a deep\-learning based multi\-omics bulk sequencing data integration suite with a focus on \(pre\-\)clinical endpoint prediction.


.. conda:package:: flexynesis

   |downloads_flexynesis| |docker_flexynesis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-0</code>,  <code>0.2.20-0</code>,  <code>0.2.19-0</code>,  <code>0.2.18-0</code>,  <code>0.2.17-0</code>,  <code>0.2.16-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  </span></summary>
      

      ``1.0.3-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends captum: 
   :depends geomloss: 
   :depends ipykernel: 
   :depends ipywidgets: 
   :depends lifelines: 
   :depends lightning: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends papermill: 
   :depends plotnine: 
   :depends pot: 
   :depends python: ``>=3.11,<3.12``
   :depends python-louvain: 
   :depends pytorch: 
   :depends pytorch_geometric: 
   :depends pyyaml: 
   :depends rich: 
   :depends safetensors: 
   :depends scikit-optimize: 
   :depends scikit-survival: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends torchvision: 
   :depends tqdm: 
   :depends umap-learn: 
   :depends xgboost: 
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

      mamba install flexynesis

   and update with::

      mamba update flexynesis

  To create a new environment, run::

      mamba create --name myenvname flexynesis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexynesis:<tag>

   (see `flexynesis/tags`_ for valid values for ``<tag>``)


.. |downloads_flexynesis| image:: https://img.shields.io/conda/dn/bioconda/flexynesis.svg?style=flat
   :target: https://anaconda.org/bioconda/flexynesis
   :alt:   (downloads)
.. |docker_flexynesis| image:: https://quay.io/repository/biocontainers/flexynesis/status
   :target: https://quay.io/repository/biocontainers/flexynesis
.. _`flexynesis/tags`: https://quay.io/repository/biocontainers/flexynesis?tab=tags


.. raw:: html

    <script>
        var package = "flexynesis";
        var versions = ["1.0.3","0.2.20","0.2.19","0.2.18","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexynesis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexynesis/README.html
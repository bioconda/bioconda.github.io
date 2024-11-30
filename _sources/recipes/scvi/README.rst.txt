:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvi'
.. highlight: bash

scvi
====

.. conda:recipe:: scvi
   :replaces_section_title:
   :noindex:

   Single\-cell Variational Inference

   :homepage: https://github.com/YosefLab/scVI
   :documentation: https://scvi.readthedocs.io
   
   :license: MIT / MIT License
   :recipe: /`scvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi/meta.yaml>`_

   Single\-cell Variational Inference


.. conda:package:: scvi

   |downloads_scvi| |docker_scvi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.8-0</code>,  <code>0.6.7-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.7``
   :depends h5py: ``>=2.9.0``
   :depends hyperopt: ``0.1.2``
   :depends matplotlib-base: ``>=3.0.3``
   :depends numpy: ``>=1.16.2``
   :depends pandas: ``>=0.25``
   :depends python: ``>=3.6``
   :depends pytorch: ``>=1.1``
   :depends scanpy: ``>=1.4.6``
   :depends scikit-learn: ``>=0.20.3``
   :depends tqdm: ``>=4.31.1``
   :depends xlrd: ``>=1.2.0``
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

      mamba install scvi

   and update with::

      mamba update scvi

  To create a new environment, run::

      mamba create --name myenvname scvi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scvi:<tag>

   (see `scvi/tags`_ for valid values for ``<tag>``)


.. |downloads_scvi| image:: https://img.shields.io/conda/dn/bioconda/scvi.svg?style=flat
   :target: https://anaconda.org/bioconda/scvi
   :alt:   (downloads)
.. |docker_scvi| image:: https://quay.io/repository/biocontainers/scvi/status
   :target: https://quay.io/repository/biocontainers/scvi
.. _`scvi/tags`: https://quay.io/repository/biocontainers/scvi?tab=tags


.. raw:: html

    <script>
        var package = "scvi";
        var versions = ["0.6.8","0.6.7","0.6.5","0.6.4","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi/README.html
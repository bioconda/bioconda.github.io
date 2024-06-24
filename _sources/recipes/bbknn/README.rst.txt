:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbknn'
.. highlight: bash

bbknn
=====

.. conda:recipe:: bbknn
   :replaces_section_title:
   :noindex:

   Batch balanced KNN

   :homepage: https://github.com/Teichlab/bbknn
   :license: MIT / MIT
   :recipe: /`bbknn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbknn/meta.yaml>`_

   


.. conda:package:: bbknn

   |downloads_bbknn| |docker_bbknn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-3</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.12-1``,  ``1.3.12-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.13``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends pandas: 
   :depends pynndescent: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-annoy: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=1.0.2``
   :depends scipy: ``>=1.6.0``
   :depends umap-learn: 
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

      mamba install bbknn

   and update with::

      mamba update bbknn

  To create a new environment, run::

      mamba create --name myenvname bbknn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bbknn:<tag>

   (see `bbknn/tags`_ for valid values for ``<tag>``)


.. |downloads_bbknn| image:: https://img.shields.io/conda/dn/bioconda/bbknn.svg?style=flat
   :target: https://anaconda.org/bioconda/bbknn
   :alt:   (downloads)
.. |docker_bbknn| image:: https://quay.io/repository/biocontainers/bbknn/status
   :target: https://quay.io/repository/biocontainers/bbknn
.. _`bbknn/tags`: https://quay.io/repository/biocontainers/bbknn?tab=tags


.. raw:: html

    <script>
        var package = "bbknn";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbknn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbknn/README.html
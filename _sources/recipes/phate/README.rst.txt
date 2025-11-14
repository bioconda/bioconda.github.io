:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phate'
.. highlight: bash

phate
=====

.. conda:recipe:: phate
   :replaces_section_title:
   :noindex:

   PHATE \(Potential of Heat\-diffusion for Affinity\-based Transition Embedding\) is a tool for visualizing high dimensional data.

   :homepage: https://github.com/KrishnaswamyLab/PHATE
   :documentation: https://phate.readthedocs.io
   
   :license: GPL / GPL-2.0-only
   :recipe: /`phate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phate/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0336-3`

   


.. conda:package:: phate

   |downloads_phate| |docker_phate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``0.4.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends deprecated: 
   :depends future: 
   :depends graphtools: ``>=1.5.3``
   :depends matplotlib-base: ``>=3.0``
   :depends numpy: ``>=1.20.0``
   :depends python: ``>=3.9``
   :depends s_gd2: ``>=1.5``
   :depends scikit-learn: ``>=1.5.0``
   :depends scipy: ``>=1.7.0``
   :depends scprep: ``>=0.11.1``
   :depends tasklogger: ``>=1.2``
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

      mamba install phate

   and update with::

      mamba update phate

  To create a new environment, run::

      mamba create --name myenvname phate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phate:<tag>

   (see `phate/tags`_ for valid values for ``<tag>``)


.. |downloads_phate| image:: https://img.shields.io/conda/dn/bioconda/phate.svg?style=flat
   :target: https://anaconda.org/bioconda/phate
   :alt:   (downloads)
.. |docker_phate| image:: https://quay.io/repository/biocontainers/phate/status
   :target: https://quay.io/repository/biocontainers/phate
.. _`phate/tags`: https://quay.io/repository/biocontainers/phate?tab=tags


.. raw:: html

    <script>
        var package = "phate";
        var versions = ["2.0.0","1.0.11","1.0.10","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phate/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scirpy'
.. highlight: bash

scirpy
======

.. conda:recipe:: scirpy
   :replaces_section_title:
   :noindex:

   A Scanpy extension for analyzing single\-cell T\-cell and B\-cell receptor \(TCR\/BCR\) sequencing data.

   :homepage: https://scirpy.scverse.org/en/latest
   :developer docs: https://github.com/icbi-lab/scirpy
   :license: BSD / BSD-3-Clause
   :recipe: /`scirpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scirpy/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.04.10.035865`

   


.. conda:package:: scirpy

   |downloads_scirpy| |docker_scirpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21.0-0</code>,  <code>0.20.1-0</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.2-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.1-0</code>,  </span></summary>
      

      ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.2-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: ``>=0.7``
   :depends airr: ``>=1.4.1``
   :depends anndata: ``>=0.9``
   :depends awkward: ``>=2.1.0``
   :depends joblib: ``>=1.3.1``
   :depends logomaker: ``!=0.8.5``
   :depends mudata: ``>=0.2.3``
   :depends networkx: ``>=2.5``
   :depends numba: ``>=0.41.0``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.5``
   :depends pooch: ``>=1.7.0``
   :depends python: ``>=3.10``
   :depends python-igraph: ``>0.10.1|<0.10.0``
   :depends python-levenshtein: 
   :depends scanpy: ``>=1.9.3``
   :depends scikit-learn: 
   :depends scipy: 
   :depends squarify: 
   :depends tqdm: ``>=4.63``
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

      mamba install scirpy

   and update with::

      mamba update scirpy

  To create a new environment, run::

      mamba create --name myenvname scirpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scirpy:<tag>

   (see `scirpy/tags`_ for valid values for ``<tag>``)


.. |downloads_scirpy| image:: https://img.shields.io/conda/dn/bioconda/scirpy.svg?style=flat
   :target: https://anaconda.org/bioconda/scirpy
   :alt:   (downloads)
.. |docker_scirpy| image:: https://quay.io/repository/biocontainers/scirpy/status
   :target: https://quay.io/repository/biocontainers/scirpy
.. _`scirpy/tags`: https://quay.io/repository/biocontainers/scirpy?tab=tags


.. raw:: html

    <script>
        var package = "scirpy";
        var versions = ["0.21.0","0.20.1","0.20.0","0.19.0","0.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scirpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scirpy/README.html
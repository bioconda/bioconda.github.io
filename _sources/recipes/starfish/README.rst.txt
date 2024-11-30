:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starfish'
.. highlight: bash

starfish
========

.. conda:recipe:: starfish
   :replaces_section_title:
   :noindex:

   Standardized analysis pipeline for image\-based transcriptomics.

   :homepage: https://github.com/spacetx/starfish
   :documentation: https://spacetx-starfish.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`starfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starfish/meta.yaml>`_

   


.. conda:package:: starfish

   |downloads_starfish| |docker_starfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  </span></summary>
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.27-0``,  ``0.0.26-2``,  ``0.0.25-2``,  ``0.0.23-2``,  ``0.0.21-2``,  ``0.0.20-2``,  ``0.0.19-2``,  ``0.0.18-2``,  ``0.0.17-2``,  ``0.0.16-2``,  ``0.0.14-2``,  ``0.0.14-1``,  ``0.0.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends docutils: ``<0.21``
   :depends h5py: 
   :depends jsonschema: ``<4.18``
   :depends matplotlib-base: ``<3.8``
   :depends mistune: ``0.8.4``
   :depends numpy: ``<1.25``
   :depends python: ``>=3.9,<3.12``
   :depends read-roi: 
   :depends regional: 
   :depends scikit-image: ``0.21``
   :depends scikit-learn: 
   :depends seaborn-base: 
   :depends semantic_version: 
   :depends showit: 
   :depends slicedimage: 
   :depends sympy: 
   :depends tqdm: 
   :depends trackpy: 
   :depends validators: 
   :depends xarray: ``<2023.09``
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

      mamba install starfish

   and update with::

      mamba update starfish

  To create a new environment, run::

      mamba create --name myenvname starfish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/starfish:<tag>

   (see `starfish/tags`_ for valid values for ``<tag>``)


.. |downloads_starfish| image:: https://img.shields.io/conda/dn/bioconda/starfish.svg?style=flat
   :target: https://anaconda.org/bioconda/starfish
   :alt:   (downloads)
.. |docker_starfish| image:: https://quay.io/repository/biocontainers/starfish/status
   :target: https://quay.io/repository/biocontainers/starfish
.. _`starfish/tags`: https://quay.io/repository/biocontainers/starfish?tab=tags


.. raw:: html

    <script>
        var package = "starfish";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.0","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starfish/README.html
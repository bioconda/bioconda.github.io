:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strvctvre'
.. highlight: bash

strvctvre
=========

.. conda:recipe:: strvctvre
   :replaces_section_title:
   :noindex:

   StrVCTVRE\, a structural variant classifier for exonic deletions and duplications

   :homepage: https://github.com/andrewSharo/StrVCTVRE/tree/master
   :license: MIT / MIT
   :recipe: /`strvctvre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strvctvre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strvctvre/meta.yaml>`_

   


.. conda:package:: strvctvre

   |downloads_strvctvre| |docker_strvctvre|

   :versions:
      
      

      ``1.10-0``

      

   
   :depends cyvcf2: 
   :depends joblib: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends python: 
   :depends scikit-learn: 
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

      mamba install strvctvre

   and update with::

      mamba update strvctvre

  To create a new environment, run::

      mamba create --name myenvname strvctvre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strvctvre:<tag>

   (see `strvctvre/tags`_ for valid values for ``<tag>``)


.. |downloads_strvctvre| image:: https://img.shields.io/conda/dn/bioconda/strvctvre.svg?style=flat
   :target: https://anaconda.org/bioconda/strvctvre
   :alt:   (downloads)
.. |docker_strvctvre| image:: https://quay.io/repository/biocontainers/strvctvre/status
   :target: https://quay.io/repository/biocontainers/strvctvre
.. _`strvctvre/tags`: https://quay.io/repository/biocontainers/strvctvre?tab=tags


.. raw:: html

    <script>
        var package = "strvctvre";
        var versions = ["1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strvctvre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strvctvre/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feature_merge'
.. highlight: bash

feature_merge
=============

.. conda:recipe:: feature_merge
   :replaces_section_title:
   :noindex:

   Merge features in GFF files

   :homepage: https://github.com/brinkmanlab/feature_merge
   :license: MIT / MIT
   :recipe: /`feature_merge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge/meta.yaml>`_

   


.. conda:package:: feature_merge

   |downloads_feature_merge| |docker_feature_merge|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends gffutils: ``>=0.9``
   :depends pbr: 
   :depends python: 
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

      mamba install feature_merge

   and update with::

      mamba update feature_merge

  To create a new environment, run::

      mamba create --name myenvname feature_merge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/feature_merge:<tag>

   (see `feature_merge/tags`_ for valid values for ``<tag>``)


.. |downloads_feature_merge| image:: https://img.shields.io/conda/dn/bioconda/feature_merge.svg?style=flat
   :target: https://anaconda.org/bioconda/feature_merge
   :alt:   (downloads)
.. |docker_feature_merge| image:: https://quay.io/repository/biocontainers/feature_merge/status
   :target: https://quay.io/repository/biocontainers/feature_merge
.. _`feature_merge/tags`: https://quay.io/repository/biocontainers/feature_merge?tab=tags


.. raw:: html

    <script>
        var package = "feature_merge";
        var versions = ["1.3.0","1.2.1","1.2.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feature_merge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feature_merge/README.html
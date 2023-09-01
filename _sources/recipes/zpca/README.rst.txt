:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zpca'
.. highlight: bash

zpca
====

.. conda:recipe:: zpca
   :replaces_section_title:
   :noindex:

   PCA analysis for genes or transcripts.

   :homepage: The package home page
   :license: APACHE / Apache License 2.0
   :recipe: /`zpca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zpca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zpca/meta.yaml>`_

   


.. conda:package:: zpca

   |downloads_zpca| |docker_zpca|

   :versions:
      
      

      ``0.8.3.post1-0``,  ``0.8.2-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16``
   :depends pandas: ``>=0.25``
   :depends python: 
   :depends scikit-learn: ``>=0.22``
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

      mamba install zpca

   and update with::

      mamba update zpca

  To create a new environment, run::

      mamba create --name myenvname zpca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zpca:<tag>

   (see `zpca/tags`_ for valid values for ``<tag>``)


.. |downloads_zpca| image:: https://img.shields.io/conda/dn/bioconda/zpca.svg?style=flat
   :target: https://anaconda.org/bioconda/zpca
   :alt:   (downloads)
.. |docker_zpca| image:: https://quay.io/repository/biocontainers/zpca/status
   :target: https://quay.io/repository/biocontainers/zpca
.. _`zpca/tags`: https://quay.io/repository/biocontainers/zpca?tab=tags


.. raw:: html

    <script>
        var package = "zpca";
        var versions = ["0.8.3.post1","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zpca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zpca/README.html
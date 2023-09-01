:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimap'
.. highlight: bash

trimap
======

.. conda:recipe:: trimap
   :replaces_section_title:
   :noindex:

   TriMap\: Large\-scale Dimensionality Reduction Using Triplets

   :homepage: http://github.com/eamid/trimap
   :license: Apache-2.0
   :recipe: /`trimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap/meta.yaml>`_

   


.. conda:package:: trimap

   |downloads_trimap| |docker_trimap|

   :versions:
      
      

      ``1.0.15-0``

      

   
   :depends numba: ``>=0.34``
   :depends python: 
   :depends python-annoy: ``>=1.11``
   :depends scikit-learn: ``>=0.16``
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

      mamba install trimap

   and update with::

      mamba update trimap

  To create a new environment, run::

      mamba create --name myenvname trimap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trimap:<tag>

   (see `trimap/tags`_ for valid values for ``<tag>``)


.. |downloads_trimap| image:: https://img.shields.io/conda/dn/bioconda/trimap.svg?style=flat
   :target: https://anaconda.org/bioconda/trimap
   :alt:   (downloads)
.. |docker_trimap| image:: https://quay.io/repository/biocontainers/trimap/status
   :target: https://quay.io/repository/biocontainers/trimap
.. _`trimap/tags`: https://quay.io/repository/biocontainers/trimap?tab=tags


.. raw:: html

    <script>
        var package = "trimap";
        var versions = ["1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimap/README.html
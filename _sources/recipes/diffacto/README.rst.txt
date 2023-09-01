:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diffacto'
.. highlight: bash

diffacto
========

.. conda:recipe:: diffacto
   :replaces_section_title:
   :noindex:

   A protein summarization method for shotgun proteomics experiments

   :homepage: https://github.com/statisticalbiotechnology/diffacto
   :license: APACHE / Apache Software
   :recipe: /`diffacto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diffacto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diffacto/meta.yaml>`_

   


.. conda:package:: diffacto

   |downloads_diffacto| |docker_diffacto|

   :versions:
      
      

      ``1.0.6-0``

      

   
   :depends networkx: ``>=2.3``
   :depends numpy: ``>=1.10``
   :depends pandas: ``>=0.18``
   :depends pyteomics: ``>=3.3``
   :depends python: 
   :depends scikit-learn: ``>=0.17``
   :depends scipy: ``>=0.17``
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

      mamba install diffacto

   and update with::

      mamba update diffacto

  To create a new environment, run::

      mamba create --name myenvname diffacto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/diffacto:<tag>

   (see `diffacto/tags`_ for valid values for ``<tag>``)


.. |downloads_diffacto| image:: https://img.shields.io/conda/dn/bioconda/diffacto.svg?style=flat
   :target: https://anaconda.org/bioconda/diffacto
   :alt:   (downloads)
.. |docker_diffacto| image:: https://quay.io/repository/biocontainers/diffacto/status
   :target: https://quay.io/repository/biocontainers/diffacto
.. _`diffacto/tags`: https://quay.io/repository/biocontainers/diffacto?tab=tags


.. raw:: html

    <script>
        var package = "diffacto";
        var versions = ["1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diffacto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diffacto/README.html
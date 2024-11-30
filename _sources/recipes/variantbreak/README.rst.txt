:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantbreak'
.. highlight: bash

variantbreak
============

.. conda:recipe:: variantbreak
   :replaces_section_title:
   :noindex:

   Structural variant analyzer for data visualization on VariantMap

   :homepage: https://github.com/cytham/variantbreak
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantbreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak/meta.yaml>`_

   


.. conda:package:: variantbreak

   |downloads_variantbreak| |docker_variantbreak|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bedtools: ``>=2.26.0``
   :depends fastcluster: ``>=1.1.26``
   :depends numpy: ``>=1.18.3``
   :depends pandas: ``>=1.0.3``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.15.3``
   :depends pytables: ``>=3.6.1``
   :depends python: ``>=3.6``
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

      mamba install variantbreak

   and update with::

      mamba update variantbreak

  To create a new environment, run::

      mamba create --name myenvname variantbreak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/variantbreak:<tag>

   (see `variantbreak/tags`_ for valid values for ``<tag>``)


.. |downloads_variantbreak| image:: https://img.shields.io/conda/dn/bioconda/variantbreak.svg?style=flat
   :target: https://anaconda.org/bioconda/variantbreak
   :alt:   (downloads)
.. |docker_variantbreak| image:: https://quay.io/repository/biocontainers/variantbreak/status
   :target: https://quay.io/repository/biocontainers/variantbreak
.. _`variantbreak/tags`: https://quay.io/repository/biocontainers/variantbreak?tab=tags


.. raw:: html

    <script>
        var package = "variantbreak";
        var versions = ["1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantbreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantbreak/README.html
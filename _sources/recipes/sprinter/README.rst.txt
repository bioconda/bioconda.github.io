:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sprinter'
.. highlight: bash

sprinter
========

.. conda:recipe:: sprinter
   :replaces_section_title:
   :noindex:

   Single\-cell Proliferation Rate Inference in Non\-homogeneous Tumours through Evolutionary Routes \(SPRINTER\)

   :homepage: https://github.com/zaccaria-lab/SPRINTER
   :documentation: https://github.com/zaccaria-lab/SPRINTER/blob/v1.0.0/README.md
   
   :license: OTHER / ACADEMIC NON-COMMERCIAL SOFTWARE LICENSE
   :recipe: /`sprinter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sprinter/meta.yaml>`_

   SPRINTER is an algorithm that uses single\-cell whole\-genome DNA sequencing data to enable the accurate identification of actively replicating cells in both the S and G2 phases of the cell cycle and their assignment to distinct tumour clones\, thus providing a proxy to estimate clone\-specific proliferation rates.


.. conda:package:: sprinter

   |downloads_sprinter| |docker_sprinter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends hmmlearn: ``>=0.2.7``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numba: ``>=0.55.0``
   :depends numpy: ``>=1.22.0,<=1.26.4``
   :depends pandas: ``>=1.3.0``
   :depends pybedtools: ``>=0.8.0``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``>=1.0.0,<2.0.0``
   :depends scipy: ``>=1.7.0,<2.0.0``
   :depends seaborn: ``>=0.11.0``
   :depends statsmodels: ``>=0.13.0``
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

      mamba install sprinter

   and update with::

      mamba update sprinter

  To create a new environment, run::

      mamba create --name myenvname sprinter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sprinter:<tag>

   (see `sprinter/tags`_ for valid values for ``<tag>``)


.. |downloads_sprinter| image:: https://img.shields.io/conda/dn/bioconda/sprinter.svg?style=flat
   :target: https://anaconda.org/bioconda/sprinter
   :alt:   (downloads)
.. |docker_sprinter| image:: https://quay.io/repository/biocontainers/sprinter/status
   :target: https://quay.io/repository/biocontainers/sprinter
.. _`sprinter/tags`: https://quay.io/repository/biocontainers/sprinter?tab=tags


.. raw:: html

    <script>
        var package = "sprinter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sprinter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sprinter/README.html
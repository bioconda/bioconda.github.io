:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-redux'
.. highlight: bash

hmftools-redux
==============

.. conda:recipe:: hmftools-redux
   :replaces_section_title:
   :noindex:

   Post\-processing read alignments to control sequencing errors and biases

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/redux
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-redux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-redux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-redux/meta.yaml>`_

   


.. conda:package:: hmftools-redux

   |downloads_hmftools-redux| |docker_hmftools-redux|

   :versions:
      
      

      ``1.0_beta-6``,  ``1.0_beta-5``,  ``1.0_beta-4``,  ``1.0_beta-3``,  ``1.0_beta-2``,  ``1.0_beta-1``,  ``1.0_beta-0``

      

   
   :depends openjdk: ``>=8,<=21``
   :depends sambamba: ``>=1.0.1``
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

      mamba install hmftools-redux

   and update with::

      mamba update hmftools-redux

  To create a new environment, run::

      mamba create --name myenvname hmftools-redux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-redux:<tag>

   (see `hmftools-redux/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-redux| image:: https://img.shields.io/conda/dn/bioconda/hmftools-redux.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-redux
   :alt:   (downloads)
.. |docker_hmftools-redux| image:: https://quay.io/repository/biocontainers/hmftools-redux/status
   :target: https://quay.io/repository/biocontainers/hmftools-redux
.. _`hmftools-redux/tags`: https://quay.io/repository/biocontainers/hmftools-redux?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-redux";
        var versions = ["1.0_beta","1.0_beta","1.0_beta","1.0_beta","1.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-redux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-redux/README.html
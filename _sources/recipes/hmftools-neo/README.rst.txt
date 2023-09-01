:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-neo'
.. highlight: bash

hmftools-neo
============

.. conda:recipe:: hmftools-neo
   :replaces_section_title:
   :noindex:

   Identification of neoepitope and calculation of allele specific neoepitope binding and presentation likelihood.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/neo
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-neo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-neo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-neo/meta.yaml>`_

   


.. conda:package:: hmftools-neo

   |downloads_hmftools-neo| |docker_hmftools-neo|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install hmftools-neo

   and update with::

      mamba update hmftools-neo

  To create a new environment, run::

      mamba create --name myenvname hmftools-neo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-neo:<tag>

   (see `hmftools-neo/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-neo| image:: https://img.shields.io/conda/dn/bioconda/hmftools-neo.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-neo
   :alt:   (downloads)
.. |docker_hmftools-neo| image:: https://quay.io/repository/biocontainers/hmftools-neo/status
   :target: https://quay.io/repository/biocontainers/hmftools-neo
.. _`hmftools-neo/tags`: https://quay.io/repository/biocontainers/hmftools-neo?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-neo";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-neo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-neo/README.html
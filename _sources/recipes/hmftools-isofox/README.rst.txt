:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-isofox'
.. highlight: bash

hmftools-isofox
===============

.. conda:recipe:: hmftools-isofox
   :replaces_section_title:
   :noindex:

   Isofox is a tool for counting fragment support for identifying and counting gene and transcript features using genome aligned RNASeq data in tumor samples.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/isofox
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-isofox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-isofox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-isofox/meta.yaml>`_

   


.. conda:package:: hmftools-isofox

   |downloads_hmftools-isofox| |docker_hmftools-isofox|

   :versions:
      
      

      ``1.6.2-0``,  ``1.5-0``,  ``1.4-0``,  ``1.1-0``,  ``1.0-0``

      

   
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

      mamba install hmftools-isofox

   and update with::

      mamba update hmftools-isofox

  To create a new environment, run::

      mamba create --name myenvname hmftools-isofox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-isofox:<tag>

   (see `hmftools-isofox/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-isofox| image:: https://img.shields.io/conda/dn/bioconda/hmftools-isofox.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-isofox
   :alt:   (downloads)
.. |docker_hmftools-isofox| image:: https://quay.io/repository/biocontainers/hmftools-isofox/status
   :target: https://quay.io/repository/biocontainers/hmftools-isofox
.. _`hmftools-isofox/tags`: https://quay.io/repository/biocontainers/hmftools-isofox?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-isofox";
        var versions = ["1.6.2","1.5","1.4","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-isofox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-isofox/README.html
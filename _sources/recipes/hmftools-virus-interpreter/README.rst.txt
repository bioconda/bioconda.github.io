:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-virus-interpreter'
.. highlight: bash

hmftools-virus-interpreter
==========================

.. conda:recipe:: hmftools-virus-interpreter
   :replaces_section_title:
   :noindex:

   Post\-process VIRUSBreakend summary results.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/virus-interpreter/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-virus-interpreter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-virus-interpreter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-virus-interpreter/meta.yaml>`_

   


.. conda:package:: hmftools-virus-interpreter

   |downloads_hmftools-virus-interpreter| |docker_hmftools-virus-interpreter|

   :versions:
      
      

      ``1.3-0``

      

   
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

      mamba install hmftools-virus-interpreter

   and update with::

      mamba update hmftools-virus-interpreter

  To create a new environment, run::

      mamba create --name myenvname hmftools-virus-interpreter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-virus-interpreter:<tag>

   (see `hmftools-virus-interpreter/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-virus-interpreter| image:: https://img.shields.io/conda/dn/bioconda/hmftools-virus-interpreter.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-virus-interpreter
   :alt:   (downloads)
.. |docker_hmftools-virus-interpreter| image:: https://quay.io/repository/biocontainers/hmftools-virus-interpreter/status
   :target: https://quay.io/repository/biocontainers/hmftools-virus-interpreter
.. _`hmftools-virus-interpreter/tags`: https://quay.io/repository/biocontainers/hmftools-virus-interpreter?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-virus-interpreter";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-virus-interpreter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-virus-interpreter/README.html
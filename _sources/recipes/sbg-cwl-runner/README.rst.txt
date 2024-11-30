:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sbg-cwl-runner'
.. highlight: bash

sbg-cwl-runner
==============

.. conda:recipe:: sbg-cwl-runner
   :replaces_section_title:
   :noindex:

   A CWL Runner for SBG platform

   :homepage: https://github.com/kaushik-work/sbg-cwl-runner
   :license: Apache / Apache-2.0
   :recipe: /`sbg-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbg-cwl-runner/meta.yaml>`_

   A CWL Runner for the Seven Bridges Genomics cloud platform


.. conda:package:: sbg-cwl-runner

   |downloads_sbg-cwl-runner| |docker_sbg-cwl-runner|

   :versions:
      
      

      ``2018.11-1``,  ``2018.11-0``

      

   
   :depends docopt: 
   :depends python: ``>3.5``
   :depends pyyaml: 
   :depends sevenbridges-python: 
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

      mamba install sbg-cwl-runner

   and update with::

      mamba update sbg-cwl-runner

  To create a new environment, run::

      mamba create --name myenvname sbg-cwl-runner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sbg-cwl-runner:<tag>

   (see `sbg-cwl-runner/tags`_ for valid values for ``<tag>``)


.. |downloads_sbg-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/sbg-cwl-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/sbg-cwl-runner
   :alt:   (downloads)
.. |docker_sbg-cwl-runner| image:: https://quay.io/repository/biocontainers/sbg-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/sbg-cwl-runner
.. _`sbg-cwl-runner/tags`: https://quay.io/repository/biocontainers/sbg-cwl-runner?tab=tags


.. raw:: html

    <script>
        var package = "sbg-cwl-runner";
        var versions = ["2018.11","2018.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbg-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbg-cwl-runner/README.html
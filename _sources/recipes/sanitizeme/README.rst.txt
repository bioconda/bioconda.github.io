:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sanitizeme'
.. highlight: bash

sanitizeme
==========

.. conda:recipe:: sanitizeme
   :replaces_section_title:
   :noindex:

   GUI and CLI tool for removing host DNA from NGS data.

   :homepage: https://github.com/jiangweiyao/SanitizeMe
   :license: APACHE / Apache License 2.0
   :recipe: /`sanitizeme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme/meta.yaml>`_

   


.. conda:package:: sanitizeme

   |downloads_sanitizeme| |docker_sanitizeme|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends colored: 
   :depends gawk: 
   :depends gooey: 
   :depends grep: 
   :depends minimap2: 
   :depends python: ``>=3``
   :depends samtools: 
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

      mamba install sanitizeme

   and update with::

      mamba update sanitizeme

  To create a new environment, run::

      mamba create --name myenvname sanitizeme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sanitizeme:<tag>

   (see `sanitizeme/tags`_ for valid values for ``<tag>``)


.. |downloads_sanitizeme| image:: https://img.shields.io/conda/dn/bioconda/sanitizeme.svg?style=flat
   :target: https://anaconda.org/bioconda/sanitizeme
   :alt:   (downloads)
.. |docker_sanitizeme| image:: https://quay.io/repository/biocontainers/sanitizeme/status
   :target: https://quay.io/repository/biocontainers/sanitizeme
.. _`sanitizeme/tags`: https://quay.io/repository/biocontainers/sanitizeme?tab=tags


.. raw:: html

    <script>
        var package = "sanitizeme";
        var versions = ["1.1","1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sanitizeme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sanitizeme/README.html
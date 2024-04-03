:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-mark-dups'
.. highlight: bash

hmftools-mark-dups
==================

.. conda:recipe:: hmftools-mark-dups
   :replaces_section_title:
   :noindex:

   Mark read duplicates and form consenus sequences

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/mark-dups
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-mark-dups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-mark-dups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-mark-dups/meta.yaml>`_

   


.. conda:package:: hmftools-mark-dups

   |downloads_hmftools-mark-dups| |docker_hmftools-mark-dups|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends sambamba: ``>=1.0``
   :depends samtools: ``>=1.17``
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

      mamba install hmftools-mark-dups

   and update with::

      mamba update hmftools-mark-dups

  To create a new environment, run::

      mamba create --name myenvname hmftools-mark-dups

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-mark-dups:<tag>

   (see `hmftools-mark-dups/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-mark-dups| image:: https://img.shields.io/conda/dn/bioconda/hmftools-mark-dups.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-mark-dups
   :alt:   (downloads)
.. |docker_hmftools-mark-dups| image:: https://quay.io/repository/biocontainers/hmftools-mark-dups/status
   :target: https://quay.io/repository/biocontainers/hmftools-mark-dups
.. _`hmftools-mark-dups/tags`: https://quay.io/repository/biocontainers/hmftools-mark-dups?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-mark-dups";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-mark-dups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-mark-dups/README.html
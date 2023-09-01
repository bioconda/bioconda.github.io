:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-protect'
.. highlight: bash

hmftools-protect
================

.. conda:recipe:: hmftools-protect
   :replaces_section_title:
   :noindex:

   PROTECT determines the clinical evidence applicable for a particular tumor sample based on all genomic events and signatures that are determined by the Hartwig pipeline.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/protect/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-protect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-protect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-protect/meta.yaml>`_

   


.. conda:package:: hmftools-protect

   |downloads_hmftools-protect| |docker_hmftools-protect|

   :versions:
      
      

      ``2.3-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
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

      mamba install hmftools-protect

   and update with::

      mamba update hmftools-protect

  To create a new environment, run::

      mamba create --name myenvname hmftools-protect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-protect:<tag>

   (see `hmftools-protect/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-protect| image:: https://img.shields.io/conda/dn/bioconda/hmftools-protect.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-protect
   :alt:   (downloads)
.. |docker_hmftools-protect| image:: https://quay.io/repository/biocontainers/hmftools-protect/status
   :target: https://quay.io/repository/biocontainers/hmftools-protect
.. _`hmftools-protect/tags`: https://quay.io/repository/biocontainers/hmftools-protect?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-protect";
        var versions = ["2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-protect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-protect/README.html
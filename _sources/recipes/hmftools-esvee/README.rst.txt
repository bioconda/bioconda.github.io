:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-esvee'
.. highlight: bash

hmftools-esvee
==============

.. conda:recipe:: hmftools-esvee
   :replaces_section_title:
   :noindex:

   Structural variant caller specialised for breakend\-breakpoint calling.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/esvee/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-esvee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-esvee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-esvee/meta.yaml>`_

   


.. conda:package:: hmftools-esvee

   |downloads_hmftools-esvee| |docker_hmftools-esvee|

   :versions:
      
      

      ``1.0_beta-2``,  ``1.0_beta-0``

      

   
   :depends openjdk: ``>=8``
   :depends sambamba: ``0.6.8``
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

      mamba install hmftools-esvee

   and update with::

      mamba update hmftools-esvee

  To create a new environment, run::

      mamba create --name myenvname hmftools-esvee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-esvee:<tag>

   (see `hmftools-esvee/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-esvee| image:: https://img.shields.io/conda/dn/bioconda/hmftools-esvee.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-esvee
   :alt:   (downloads)
.. |docker_hmftools-esvee| image:: https://quay.io/repository/biocontainers/hmftools-esvee/status
   :target: https://quay.io/repository/biocontainers/hmftools-esvee
.. _`hmftools-esvee/tags`: https://quay.io/repository/biocontainers/hmftools-esvee?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-esvee";
        var versions = ["1.0_beta","1.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-esvee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-esvee/README.html
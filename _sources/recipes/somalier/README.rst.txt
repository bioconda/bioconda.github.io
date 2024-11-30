:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somalier'
.. highlight: bash

somalier
========

.. conda:recipe:: somalier
   :replaces_section_title:
   :noindex:

   fast sample\-swap and relatedness checks on BAMs\/CRAMs\/VCFs\/GVCFs.

   :homepage: https://github.com/brentp/somalier
   :license: MIT
   :recipe: /`somalier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00761-2`, biotools: :biotools:`somalier`

   


.. conda:package:: somalier

   |downloads_somalier| |docker_somalier|

   :versions:
      
      

      ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.15-1``,  ``0.2.15-0``

      

   
   :depends htslib: ``>=1.19.1,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends openblas: 
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

      mamba install somalier

   and update with::

      mamba update somalier

  To create a new environment, run::

      mamba create --name myenvname somalier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/somalier:<tag>

   (see `somalier/tags`_ for valid values for ``<tag>``)


.. |downloads_somalier| image:: https://img.shields.io/conda/dn/bioconda/somalier.svg?style=flat
   :target: https://anaconda.org/bioconda/somalier
   :alt:   (downloads)
.. |docker_somalier| image:: https://quay.io/repository/biocontainers/somalier/status
   :target: https://quay.io/repository/biocontainers/somalier
.. _`somalier/tags`: https://quay.io/repository/biocontainers/somalier?tab=tags


.. raw:: html

    <script>
        var package = "somalier";
        var versions = ["0.2.19","0.2.18","0.2.17","0.2.15","0.2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somalier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somalier/README.html
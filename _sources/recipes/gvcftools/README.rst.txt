:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcftools'
.. highlight: bash

gvcftools
=========

.. conda:recipe:: gvcftools
   :replaces_section_title:
   :noindex:

   a set of utilities to help create and analyze Genome VCF \(gVCF\) files.

   :homepage: https://sites.google.com/site/gvcftools/home
   :license: MIT
   :recipe: /`gvcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcftools/meta.yaml>`_

   


.. conda:package:: gvcftools

   |downloads_gvcftools| |docker_gvcftools|

   :versions:
      
      

      ``0.17.0-3``,  ``0.17.0-2``,  ``0.17.0-1``,  ``0.17.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends perl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install gvcftools

   and update with::

      mamba update gvcftools

  To create a new environment, run::

      mamba create --name myenvname gvcftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gvcftools:<tag>

   (see `gvcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcftools| image:: https://img.shields.io/conda/dn/bioconda/gvcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcftools
   :alt:   (downloads)
.. |docker_gvcftools| image:: https://quay.io/repository/biocontainers/gvcftools/status
   :target: https://quay.io/repository/biocontainers/gvcftools
.. _`gvcftools/tags`: https://quay.io/repository/biocontainers/gvcftools?tab=tags


.. raw:: html

    <script>
        var package = "gvcftools";
        var versions = ["0.17.0","0.17.0","0.17.0","0.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcftools/README.html
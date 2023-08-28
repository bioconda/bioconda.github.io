:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bftools'
.. highlight: bash

bftools
=======

.. conda:recipe:: bftools
   :replaces_section_title:
   :noindex:

   Bio\-Formats Command line tools

   :homepage: https://docs.openmicroscopy.org/bio-formats/6.7.0/users/comlinetools/index.html
   :license: GNU copyleft License
   :recipe: /`bftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools/meta.yaml>`_

   


.. conda:package:: bftools

   |downloads_bftools| |docker_bftools|

   :versions:
      
      

      ``6.7.0-0``,  ``5.7.1-1``,  ``5.7.1-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bftools

   and update with::

      mamba update bftools

  To create a new environment, run::

      mamba create --name myenvname bftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bftools:<tag>

   (see `bftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bftools| image:: https://img.shields.io/conda/dn/bioconda/bftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bftools
   :alt:   (downloads)
.. |docker_bftools| image:: https://quay.io/repository/biocontainers/bftools/status
   :target: https://quay.io/repository/biocontainers/bftools
.. _`bftools/tags`: https://quay.io/repository/biocontainers/bftools?tab=tags


.. raw:: html

    <script>
        var package = "bftools";
        var versions = ["6.7.0","5.7.1","5.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bftools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigtools'
.. highlight: bash

bigtools
========

.. conda:recipe:: bigtools
   :replaces_section_title:
   :noindex:

   Bigtools provides a high\-level\, performant API for reading and writing bigWig and bigBed files.

   :homepage: https://github.com/jackh726/bigtools
   :documentation: https://docs.rs/bigtools/latest/bigtools
   
   :license: MIT / MIT
   :recipe: /`bigtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigtools/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10606493`

   


.. conda:package:: bigtools

   |downloads_bigtools| |docker_bigtools|

   :versions:
      
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends libgcc: ``>=12``
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

      mamba install bigtools

   and update with::

      mamba update bigtools

  To create a new environment, run::

      mamba create --name myenvname bigtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigtools:<tag>

   (see `bigtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bigtools| image:: https://img.shields.io/conda/dn/bioconda/bigtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bigtools
   :alt:   (downloads)
.. |docker_bigtools| image:: https://quay.io/repository/biocontainers/bigtools/status
   :target: https://quay.io/repository/biocontainers/bigtools
.. _`bigtools/tags`: https://quay.io/repository/biocontainers/bigtools?tab=tags


.. raw:: html

    <script>
        var package = "bigtools";
        var versions = ["0.5.3","0.5.2","0.5.1","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigtools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpa-portable'
.. highlight: bash

mpa-portable
============

.. conda:recipe:: mpa-portable
   :replaces_section_title:
   :noindex:

   MPA Portable is a light\-weight and stand\-alone software for the identification of proteins and in\-depth analysis of metaproteomics \(and also proteomics\) data.

   :homepage: https://github.com/compomics/meta-proteome-analyzer
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`mpa-portable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-portable/meta.yaml>`_

   


.. conda:package:: mpa-portable

   |downloads_mpa-portable| |docker_mpa-portable|

   :versions:
      
      

      ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.9.0-0``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends comet-ms: ``2016013``
   :depends fontconfig: 
   :depends fonts-conda-ecosystem: 
   :depends openjdk: 
   :depends python: 
   :depends xtandem: ``15.12.15.2``
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

      mamba install mpa-portable

   and update with::

      mamba update mpa-portable

  To create a new environment, run::

      mamba create --name myenvname mpa-portable

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mpa-portable:<tag>

   (see `mpa-portable/tags`_ for valid values for ``<tag>``)


.. |downloads_mpa-portable| image:: https://img.shields.io/conda/dn/bioconda/mpa-portable.svg?style=flat
   :target: https://anaconda.org/bioconda/mpa-portable
   :alt:   (downloads)
.. |docker_mpa-portable| image:: https://quay.io/repository/biocontainers/mpa-portable/status
   :target: https://quay.io/repository/biocontainers/mpa-portable
.. _`mpa-portable/tags`: https://quay.io/repository/biocontainers/mpa-portable?tab=tags


.. raw:: html

    <script>
        var package = "mpa-portable";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","1.9.0"];
    </script>





Notes
-----
mpa\-protable is Java program that comes with a custom wrapper Python script.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpa-portable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpa-portable/README.html
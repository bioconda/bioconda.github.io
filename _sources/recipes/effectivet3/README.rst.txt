:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'effectivet3'
.. highlight: bash

effectivet3
===========

.. conda:recipe:: effectivet3
   :replaces_section_title:
   :noindex:

   Command line NoD \(clinod\)\, for  predicting nucleolar localization sequences.

   :homepage: http://www.compbio.dundee.ac.uk/nod
   :license: Apache License, Version 2.0 + others used internally
   :recipe: /`effectivet3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/effectivet3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/effectivet3/meta.yaml>`_
   :links: biotools: :biotools:`effectivet3`

   


.. conda:package:: effectivet3

   |downloads_effectivet3| |docker_effectivet3|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: ``2.7*``
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

      mamba install effectivet3

   and update with::

      mamba update effectivet3

  To create a new environment, run::

      mamba create --name myenvname effectivet3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/effectivet3:<tag>

   (see `effectivet3/tags`_ for valid values for ``<tag>``)


.. |downloads_effectivet3| image:: https://img.shields.io/conda/dn/bioconda/effectivet3.svg?style=flat
   :target: https://anaconda.org/bioconda/effectivet3
   :alt:   (downloads)
.. |docker_effectivet3| image:: https://quay.io/repository/biocontainers/effectivet3/status
   :target: https://quay.io/repository/biocontainers/effectivet3
.. _`effectivet3/tags`: https://quay.io/repository/biocontainers/effectivet3?tab=tags


.. raw:: html

    <script>
        var package = "effectivet3";
        var versions = ["1.0.1"];
    </script>





Notes
-----
EffectiveT3 is Java program which is packaged with a custom wrapper shell
script. This shell wrapper is called \"effectivet3\" and is on \$PATH by
default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want
to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"effectivet3 \-Xms512m \-Xmx1g ...\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/effectivet3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/effectivet3/README.html
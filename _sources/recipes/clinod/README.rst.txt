:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinod'
.. highlight: bash

clinod
======

.. conda:recipe:: clinod
   :replaces_section_title:
   :noindex:

   Command line NoD \(clinod\)\, for  predicting nucleolar localization sequences.

   :homepage: http://www.compbio.dundee.ac.uk/nod
   :license: Apache License, Version 2.0 + others used internally
   :recipe: /`clinod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinod/meta.yaml>`_

   


.. conda:package:: clinod

   |downloads_clinod| |docker_clinod|

   :versions:
      
      

      ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends openjdk: ``>=6``
   :depends python: 
   :depends snns: 
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

      mamba install clinod

   and update with::

      mamba update clinod

  To create a new environment, run::

      mamba create --name myenvname clinod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clinod:<tag>

   (see `clinod/tags`_ for valid values for ``<tag>``)


.. |downloads_clinod| image:: https://img.shields.io/conda/dn/bioconda/clinod.svg?style=flat
   :target: https://anaconda.org/bioconda/clinod
   :alt:   (downloads)
.. |docker_clinod| image:: https://quay.io/repository/biocontainers/clinod/status
   :target: https://quay.io/repository/biocontainers/clinod
.. _`clinod/tags`: https://quay.io/repository/biocontainers/clinod?tab=tags


.. raw:: html

    <script>
        var package = "clinod";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>





Notes
-----
Command line NoD \(clinod\) is Java program which is packaged with a custom
wrapper shell script. This shell wrapper is called \"clinod\" and is on \$PATH
by default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want
to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"clinod \-Xms512m \-Xmx1g ...\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinod/README.html
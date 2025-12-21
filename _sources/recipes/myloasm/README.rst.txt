:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'myloasm'
.. highlight: bash

myloasm
=======

.. conda:recipe:: myloasm
   :replaces_section_title:
   :noindex:

   myloasm \- high\-resolution metagenome assembly for \(noisy\) long reads

   :homepage: https://github.com/bluenote-1577/myloasm
   :documentation: https://github.com/bluenote-1577/myloasm/blob/v0.3.0/README.md
   
   :license: MIT / MIT
   :recipe: /`myloasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myloasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myloasm/meta.yaml>`_

   


.. conda:package:: myloasm

   |downloads_myloasm| |docker_myloasm|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install myloasm

   and update with::

      mamba update myloasm

  To create a new environment, run::

      mamba create --name myenvname myloasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/myloasm:<tag>

   (see `myloasm/tags`_ for valid values for ``<tag>``)


.. |downloads_myloasm| image:: https://img.shields.io/conda/dn/bioconda/myloasm.svg?style=flat
   :target: https://anaconda.org/bioconda/myloasm
   :alt:   (downloads)
.. |docker_myloasm| image:: https://quay.io/repository/biocontainers/myloasm/status
   :target: https://quay.io/repository/biocontainers/myloasm
.. _`myloasm/tags`: https://quay.io/repository/biocontainers/myloasm?tab=tags


.. raw:: html

    <script>
        var package = "myloasm";
        var versions = ["0.3.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/myloasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/myloasm/README.html
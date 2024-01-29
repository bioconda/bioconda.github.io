:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callstate'
.. highlight: bash

callstate
=========

.. conda:recipe:: callstate
   :replaces_section_title:
   :noindex:

   A replacement for GATK3 CallableLoci

   :homepage: https://github.com/LuobinY/Callstate
   :license: MIT
   :recipe: /`callstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate/meta.yaml>`_

   


.. conda:package:: callstate

   |downloads_callstate| |docker_callstate|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends pcre: ``>=8.44,<9.0a0``
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

      mamba install callstate

   and update with::

      mamba update callstate

  To create a new environment, run::

      mamba create --name myenvname callstate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/callstate:<tag>

   (see `callstate/tags`_ for valid values for ``<tag>``)


.. |downloads_callstate| image:: https://img.shields.io/conda/dn/bioconda/callstate.svg?style=flat
   :target: https://anaconda.org/bioconda/callstate
   :alt:   (downloads)
.. |docker_callstate| image:: https://quay.io/repository/biocontainers/callstate/status
   :target: https://quay.io/repository/biocontainers/callstate
.. _`callstate/tags`: https://quay.io/repository/biocontainers/callstate?tab=tags


.. raw:: html

    <script>
        var package = "callstate";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callstate/README.html
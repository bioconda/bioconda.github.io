:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakinator'
.. highlight: bash

breakinator
===========

.. conda:recipe:: breakinator
   :replaces_section_title:
   :noindex:

   Detection of foldback and chimeric read artifacts in PAF files

   :homepage: https://github.com/jheinz27/breakinator
   :license: MIT
   :recipe: /`breakinator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakinator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakinator/meta.yaml>`_

   


.. conda:package:: breakinator

   |downloads_breakinator| |docker_breakinator|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends python: 
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

      mamba install breakinator

   and update with::

      mamba update breakinator

  To create a new environment, run::

      mamba create --name myenvname breakinator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/breakinator:<tag>

   (see `breakinator/tags`_ for valid values for ``<tag>``)


.. |downloads_breakinator| image:: https://img.shields.io/conda/dn/bioconda/breakinator.svg?style=flat
   :target: https://anaconda.org/bioconda/breakinator
   :alt:   (downloads)
.. |docker_breakinator| image:: https://quay.io/repository/biocontainers/breakinator/status
   :target: https://quay.io/repository/biocontainers/breakinator
.. _`breakinator/tags`: https://quay.io/repository/biocontainers/breakinator?tab=tags


.. raw:: html

    <script>
        var package = "breakinator";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakinator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakinator/README.html
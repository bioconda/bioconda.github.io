:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgltools'
.. highlight: bash

mgltools
========

.. conda:recipe:: mgltools
   :replaces_section_title:
   :noindex:

   MGLTools is an program for visualization and analisys of molecular structures.

   :homepage: http://mgltools.scripps.edu/
   :license: OTHER
   :recipe: /`mgltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgltools/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`prepare_receptor`

   


.. conda:package:: mgltools

   |downloads_mgltools| |docker_mgltools|

   :versions:
      
      

      ``1.5.7-1``,  ``1.5.7-0``,  ``1.5.6-1``,  ``1.5.6-0``

      

   
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

      mamba install mgltools

   and update with::

      mamba update mgltools

  To create a new environment, run::

      mamba create --name myenvname mgltools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgltools:<tag>

   (see `mgltools/tags`_ for valid values for ``<tag>``)


.. |downloads_mgltools| image:: https://img.shields.io/conda/dn/bioconda/mgltools.svg?style=flat
   :target: https://anaconda.org/bioconda/mgltools
   :alt:   (downloads)
.. |docker_mgltools| image:: https://quay.io/repository/biocontainers/mgltools/status
   :target: https://quay.io/repository/biocontainers/mgltools
.. _`mgltools/tags`: https://quay.io/repository/biocontainers/mgltools?tab=tags


.. raw:: html

    <script>
        var package = "mgltools";
        var versions = ["1.5.7","1.5.7","1.5.6","1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgltools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphopia-sccmec'
.. highlight: bash

staphopia-sccmec
================

.. conda:recipe:: staphopia-sccmec
   :replaces_section_title:
   :noindex:

   Predicts Staphylococcus aureus SCCmec type based on primers.

   :homepage: https://github.com/staphopia/staphopia-sccmec
   :license: MIT
   :recipe: /`staphopia-sccmec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec/meta.yaml>`_
   :links: biotools: :biotools:`Staphopia`, doi: :doi:`10.7717/peerj.5261`

   


.. conda:package:: staphopia-sccmec

   |downloads_staphopia-sccmec| |docker_staphopia-sccmec|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends blast: 
   :depends executor: 
   :depends python: ``>=3``
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

      mamba install staphopia-sccmec

   and update with::

      mamba update staphopia-sccmec

  To create a new environment, run::

      mamba create --name myenvname staphopia-sccmec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/staphopia-sccmec:<tag>

   (see `staphopia-sccmec/tags`_ for valid values for ``<tag>``)


.. |downloads_staphopia-sccmec| image:: https://img.shields.io/conda/dn/bioconda/staphopia-sccmec.svg?style=flat
   :target: https://anaconda.org/bioconda/staphopia-sccmec
   :alt:   (downloads)
.. |docker_staphopia-sccmec| image:: https://quay.io/repository/biocontainers/staphopia-sccmec/status
   :target: https://quay.io/repository/biocontainers/staphopia-sccmec
.. _`staphopia-sccmec/tags`: https://quay.io/repository/biocontainers/staphopia-sccmec?tab=tags


.. raw:: html

    <script>
        var package = "staphopia-sccmec";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphopia-sccmec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphopia-sccmec/README.html
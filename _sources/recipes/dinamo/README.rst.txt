:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinamo'
.. highlight: bash

dinamo
======

.. conda:recipe:: dinamo
   :replaces_section_title:
   :noindex:

   An exact and efficient method for IUPAC motif discovery in DNA sequences

   :homepage: https://github.com/bonsai-team/DiNAMO/
   :license: `GPL / GPLv3 <https://raw.githubusercontent.com/bonsai-team/DiNAMO/master/LICENSE>`_
   :recipe: /`dinamo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo/meta.yaml>`_
   :links: biotools: :biotools:`DiNAMO`, doi: :doi:`10.1186/s12859-018-2215-1`

   


.. conda:package:: dinamo

   |downloads_dinamo| |docker_dinamo|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install dinamo

   and update with::

      mamba update dinamo

  To create a new environment, run::

      mamba create --name myenvname dinamo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dinamo:<tag>

   (see `dinamo/tags`_ for valid values for ``<tag>``)


.. |downloads_dinamo| image:: https://img.shields.io/conda/dn/bioconda/dinamo.svg?style=flat
   :target: https://anaconda.org/bioconda/dinamo
   :alt:   (downloads)
.. |docker_dinamo| image:: https://quay.io/repository/biocontainers/dinamo/status
   :target: https://quay.io/repository/biocontainers/dinamo
.. _`dinamo/tags`: https://quay.io/repository/biocontainers/dinamo?tab=tags


.. raw:: html

    <script>
        var package = "dinamo";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinamo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinamo/README.html
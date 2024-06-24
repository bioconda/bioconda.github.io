:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simba_pbg'
.. highlight: bash

simba_pbg
=========

.. conda:recipe:: simba_pbg
   :replaces_section_title:
   :noindex:

   A customized PyTorch\-BigGraph \(PBG\) package for \`simba\`

   :homepage: https://github.com/pinellolab/simba_pbg
   :license: BSD / BSD-3
   :recipe: /`simba_pbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba_pbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba_pbg/meta.yaml>`_

   


.. conda:package:: simba_pbg

   |downloads_simba_pbg| |docker_simba_pbg|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends attrs: ``>=18.2``
   :depends h5py: ``>=2.8``
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pytorch: ``>=1.7.1``
   :depends tqdm: 
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

      mamba install simba_pbg

   and update with::

      mamba update simba_pbg

  To create a new environment, run::

      mamba create --name myenvname simba_pbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simba_pbg:<tag>

   (see `simba_pbg/tags`_ for valid values for ``<tag>``)


.. |downloads_simba_pbg| image:: https://img.shields.io/conda/dn/bioconda/simba_pbg.svg?style=flat
   :target: https://anaconda.org/bioconda/simba_pbg
   :alt:   (downloads)
.. |docker_simba_pbg| image:: https://quay.io/repository/biocontainers/simba_pbg/status
   :target: https://quay.io/repository/biocontainers/simba_pbg
.. _`simba_pbg/tags`: https://quay.io/repository/biocontainers/simba_pbg?tab=tags


.. raw:: html

    <script>
        var package = "simba_pbg";
        var versions = ["1.2","1.2","1.2","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simba_pbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simba_pbg/README.html
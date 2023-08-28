:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compalignp'
.. highlight: bash

compalignp
==========

.. conda:recipe:: compalignp
   :replaces_section_title:
   :noindex:

   Compute fractional \"identity\" between trusted alignment and test alignment.

   :homepage: http://www.biophys.uni-duesseldorf.de/bralibase/
   :license: GPL
   :recipe: /`compalignp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compalignp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compalignp/meta.yaml>`_

   


.. conda:package:: compalignp

   |downloads_compalignp| |docker_compalignp|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
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

      mamba install compalignp

   and update with::

      mamba update compalignp

  To create a new environment, run::

      mamba create --name myenvname compalignp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/compalignp:<tag>

   (see `compalignp/tags`_ for valid values for ``<tag>``)


.. |downloads_compalignp| image:: https://img.shields.io/conda/dn/bioconda/compalignp.svg?style=flat
   :target: https://anaconda.org/bioconda/compalignp
   :alt:   (downloads)
.. |docker_compalignp| image:: https://quay.io/repository/biocontainers/compalignp/status
   :target: https://quay.io/repository/biocontainers/compalignp
.. _`compalignp/tags`: https://quay.io/repository/biocontainers/compalignp?tab=tags


.. raw:: html

    <script>
        var package = "compalignp";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compalignp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compalignp/README.html
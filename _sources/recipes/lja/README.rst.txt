:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lja'
.. highlight: bash

lja
===

.. conda:recipe:: lja
   :replaces_section_title:
   :noindex:

   La Jolla Assembler\(LJA\) \- tool for genome assembly from PacBio HiFI reads based on de Bruijn graphs

   :homepage: https://github.com/AntonBankevich/LJA
   :license: BSD-3-Clause
   :recipe: /`lja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lja/meta.yaml>`_

   


.. conda:package:: lja

   |downloads_lja| |docker_lja|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install lja

   and update with::

      mamba update lja

  To create a new environment, run::

      mamba create --name myenvname lja

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lja:<tag>

   (see `lja/tags`_ for valid values for ``<tag>``)


.. |downloads_lja| image:: https://img.shields.io/conda/dn/bioconda/lja.svg?style=flat
   :target: https://anaconda.org/bioconda/lja
   :alt:   (downloads)
.. |docker_lja| image:: https://quay.io/repository/biocontainers/lja/status
   :target: https://quay.io/repository/biocontainers/lja
.. _`lja/tags`: https://quay.io/repository/biocontainers/lja?tab=tags


.. raw:: html

    <script>
        var package = "lja";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lja/README.html
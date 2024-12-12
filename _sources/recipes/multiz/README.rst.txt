:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiz'
.. highlight: bash

multiz
======

.. conda:recipe:: multiz
   :replaces_section_title:
   :noindex:

   DNA multiple sequence aligner from Penn State\'s Miller lab.

   :homepage: http://www.bx.psu.edu/miller_lab/
   :license: MIT
   :recipe: /`multiz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiz/meta.yaml>`_
   :links: biotools: :biotools:`multiz`, biotools: :biotools:`tba`, biotools: :biotools:`roast`

   


.. conda:package:: multiz

   |downloads_multiz| |docker_multiz|

   :versions:
      
      

      ``11.2-6``,  ``11.2-5``,  ``11.2-4``,  ``11.2-3``,  ``11.2-2``,  ``11.2-1``,  ``11.2-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install multiz

   and update with::

      mamba update multiz

  To create a new environment, run::

      mamba create --name myenvname multiz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multiz:<tag>

   (see `multiz/tags`_ for valid values for ``<tag>``)


.. |downloads_multiz| image:: https://img.shields.io/conda/dn/bioconda/multiz.svg?style=flat
   :target: https://anaconda.org/bioconda/multiz
   :alt:   (downloads)
.. |docker_multiz| image:: https://quay.io/repository/biocontainers/multiz/status
   :target: https://quay.io/repository/biocontainers/multiz
.. _`multiz/tags`: https://quay.io/repository/biocontainers/multiz?tab=tags


.. raw:: html

    <script>
        var package = "multiz";
        var versions = ["11.2","11.2","11.2","11.2","11.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiz/README.html
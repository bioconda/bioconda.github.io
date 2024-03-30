:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genoflu'
.. highlight: bash

genoflu
=======

.. conda:recipe:: genoflu
   :replaces_section_title:
   :noindex:

   Influenza data pipeline to automate genotyping assignment.

   :homepage: https://github.com/USDA-VS/GenoFLU
   :license: GPL-3.0-or-later
   :recipe: /`genoflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu/meta.yaml>`_

   


.. conda:package:: genoflu

   |downloads_genoflu| |docker_genoflu|

   :versions:
      
      

      ``1.03-0``,  ``1.02-0``,  ``1.01-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.7``
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

      mamba install genoflu

   and update with::

      mamba update genoflu

  To create a new environment, run::

      mamba create --name myenvname genoflu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genoflu:<tag>

   (see `genoflu/tags`_ for valid values for ``<tag>``)


.. |downloads_genoflu| image:: https://img.shields.io/conda/dn/bioconda/genoflu.svg?style=flat
   :target: https://anaconda.org/bioconda/genoflu
   :alt:   (downloads)
.. |docker_genoflu| image:: https://quay.io/repository/biocontainers/genoflu/status
   :target: https://quay.io/repository/biocontainers/genoflu
.. _`genoflu/tags`: https://quay.io/repository/biocontainers/genoflu?tab=tags


.. raw:: html

    <script>
        var package = "genoflu";
        var versions = ["1.03","1.02","1.01","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genoflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genoflu/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paplot'
.. highlight: bash

paplot
======

.. conda:recipe:: paplot
   :replaces_section_title:
   :noindex:

   Automatic generation of cancer genome interactive report.

   :homepage: https://github.com/Genomon-Project/paplot.git
   :license: MIT
   :recipe: /`paplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paplot/meta.yaml>`_

   


.. conda:package:: paplot

   |downloads_paplot| |docker_paplot|

   :versions:
      
      

      ``0.5.6-0``

      

   
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

      mamba install paplot

   and update with::

      mamba update paplot

  To create a new environment, run::

      mamba create --name myenvname paplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paplot:<tag>

   (see `paplot/tags`_ for valid values for ``<tag>``)


.. |downloads_paplot| image:: https://img.shields.io/conda/dn/bioconda/paplot.svg?style=flat
   :target: https://anaconda.org/bioconda/paplot
   :alt:   (downloads)
.. |docker_paplot| image:: https://quay.io/repository/biocontainers/paplot/status
   :target: https://quay.io/repository/biocontainers/paplot
.. _`paplot/tags`: https://quay.io/repository/biocontainers/paplot?tab=tags


.. raw:: html

    <script>
        var package = "paplot";
        var versions = ["0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paplot/README.html
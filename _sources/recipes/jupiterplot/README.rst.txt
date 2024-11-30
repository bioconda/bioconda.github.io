:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jupiterplot'
.. highlight: bash

jupiterplot
===========

.. conda:recipe:: jupiterplot
   :replaces_section_title:
   :noindex:

   Circos Assembly Consistency \(Jupiter\) plot

   :homepage: https://github.com/JustinChu/JupiterPlot
   :documentation: https://github.com/JustinChu/JupiterPlot/blob/1.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`jupiterplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupiterplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jupiterplot/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1241235`

   


.. conda:package:: jupiterplot

   |downloads_jupiterplot| |docker_jupiterplot|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends circos: 
   :depends circos-tools: 
   :depends make: 
   :depends minimap2: 
   :depends perl: 
   :depends perl-gd: 
   :depends samtools: 
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

      mamba install jupiterplot

   and update with::

      mamba update jupiterplot

  To create a new environment, run::

      mamba create --name myenvname jupiterplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jupiterplot:<tag>

   (see `jupiterplot/tags`_ for valid values for ``<tag>``)


.. |downloads_jupiterplot| image:: https://img.shields.io/conda/dn/bioconda/jupiterplot.svg?style=flat
   :target: https://anaconda.org/bioconda/jupiterplot
   :alt:   (downloads)
.. |docker_jupiterplot| image:: https://quay.io/repository/biocontainers/jupiterplot/status
   :target: https://quay.io/repository/biocontainers/jupiterplot
.. _`jupiterplot/tags`: https://quay.io/repository/biocontainers/jupiterplot?tab=tags


.. raw:: html

    <script>
        var package = "jupiterplot";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jupiterplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jupiterplot/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromoplot'
.. highlight: bash

chromoplot
==========

.. conda:recipe:: chromoplot
   :replaces_section_title:
   :noindex:

   Publication\-quality genome and chromosome visualization toolkit

   :homepage: https://github.com/aseetharam/chromoplot
   :documentation: https://github.com/aseetharam/chromoplot#readme
   
   :license: MIT / MIT
   :recipe: /`chromoplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromoplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromoplot/meta.yaml>`_

   Chromoplot is a Python library for creating publication\-quality genome 
   visualizations. It provides a track\-based system for plotting genomic 
   features\, haplotypes\, gene models\, alignments\, coverage\, and synteny.
   Designed as a companion to haplophaser for polyploid genome analysis.



.. conda:package:: chromoplot

   |downloads_chromoplot| |docker_chromoplot|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends click: ``>=8.0``
   :depends matplotlib-base: ``>=3.5``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=6.0``
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

      mamba install chromoplot

   and update with::

      mamba update chromoplot

  To create a new environment, run::

      mamba create --name myenvname chromoplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromoplot:<tag>

   (see `chromoplot/tags`_ for valid values for ``<tag>``)


.. |downloads_chromoplot| image:: https://img.shields.io/conda/dn/bioconda/chromoplot.svg?style=flat
   :target: https://anaconda.org/bioconda/chromoplot
   :alt:   (downloads)
.. |docker_chromoplot| image:: https://quay.io/repository/biocontainers/chromoplot/status
   :target: https://quay.io/repository/biocontainers/chromoplot
.. _`chromoplot/tags`: https://quay.io/repository/biocontainers/chromoplot?tab=tags


.. raw:: html

    <script>
        var package = "chromoplot";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromoplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromoplot/README.html
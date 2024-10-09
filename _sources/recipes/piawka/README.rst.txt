:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piawka'
.. highlight: bash

piawka
======

.. conda:recipe:: piawka
   :replaces_section_title:
   :noindex:

   The powerful AWK script to calculate population statistics in VCF files with support for varying ploidy and missing data

   :homepage: https://github.com/novikovalab/piawka
   :documentation: https://github.com/novikovalab/piawka/wiki
   
   :license: MIT / MIT
   :recipe: /`piawka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piawka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piawka/meta.yaml>`_

   The powerful awk script to calculate π\, Dxy \(or πxy\, or Nei\'s D\) 
   and some more simple stats \(Fst\, Tajima\'s D\, Ronfort\'s rho\) in VCF files in the command line. 
   Developed to analyze arbitrary\-ploidy groups with substantial amounts of missing data.
   Largely inspired by https\:\/\/github.com\/ksamuk\/pixy



.. conda:package:: piawka

   |downloads_piawka| |docker_piawka|

   :versions:
      
      

      ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.10-0``

      

   
   :depends bash: 
   :depends gawk: ``>=5.0.0``
   :depends tabix: 
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

      mamba install piawka

   and update with::

      mamba update piawka

  To create a new environment, run::

      mamba create --name myenvname piawka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piawka:<tag>

   (see `piawka/tags`_ for valid values for ``<tag>``)


.. |downloads_piawka| image:: https://img.shields.io/conda/dn/bioconda/piawka.svg?style=flat
   :target: https://anaconda.org/bioconda/piawka
   :alt:   (downloads)
.. |docker_piawka| image:: https://quay.io/repository/biocontainers/piawka/status
   :target: https://quay.io/repository/biocontainers/piawka
.. _`piawka/tags`: https://quay.io/repository/biocontainers/piawka?tab=tags


.. raw:: html

    <script>
        var package = "piawka";
        var versions = ["0.8.2","0.8.1","0.7.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piawka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piawka/README.html
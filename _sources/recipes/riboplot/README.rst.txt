:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboplot'
.. highlight: bash

riboplot
========

.. conda:recipe:: riboplot
   :replaces_section_title:
   :noindex:

   Plot read counts of RiboSeq data from BAM format alignment files

   :homepage: https://github.com/vimalkvn/riboplot
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`riboplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboplot/meta.yaml>`_

   


.. conda:package:: riboplot

   |downloads_riboplot| |docker_riboplot|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends bedtools: ``<=2.24.0``
   :depends matplotlib: ``<=1.4.3``
   :depends mock: ``1.0.1``
   :depends pysam: ``<=0.8.3``
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install riboplot

   and update with::

      mamba update riboplot

  To create a new environment, run::

      mamba create --name myenvname riboplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riboplot:<tag>

   (see `riboplot/tags`_ for valid values for ``<tag>``)


.. |downloads_riboplot| image:: https://img.shields.io/conda/dn/bioconda/riboplot.svg?style=flat
   :target: https://anaconda.org/bioconda/riboplot
   :alt:   (downloads)
.. |docker_riboplot| image:: https://quay.io/repository/biocontainers/riboplot/status
   :target: https://quay.io/repository/biocontainers/riboplot
.. _`riboplot/tags`: https://quay.io/repository/biocontainers/riboplot?tab=tags


.. raw:: html

    <script>
        var package = "riboplot";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboplot/README.html
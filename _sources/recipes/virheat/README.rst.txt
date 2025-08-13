:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virheat'
.. highlight: bash

virheat
=======

.. conda:recipe:: virheat
   :replaces_section_title:
   :noindex:

   Visualize microbial evolution at the SNP level by creating a heatmap from vcf files.

   :homepage: https://github.com/jonas-fuchs/virHEAT
   :license: GPL-3.0-or-later
   :recipe: /`virheat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virheat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virheat/meta.yaml>`_

   


.. conda:package:: virheat

   |downloads_virheat| |docker_virheat|

   :versions:
      
      

      ``0.7.6-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5.4-0``,  ``0.5.3-0``

      

   
   :depends matplotlib-base: ``>=3.5.1,<=3.8.0``
   :depends numpy: ``>=1.23.3``
   :depends pandas: ``>=1.4.4``
   :depends python: ``>=3.9``
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

      mamba install virheat

   and update with::

      mamba update virheat

  To create a new environment, run::

      mamba create --name myenvname virheat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virheat:<tag>

   (see `virheat/tags`_ for valid values for ``<tag>``)


.. |downloads_virheat| image:: https://img.shields.io/conda/dn/bioconda/virheat.svg?style=flat
   :target: https://anaconda.org/bioconda/virheat
   :alt:   (downloads)
.. |docker_virheat| image:: https://quay.io/repository/biocontainers/virheat/status
   :target: https://quay.io/repository/biocontainers/virheat
.. _`virheat/tags`: https://quay.io/repository/biocontainers/virheat?tab=tags


.. raw:: html

    <script>
        var package = "virheat";
        var versions = ["0.7.6","0.7.4","0.7.3","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virheat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virheat/README.html
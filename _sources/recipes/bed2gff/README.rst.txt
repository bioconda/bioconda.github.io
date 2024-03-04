:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bed2gff'
.. highlight: bash

bed2gff
=======

.. conda:recipe:: bed2gff
   :replaces_section_title:
   :noindex:

   BED\-to\-GFF3 converter that runs in parallel

   :homepage: https://github.com/alejandrogzi/bed2gff
   :license: MIT / MIT
   :recipe: /`bed2gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gff/meta.yaml>`_

   


.. conda:package:: bed2gff

   |downloads_bed2gff| |docker_bed2gff|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install bed2gff

   and update with::

      mamba update bed2gff

  To create a new environment, run::

      mamba create --name myenvname bed2gff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bed2gff:<tag>

   (see `bed2gff/tags`_ for valid values for ``<tag>``)


.. |downloads_bed2gff| image:: https://img.shields.io/conda/dn/bioconda/bed2gff.svg?style=flat
   :target: https://anaconda.org/bioconda/bed2gff
   :alt:   (downloads)
.. |docker_bed2gff| image:: https://quay.io/repository/biocontainers/bed2gff/status
   :target: https://quay.io/repository/biocontainers/bed2gff
.. _`bed2gff/tags`: https://quay.io/repository/biocontainers/bed2gff?tab=tags


.. raw:: html

    <script>
        var package = "bed2gff";
        var versions = ["0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bed2gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bed2gff/README.html
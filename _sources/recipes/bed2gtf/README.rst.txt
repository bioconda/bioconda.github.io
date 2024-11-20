:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bed2gtf'
.. highlight: bash

bed2gtf
=======

.. conda:recipe:: bed2gtf
   :replaces_section_title:
   :noindex:

   A high\-performance BED\-to\-GTF converter written in Rust

   :homepage: https://github.com/alejandrogzi/bed2gtf
   :license: MIT / MIT
   :recipe: /`bed2gtf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gtf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gtf/meta.yaml>`_

   


.. conda:package:: bed2gtf

   |downloads_bed2gtf| |docker_bed2gtf|

   :versions:
      
      

      ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install bed2gtf

   and update with::

      mamba update bed2gtf

  To create a new environment, run::

      mamba create --name myenvname bed2gtf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bed2gtf:<tag>

   (see `bed2gtf/tags`_ for valid values for ``<tag>``)


.. |downloads_bed2gtf| image:: https://img.shields.io/conda/dn/bioconda/bed2gtf.svg?style=flat
   :target: https://anaconda.org/bioconda/bed2gtf
   :alt:   (downloads)
.. |docker_bed2gtf| image:: https://quay.io/repository/biocontainers/bed2gtf/status
   :target: https://quay.io/repository/biocontainers/bed2gtf
.. _`bed2gtf/tags`: https://quay.io/repository/biocontainers/bed2gtf?tab=tags


.. raw:: html

    <script>
        var package = "bed2gtf";
        var versions = ["1.9.3","1.9.2","1.9.1","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bed2gtf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bed2gtf/README.html
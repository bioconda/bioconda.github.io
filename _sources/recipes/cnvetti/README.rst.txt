:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnvetti'
.. highlight: bash

cnvetti
=======

.. conda:recipe:: cnvetti
   :replaces_section_title:
   :noindex:

   CNVetti is a CNV caller from HTS data.

   :homepage: https://github.com/bihealth/cnvetti
   :license: GPL3
   :recipe: /`cnvetti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvetti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnvetti/meta.yaml>`_

   


.. conda:package:: cnvetti

   |downloads_cnvetti| |docker_cnvetti|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends xz: ``>=5.2.4,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install cnvetti

   and update with::

      mamba update cnvetti

  To create a new environment, run::

      mamba create --name myenvname cnvetti

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnvetti:<tag>

   (see `cnvetti/tags`_ for valid values for ``<tag>``)


.. |downloads_cnvetti| image:: https://img.shields.io/conda/dn/bioconda/cnvetti.svg?style=flat
   :target: https://anaconda.org/bioconda/cnvetti
   :alt:   (downloads)
.. |docker_cnvetti| image:: https://quay.io/repository/biocontainers/cnvetti/status
   :target: https://quay.io/repository/biocontainers/cnvetti
.. _`cnvetti/tags`: https://quay.io/repository/biocontainers/cnvetti?tab=tags


.. raw:: html

    <script>
        var package = "cnvetti";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnvetti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnvetti/README.html
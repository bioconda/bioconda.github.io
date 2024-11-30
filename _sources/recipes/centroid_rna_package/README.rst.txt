:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centroid_rna_package'
.. highlight: bash

centroid_rna_package
====================

.. conda:recipe:: centroid_rna_package
   :replaces_section_title:
   :noindex:

   Collection of RNA secondary structure prediction programs based on gamma\-centroid estimator \(Hamada et. al. 2009\)

   :homepage: https://github.com/satoken/centroid-rna-package
   :license: GPL-V2
   :recipe: /`centroid_rna_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn601`, doi: :doi:`10.1093/bioinformatics/btp228`, doi: :doi:`10.1093/nar/gkq792`

   


.. conda:package:: centroid_rna_package

   |downloads_centroid_rna_package| |docker_centroid_rna_package|

   :versions:
      
      

      ``0.0.16-1``,  ``0.0.16-0``,  ``0.0.15-0``

      

   
   :depends viennarna: ``>=1.8``
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

      mamba install centroid_rna_package

   and update with::

      mamba update centroid_rna_package

  To create a new environment, run::

      mamba create --name myenvname centroid_rna_package

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/centroid_rna_package:<tag>

   (see `centroid_rna_package/tags`_ for valid values for ``<tag>``)


.. |downloads_centroid_rna_package| image:: https://img.shields.io/conda/dn/bioconda/centroid_rna_package.svg?style=flat
   :target: https://anaconda.org/bioconda/centroid_rna_package
   :alt:   (downloads)
.. |docker_centroid_rna_package| image:: https://quay.io/repository/biocontainers/centroid_rna_package/status
   :target: https://quay.io/repository/biocontainers/centroid_rna_package
.. _`centroid_rna_package/tags`: https://quay.io/repository/biocontainers/centroid_rna_package?tab=tags


.. raw:: html

    <script>
        var package = "centroid_rna_package";
        var versions = ["0.0.16","0.0.16","0.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centroid_rna_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centroid_rna_package/README.html
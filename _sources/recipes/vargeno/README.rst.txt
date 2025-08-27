:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vargeno'
.. highlight: bash

vargeno
=======

.. conda:recipe:: vargeno
   :replaces_section_title:
   :noindex:

   Fast SNP genotyping tool for whole genome sequence data and large SNP database.

   :homepage: https://github.com/medvedevgroup/vargeno
   :license: MIT
   :recipe: /`vargeno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty641`

   


.. conda:package:: vargeno

   |downloads_vargeno| |docker_vargeno|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install vargeno

   and update with::

      mamba update vargeno

  To create a new environment, run::

      mamba create --name myenvname vargeno

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vargeno:<tag>

   (see `vargeno/tags`_ for valid values for ``<tag>``)


.. |downloads_vargeno| image:: https://img.shields.io/conda/dn/bioconda/vargeno.svg?style=flat
   :target: https://anaconda.org/bioconda/vargeno
   :alt:   (downloads)
.. |docker_vargeno| image:: https://quay.io/repository/biocontainers/vargeno/status
   :target: https://quay.io/repository/biocontainers/vargeno
.. _`vargeno/tags`: https://quay.io/repository/biocontainers/vargeno?tab=tags


.. raw:: html

    <script>
        var package = "vargeno";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vargeno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vargeno/README.html
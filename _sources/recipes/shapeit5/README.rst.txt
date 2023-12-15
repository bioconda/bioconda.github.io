:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeit5'
.. highlight: bash

shapeit5
========

.. conda:recipe:: shapeit5
   :replaces_section_title:
   :noindex:

   Fast and accurate method for estimation of haplotypes \(phasing\)

   :homepage: https://odelaneau.github.io/shapeit5/
   :license: MIT
   :recipe: /`shapeit5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit5/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.10.19.512867`

   This package provides the software SHAPEIT5. SHAPEIT5 estimates haplotypes in large datasets \(WGS\, WES\, SNP array\)\, with a special focus on rare variants.


.. conda:package:: shapeit5

   |downloads_shapeit5| |docker_shapeit5|

   :versions:
      
      

      ``5.1.1-0``,  ``1.0.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.20.0a0``
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

      mamba install shapeit5

   and update with::

      mamba update shapeit5

  To create a new environment, run::

      mamba create --name myenvname shapeit5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shapeit5:<tag>

   (see `shapeit5/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeit5| image:: https://img.shields.io/conda/dn/bioconda/shapeit5.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeit5
   :alt:   (downloads)
.. |docker_shapeit5| image:: https://quay.io/repository/biocontainers/shapeit5/status
   :target: https://quay.io/repository/biocontainers/shapeit5
.. _`shapeit5/tags`: https://quay.io/repository/biocontainers/shapeit5?tab=tags


.. raw:: html

    <script>
        var package = "shapeit5";
        var versions = ["5.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit5/README.html
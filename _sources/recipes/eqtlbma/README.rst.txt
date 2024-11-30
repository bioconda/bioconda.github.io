:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eqtlbma'
.. highlight: bash

eqtlbma
=======

.. conda:recipe:: eqtlbma
   :replaces_section_title:
   :noindex:

   Package to detect eQTLs jointly in multiple subgroups \(e.g. tissues\) via Bayesian Model Averaging.

   :homepage: https://github.com/timflutre/eqtlbma
   :license: GPLv3
   :recipe: /`eqtlbma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eqtlbma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eqtlbma/meta.yaml>`_
   :links: biotools: :biotools:`eQtlBma`

   


.. conda:package:: eqtlbma

   |downloads_eqtlbma| |docker_eqtlbma|

   :versions:
      
      

      ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends gsl: ``2.4.*``
   :depends gsl: ``>=2.4,<2.5.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openblas: 
   :depends r-base: 
   :depends r-mass: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install eqtlbma

   and update with::

      mamba update eqtlbma

  To create a new environment, run::

      mamba create --name myenvname eqtlbma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eqtlbma:<tag>

   (see `eqtlbma/tags`_ for valid values for ``<tag>``)


.. |downloads_eqtlbma| image:: https://img.shields.io/conda/dn/bioconda/eqtlbma.svg?style=flat
   :target: https://anaconda.org/bioconda/eqtlbma
   :alt:   (downloads)
.. |docker_eqtlbma| image:: https://quay.io/repository/biocontainers/eqtlbma/status
   :target: https://quay.io/repository/biocontainers/eqtlbma
.. _`eqtlbma/tags`: https://quay.io/repository/biocontainers/eqtlbma?tab=tags


.. raw:: html

    <script>
        var package = "eqtlbma";
        var versions = ["1.3.3","1.3.3","1.3.3","1.3.3","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eqtlbma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eqtlbma/README.html
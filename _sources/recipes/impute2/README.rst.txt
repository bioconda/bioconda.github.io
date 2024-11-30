:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'impute2'
.. highlight: bash

impute2
=======

.. conda:recipe:: impute2
   :replaces_section_title:
   :noindex:

   Genotype imputation and haplotype phasing

   :homepage: https://mathgen.stats.ox.ac.uk/impute/impute_v2.html
   :license: Academic use, commerically restricted (http://www.stats.ox.ac.uk/~marchini/software/gwas/gwas.html#licence)
   :recipe: /`impute2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impute2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impute2/meta.yaml>`_
   :links: biotools: :biotools:`IMPUTE2`, doi: :doi:`10.1534/g3.111.001198`

   


.. conda:package:: impute2

   |downloads_impute2| |docker_impute2|

   :versions:
      
      

      ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``

      

   
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

      mamba install impute2

   and update with::

      mamba update impute2

  To create a new environment, run::

      mamba create --name myenvname impute2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/impute2:<tag>

   (see `impute2/tags`_ for valid values for ``<tag>``)


.. |downloads_impute2| image:: https://img.shields.io/conda/dn/bioconda/impute2.svg?style=flat
   :target: https://anaconda.org/bioconda/impute2
   :alt:   (downloads)
.. |docker_impute2| image:: https://quay.io/repository/biocontainers/impute2/status
   :target: https://quay.io/repository/biocontainers/impute2
.. _`impute2/tags`: https://quay.io/repository/biocontainers/impute2?tab=tags


.. raw:: html

    <script>
        var package = "impute2";
        var versions = ["2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/impute2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/impute2/README.html
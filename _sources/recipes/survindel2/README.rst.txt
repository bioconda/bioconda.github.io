:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'survindel2'
.. highlight: bash

survindel2
==========

.. conda:recipe:: survindel2
   :replaces_section_title:
   :noindex:

   A CNV caller for Illumina paired\-end WGS data.

   :homepage: https://github.com/kensung-lab/SurVIndel2
   :license: GPL3 / GPL-3.0-only
   :recipe: /`survindel2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survindel2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/survindel2/meta.yaml>`_

   SurVIndel2 is a fast and accurate CNV caller for Illumina paired\-end WGS data.



.. conda:package:: survindel2

   |downloads_survindel2| |docker_survindel2|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      

   
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: 
   :depends pyfaidx: ``>=0.5.9.1``
   :depends pysam: ``>=0.16.0.1``
   :depends scikit-learn: ``>=1.2.2``
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

      mamba install survindel2

   and update with::

      mamba update survindel2

  To create a new environment, run::

      mamba create --name myenvname survindel2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/survindel2:<tag>

   (see `survindel2/tags`_ for valid values for ``<tag>``)


.. |downloads_survindel2| image:: https://img.shields.io/conda/dn/bioconda/survindel2.svg?style=flat
   :target: https://anaconda.org/bioconda/survindel2
   :alt:   (downloads)
.. |docker_survindel2| image:: https://quay.io/repository/biocontainers/survindel2/status
   :target: https://quay.io/repository/biocontainers/survindel2
.. _`survindel2/tags`: https://quay.io/repository/biocontainers/survindel2?tab=tags


.. raw:: html

    <script>
        var package = "survindel2";
        var versions = ["1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/survindel2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/survindel2/README.html
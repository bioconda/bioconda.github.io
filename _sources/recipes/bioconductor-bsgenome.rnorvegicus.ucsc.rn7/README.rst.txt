:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.rnorvegicus.ucsc.rn7'
.. highlight: bash

bioconductor-bsgenome.rnorvegicus.ucsc.rn7
==========================================

.. conda:recipe:: bioconductor-bsgenome.rnorvegicus.ucsc.rn7
   :replaces_section_title:
   :noindex:

   Full genome sequences for Rattus norvegicus \(UCSC genome rn7\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Rnorvegicus.UCSC.rn7.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.rnorvegicus.ucsc.rn7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn7/meta.yaml>`_

   Full genome sequences for Rattus norvegicus \(Rat\) as provided by UCSC \(genome rn7\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.rnorvegicus.ucsc.rn7

   |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn7| |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn7|

   :versions:
      
      

      ``1.4.3-5``,  ``1.4.3-4``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-bsgenome.rnorvegicus.ucsc.rn7

   and update with::

      mamba update bioconductor-bsgenome.rnorvegicus.ucsc.rn7

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.rnorvegicus.ucsc.rn7

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn7:<tag>

   (see `bioconductor-bsgenome.rnorvegicus.ucsc.rn7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn7
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn7| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn7
.. _`bioconductor-bsgenome.rnorvegicus.ucsc.rn7/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn7?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.rnorvegicus.ucsc.rn7";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn7/README.html
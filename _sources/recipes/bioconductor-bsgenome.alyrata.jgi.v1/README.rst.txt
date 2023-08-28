:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.alyrata.jgi.v1'
.. highlight: bash

bioconductor-bsgenome.alyrata.jgi.v1
====================================

.. conda:recipe:: bioconductor-bsgenome.alyrata.jgi.v1
   :replaces_section_title:
   :noindex:

   Arabidopsis lyrata full genome \(JGI version V1.0\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Alyrata.JGI.v1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.alyrata.jgi.v1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.alyrata.jgi.v1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.alyrata.jgi.v1/meta.yaml>`_

   Arabidopsis lyrata 8x Release \[project ID 4002920\] as provided by JGI \( snapshot from March 24\, 2011\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.alyrata.jgi.v1

   |downloads_bioconductor-bsgenome.alyrata.jgi.v1| |docker_bioconductor-bsgenome.alyrata.jgi.v1|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bsgenome.alyrata.jgi.v1

   and update with::

      mamba update bioconductor-bsgenome.alyrata.jgi.v1

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.alyrata.jgi.v1

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.alyrata.jgi.v1:<tag>

   (see `bioconductor-bsgenome.alyrata.jgi.v1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.alyrata.jgi.v1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.alyrata.jgi.v1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.alyrata.jgi.v1
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.alyrata.jgi.v1| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.alyrata.jgi.v1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.alyrata.jgi.v1
.. _`bioconductor-bsgenome.alyrata.jgi.v1/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.alyrata.jgi.v1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.alyrata.jgi.v1";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.alyrata.jgi.v1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.alyrata.jgi.v1/README.html
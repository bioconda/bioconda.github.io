:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.cjacchus.ucsc.caljac4'
.. highlight: bash

bioconductor-bsgenome.cjacchus.ucsc.caljac4
===========================================

.. conda:recipe:: bioconductor-bsgenome.cjacchus.ucsc.caljac4
   :replaces_section_title:
   :noindex:

   Full genome sequences for Callithrix jacchus \(UCSC version calJac4\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Cjacchus.UCSC.calJac4.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.cjacchus.ucsc.caljac4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.cjacchus.ucsc.caljac4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.cjacchus.ucsc.caljac4/meta.yaml>`_

   Full genome sequences for Callithrix jacchus \(Marmoset\) as provided by UCSC \(calJac4\, May 2020\) and wrapped in a BSgenome object.


.. conda:package:: bioconductor-bsgenome.cjacchus.ucsc.caljac4

   |downloads_bioconductor-bsgenome.cjacchus.ucsc.caljac4| |docker_bioconductor-bsgenome.cjacchus.ucsc.caljac4|

   :versions:
      
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      

   
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

      mamba install bioconductor-bsgenome.cjacchus.ucsc.caljac4

   and update with::

      mamba update bioconductor-bsgenome.cjacchus.ucsc.caljac4

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.cjacchus.ucsc.caljac4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.cjacchus.ucsc.caljac4:<tag>

   (see `bioconductor-bsgenome.cjacchus.ucsc.caljac4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.cjacchus.ucsc.caljac4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.cjacchus.ucsc.caljac4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.cjacchus.ucsc.caljac4
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.cjacchus.ucsc.caljac4| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.cjacchus.ucsc.caljac4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.cjacchus.ucsc.caljac4
.. _`bioconductor-bsgenome.cjacchus.ucsc.caljac4/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.cjacchus.ucsc.caljac4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.cjacchus.ucsc.caljac4";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.cjacchus.ucsc.caljac4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.cjacchus.ucsc.caljac4/README.html
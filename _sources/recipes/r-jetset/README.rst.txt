:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-jetset'
.. highlight: bash

r-jetset
========

.. conda:recipe:: r-jetset
   :replaces_section_title:
   :noindex:

   On Affymetrix gene expression microarrays\, a single gene may be measured by multiple probe sets. This can present a mild conundrum when attempting to evaluate a gene \"signature\" that is defined by gene names rather than by specific probe sets. This package provides a one\-to\-one mapping from gene to \"best\" probe set for four Affymetrix human gene expression microarrays\: hgu95av2\, hgu133a\, hgu133plus2\, and u133x3p. This package also includes the pre\-calculated probe set quality scores that were used to define the mapping.

   :homepage: http://www.cbs.dtu.dk/biotools/jetset/
   :license: OTHER / Artistic-2.0
   :recipe: /`r-jetset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jetset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jetset/meta.yaml>`_

   


.. conda:package:: r-jetset

   |downloads_r-jetset| |docker_r-jetset|

   :versions:
      
      

      ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-org.hs.eg.db: 
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

      mamba install r-jetset

   and update with::

      mamba update r-jetset

  To create a new environment, run::

      mamba create --name myenvname r-jetset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-jetset:<tag>

   (see `r-jetset/tags`_ for valid values for ``<tag>``)


.. |downloads_r-jetset| image:: https://img.shields.io/conda/dn/bioconda/r-jetset.svg?style=flat
   :target: https://anaconda.org/bioconda/r-jetset
   :alt:   (downloads)
.. |docker_r-jetset| image:: https://quay.io/repository/biocontainers/r-jetset/status
   :target: https://quay.io/repository/biocontainers/r-jetset
.. _`r-jetset/tags`: https://quay.io/repository/biocontainers/r-jetset?tab=tags


.. raw:: html

    <script>
        var package = "r-jetset";
        var versions = ["3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-jetset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-jetset/README.html
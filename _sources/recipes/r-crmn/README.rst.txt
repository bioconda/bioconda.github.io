:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crmn'
.. highlight: bash

r-crmn
======

.. conda:recipe:: r-crmn
   :replaces_section_title:
   :noindex:

   Implements the Cross\-contribution Compensating Multiple standard Normalization \(CCMN\) method described in Redestig et al. \(2009\) Analytical Chemistry \<doi\:10.1021\/ac901143w\> and other normalization algorithms.

   :homepage: https://github.com/hredestig/crmn
   :license: GPL3 / GPL-3
   :recipe: /`r-crmn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn/meta.yaml>`_

   


.. conda:package:: r-crmn

   |downloads_r-crmn| |docker_r-crmn|

   :versions:
      
      

      ``0.0.21-4``,  ``0.0.21-3``,  ``0.0.21-2``,  ``0.0.21-1``,  ``0.0.21-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-pcamethods: ``>=1.56.0``
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

      mamba install r-crmn

   and update with::

      mamba update r-crmn

  To create a new environment, run::

      mamba create --name myenvname r-crmn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-crmn:<tag>

   (see `r-crmn/tags`_ for valid values for ``<tag>``)


.. |downloads_r-crmn| image:: https://img.shields.io/conda/dn/bioconda/r-crmn.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crmn
   :alt:   (downloads)
.. |docker_r-crmn| image:: https://quay.io/repository/biocontainers/r-crmn/status
   :target: https://quay.io/repository/biocontainers/r-crmn
.. _`r-crmn/tags`: https://quay.io/repository/biocontainers/r-crmn?tab=tags


.. raw:: html

    <script>
        var package = "r-crmn";
        var versions = ["0.0.21","0.0.21","0.0.21","0.0.21","0.0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crmn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crmn/README.html
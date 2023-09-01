:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'updio'
.. highlight: bash

updio
=====

.. conda:recipe:: updio
   :replaces_section_title:
   :noindex:

   UPDio is designed to identify uniparental disomy in probands of trio VCF data.

   :homepage: https://github.com/rhpvorderman/updio
   :license: gpl-2.0-or-later
   :recipe: /`updio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio/meta.yaml>`_

   


.. conda:package:: updio

   |downloads_updio| |docker_updio|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-quantsmooth: 
   :depends perl: ``<6``
   :depends perl-iterator-simple: 
   :depends perl-list-moreutils: 
   :depends perl-math-round: 
   :depends perl-path-class: 
   :depends perl-statistics-r: 
   :depends perl-vcftools-vcf: 
   :depends r-ggplot2: 
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

      mamba install updio

   and update with::

      mamba update updio

  To create a new environment, run::

      mamba create --name myenvname updio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/updio:<tag>

   (see `updio/tags`_ for valid values for ``<tag>``)


.. |downloads_updio| image:: https://img.shields.io/conda/dn/bioconda/updio.svg?style=flat
   :target: https://anaconda.org/bioconda/updio
   :alt:   (downloads)
.. |docker_updio| image:: https://quay.io/repository/biocontainers/updio/status
   :target: https://quay.io/repository/biocontainers/updio
.. _`updio/tags`: https://quay.io/repository/biocontainers/updio?tab=tags


.. raw:: html

    <script>
        var package = "updio";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/updio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/updio/README.html
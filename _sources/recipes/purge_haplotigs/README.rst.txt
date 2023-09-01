:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_haplotigs'
.. highlight: bash

purge_haplotigs
===============

.. conda:recipe:: purge_haplotigs
   :replaces_section_title:
   :noindex:

   Pipeline to help with curating heterozygous diploid genome assemblies.

   :homepage: https://bitbucket.org/mroachawri/purge_haplotigs/
   :license: MIT / MIT
   :recipe: /`purge_haplotigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs/meta.yaml>`_

   


.. conda:package:: purge_haplotigs

   |downloads_purge_haplotigs| |docker_purge_haplotigs|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.25.0``
   :depends make: ``>=4.2.1``
   :depends minimap2: ``>=2.12``
   :depends perl: ``>=5.22.0``
   :depends r-base: ``>=3.4.1``
   :depends r-ggplot2: ``>=2.2.1``
   :depends samtools: ``>=1.3.1``
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

      mamba install purge_haplotigs

   and update with::

      mamba update purge_haplotigs

  To create a new environment, run::

      mamba create --name myenvname purge_haplotigs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/purge_haplotigs:<tag>

   (see `purge_haplotigs/tags`_ for valid values for ``<tag>``)


.. |downloads_purge_haplotigs| image:: https://img.shields.io/conda/dn/bioconda/purge_haplotigs.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_haplotigs
   :alt:   (downloads)
.. |docker_purge_haplotigs| image:: https://quay.io/repository/biocontainers/purge_haplotigs/status
   :target: https://quay.io/repository/biocontainers/purge_haplotigs
.. _`purge_haplotigs/tags`: https://quay.io/repository/biocontainers/purge_haplotigs?tab=tags


.. raw:: html

    <script>
        var package = "purge_haplotigs";
        var versions = ["1.1.2","1.1.1","1.1.1","1.1.0","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_haplotigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_haplotigs/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goenrichment'
.. highlight: bash

goenrichment
============

.. conda:recipe:: goenrichment
   :replaces_section_title:
   :noindex:

   GOEnrichment analyses a set of gene products for GO term enrichment

   :homepage: https://github.com/DanFaria/GOEnrichment
   :license: Apache License 2.0
   :recipe: /`goenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goenrichment/meta.yaml>`_

   


.. conda:package:: goenrichment

   |downloads_goenrichment| |docker_goenrichment|

   :versions:
      
      

      ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install goenrichment

   and update with::

      mamba update goenrichment

  To create a new environment, run::

      mamba create --name myenvname goenrichment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goenrichment:<tag>

   (see `goenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_goenrichment| image:: https://img.shields.io/conda/dn/bioconda/goenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/goenrichment
   :alt:   (downloads)
.. |docker_goenrichment| image:: https://quay.io/repository/biocontainers/goenrichment/status
   :target: https://quay.io/repository/biocontainers/goenrichment
.. _`goenrichment/tags`: https://quay.io/repository/biocontainers/goenrichment?tab=tags


.. raw:: html

    <script>
        var package = "goenrichment";
        var versions = ["2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goenrichment/README.html
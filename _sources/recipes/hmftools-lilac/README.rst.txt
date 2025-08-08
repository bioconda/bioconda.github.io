:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-lilac'
.. highlight: bash

hmftools-lilac
==============

.. conda:recipe:: hmftools-lilac
   :replaces_section_title:
   :noindex:

   LILAC is a WGS tool to determine HLA Class I types.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/lilac/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-lilac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-lilac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-lilac/meta.yaml>`_

   


.. conda:package:: hmftools-lilac

   |downloads_hmftools-lilac| |docker_hmftools-lilac|

   :versions:
      
      

      ``1.7.1-0``,  ``1.6-1``,  ``1.6-0``,  ``1.4.2-0``,  ``1.1-0``

      

   
   :depends openjdk: ``>=8,<=21``
   :depends zlib: 
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

      mamba install hmftools-lilac

   and update with::

      mamba update hmftools-lilac

  To create a new environment, run::

      mamba create --name myenvname hmftools-lilac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-lilac:<tag>

   (see `hmftools-lilac/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-lilac| image:: https://img.shields.io/conda/dn/bioconda/hmftools-lilac.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-lilac
   :alt:   (downloads)
.. |docker_hmftools-lilac| image:: https://quay.io/repository/biocontainers/hmftools-lilac/status
   :target: https://quay.io/repository/biocontainers/hmftools-lilac
.. _`hmftools-lilac/tags`: https://quay.io/repository/biocontainers/hmftools-lilac?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-lilac";
        var versions = ["1.7.1","1.6","1.6","1.4.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-lilac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-lilac/README.html
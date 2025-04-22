:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-cider'
.. highlight: bash

hmftools-cider
==============

.. conda:recipe:: hmftools-cider
   :replaces_section_title:
   :noindex:

   Determine a comprehensive list of CDR3 sequences for each of the IG and TCR loci from RNA and DNA sequence data.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/cider/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-cider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cider/meta.yaml>`_

   


.. conda:package:: hmftools-cider

   |downloads_hmftools-cider| |docker_hmftools-cider|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends blast: 
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

      mamba install hmftools-cider

   and update with::

      mamba update hmftools-cider

  To create a new environment, run::

      mamba create --name myenvname hmftools-cider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-cider:<tag>

   (see `hmftools-cider/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-cider| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cider.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-cider
   :alt:   (downloads)
.. |docker_hmftools-cider| image:: https://quay.io/repository/biocontainers/hmftools-cider/status
   :target: https://quay.io/repository/biocontainers/hmftools-cider
.. _`hmftools-cider/tags`: https://quay.io/repository/biocontainers/hmftools-cider?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-cider";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cider/README.html
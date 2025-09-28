:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cats-rb'
.. highlight: bash

cats-rb
=======

.. conda:recipe:: cats-rb
   :replaces_section_title:
   :noindex:

   Reference\-based transcriptome assembly quality assessment tool.

   :homepage: https://github.com/bodulic/CATS-rb
   :documentation: https://github.com/bodulic/CATS-rb/blob/main/README.md
   
   :license: MIT
   :recipe: /`cats-rb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rb/meta.yaml>`_

   CATS\-rb evaluates transcriptome assemblies using the reference genome of the corresponding species.



.. conda:package:: cats-rb

   |downloads_cats-rb| |docker_cats-rb|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bash: 
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-genomicdistributions: 
   :depends bioconductor-genomicranges: 
   :depends coreutils: 
   :depends gawk: 
   :depends pandoc: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-egg: 
   :depends r-ggdist: 
   :depends r-ggplot2: 
   :depends r-ggvenndiagram: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rmarkdown: 
   :depends r-upsetr: 
   :depends sed: 
   :depends spaln: ``>=3.0.0``
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

      mamba install cats-rb

   and update with::

      mamba update cats-rb

  To create a new environment, run::

      mamba create --name myenvname cats-rb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cats-rb:<tag>

   (see `cats-rb/tags`_ for valid values for ``<tag>``)


.. |downloads_cats-rb| image:: https://img.shields.io/conda/dn/bioconda/cats-rb.svg?style=flat
   :target: https://anaconda.org/bioconda/cats-rb
   :alt:   (downloads)
.. |docker_cats-rb| image:: https://quay.io/repository/biocontainers/cats-rb/status
   :target: https://quay.io/repository/biocontainers/cats-rb
.. _`cats-rb/tags`: https://quay.io/repository/biocontainers/cats-rb?tab=tags


.. raw:: html

    <script>
        var package = "cats-rb";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cats-rb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cats-rb/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-struct'
.. highlight: bash

bioconductor-struct
===================

.. conda:recipe:: bioconductor-struct
   :replaces_section_title:
   :noindex:

   Statistics in R Using Class\-based Templates

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/struct.html
   :license: GPL-3
   :recipe: /`bioconductor-struct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct/meta.yaml>`_

   Defines and includes a set of class\-based templates for developing and implementing data processing and analysis workflows\, with a strong emphasis on statistics and machine learning. The templates can be used and where needed extended to \'wrap\' tools and methods from other packages into a common standardised structure to allow for effective and fast integration. Model objects can be combined into sequences\, and sequences nested in iterators using overloaded operators to simplify and improve readability of the code. Ontology lookup has been integrated and implemented to provide standardised definitions for methods\, inputs and outputs wrapped using the class\-based templates.


.. conda:package:: bioconductor-struct

   |downloads_bioconductor-struct| |docker_bioconductor-struct|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rols: ``>=2.30.0,<2.31.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-knitr: 
   :depends r-ontologyindex: 
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

      mamba install bioconductor-struct

   and update with::

      mamba update bioconductor-struct

  To create a new environment, run::

      mamba create --name myenvname bioconductor-struct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-struct:<tag>

   (see `bioconductor-struct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-struct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-struct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-struct
   :alt:   (downloads)
.. |docker_bioconductor-struct| image:: https://quay.io/repository/biocontainers/bioconductor-struct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-struct
.. _`bioconductor-struct/tags`: https://quay.io/repository/biocontainers/bioconductor-struct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-struct";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-struct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-struct/README.html
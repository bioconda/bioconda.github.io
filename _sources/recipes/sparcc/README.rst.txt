:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparcc'
.. highlight: bash

sparcc
======

.. conda:recipe:: sparcc
   :replaces_section_title:
   :noindex:

   SparCC is a python module for computing correlations in compositional data \(16S\, metagenomics\, etc\).

   :homepage: https://bitbucket.org/yonatanf/sparcc
   :license: MIT
   :recipe: /`sparcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1002687`

   


.. conda:package:: sparcc

   |downloads_sparcc| |docker_sparcc|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install sparcc

   and update with::

      mamba update sparcc

  To create a new environment, run::

      mamba create --name myenvname sparcc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sparcc:<tag>

   (see `sparcc/tags`_ for valid values for ``<tag>``)


.. |downloads_sparcc| image:: https://img.shields.io/conda/dn/bioconda/sparcc.svg?style=flat
   :target: https://anaconda.org/bioconda/sparcc
   :alt:   (downloads)
.. |docker_sparcc| image:: https://quay.io/repository/biocontainers/sparcc/status
   :target: https://quay.io/repository/biocontainers/sparcc
.. _`sparcc/tags`: https://quay.io/repository/biocontainers/sparcc?tab=tags


.. raw:: html

    <script>
        var package = "sparcc";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparcc/README.html
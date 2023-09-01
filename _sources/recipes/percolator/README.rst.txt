:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'percolator'
.. highlight: bash

percolator
==========

.. conda:recipe:: percolator
   :replaces_section_title:
   :noindex:

   Semi\-supervised learning for peptide identification from shotgun proteomics datasets

   :homepage: https://github.com/percolator/percolator
   :license: Apache 2.0
   :recipe: /`percolator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator/meta.yaml>`_
   :links: biotools: :biotools:`Percolator`, doi: :doi:`10.1007/s13361-016-1460-7`

   


.. conda:package:: percolator

   |downloads_percolator| |docker_percolator|

   :versions:
      
      

      ``3.5-1``,  ``3.5-0``,  ``3.4-1``,  ``3.4-0``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends sqlite: ``>=3.33.0,<4.0a0``
   :depends xerces-c: ``>=3.2.3,<3.3.0a0``
   :depends xsd: 
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

      mamba install percolator

   and update with::

      mamba update percolator

  To create a new environment, run::

      mamba create --name myenvname percolator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/percolator:<tag>

   (see `percolator/tags`_ for valid values for ``<tag>``)


.. |downloads_percolator| image:: https://img.shields.io/conda/dn/bioconda/percolator.svg?style=flat
   :target: https://anaconda.org/bioconda/percolator
   :alt:   (downloads)
.. |docker_percolator| image:: https://quay.io/repository/biocontainers/percolator/status
   :target: https://quay.io/repository/biocontainers/percolator
.. _`percolator/tags`: https://quay.io/repository/biocontainers/percolator?tab=tags


.. raw:: html

    <script>
        var package = "percolator";
        var versions = ["3.5","3.5","3.4","3.4","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/percolator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/percolator/README.html
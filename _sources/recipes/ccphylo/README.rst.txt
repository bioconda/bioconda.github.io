:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccphylo'
.. highlight: bash

ccphylo
=======

.. conda:recipe:: ccphylo
   :replaces_section_title:
   :noindex:

   CCPhylo enables phylogenetic analysis of samples based on overlaps between nucleotide created by e.g. KMA. Input file\(s\) may be given as non\-option arguments succeding all options.

   :homepage: https://bitbucket.org/genomicepidemiology/ccphylo
   :license: Apache-2.0
   :recipe: /`ccphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac774`, doi: :doi:`10.1093/biomethods/bpab008`

   


.. conda:package:: ccphylo

   |downloads_ccphylo| |docker_ccphylo|

   :versions:
      
      

      ``0.8.2-3``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``

      

   
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install ccphylo

   and update with::

      mamba update ccphylo

  To create a new environment, run::

      mamba create --name myenvname ccphylo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ccphylo:<tag>

   (see `ccphylo/tags`_ for valid values for ``<tag>``)


.. |downloads_ccphylo| image:: https://img.shields.io/conda/dn/bioconda/ccphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/ccphylo
   :alt:   (downloads)
.. |docker_ccphylo| image:: https://quay.io/repository/biocontainers/ccphylo/status
   :target: https://quay.io/repository/biocontainers/ccphylo
.. _`ccphylo/tags`: https://quay.io/repository/biocontainers/ccphylo?tab=tags


.. raw:: html

    <script>
        var package = "ccphylo";
        var versions = ["0.8.2","0.8.2","0.8.2","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccphylo/README.html
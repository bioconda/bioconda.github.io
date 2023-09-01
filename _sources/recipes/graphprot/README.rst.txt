:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphprot'
.. highlight: bash

graphprot
=========

.. conda:recipe:: graphprot
   :replaces_section_title:
   :noindex:

   GraphProt is a tool for modelling binding preferences of RNA\-binding proteins from high\-throughput experiments such as CLIP\-seq and RNAcompete.

   :homepage: https://github.com/dmaticzka/graphprot
   :license: MIT
   :recipe: /`graphprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot/meta.yaml>`_

   


.. conda:package:: graphprot

   |downloads_graphprot| |docker_graphprot|

   :versions:
      
      

      ``1.1.7-4``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``

      

   
   :depends coreutils: 
   :depends curl: ``>=7.61.0,<8.0a0``
   :depends gawk: 
   :depends libstdcxx-ng: ``>=4.9``
   :depends libsvm: ``>=3.21,<3.22.0a0``
   :depends make: 
   :depends openmp: 
   :depends perl-getopt-long: 
   :depends r-plyr: 
   :depends r-prroc: 
   :depends rnashapes: ``<3``
   :depends weblogo: ``>=3``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install graphprot

   and update with::

      mamba update graphprot

  To create a new environment, run::

      mamba create --name myenvname graphprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphprot:<tag>

   (see `graphprot/tags`_ for valid values for ``<tag>``)


.. |downloads_graphprot| image:: https://img.shields.io/conda/dn/bioconda/graphprot.svg?style=flat
   :target: https://anaconda.org/bioconda/graphprot
   :alt:   (downloads)
.. |docker_graphprot| image:: https://quay.io/repository/biocontainers/graphprot/status
   :target: https://quay.io/repository/biocontainers/graphprot
.. _`graphprot/tags`: https://quay.io/repository/biocontainers/graphprot?tab=tags


.. raw:: html

    <script>
        var package = "graphprot";
        var versions = ["1.1.7","1.1.7","1.1.7","1.1.7","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphprot/README.html
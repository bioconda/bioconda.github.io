:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomonsv'
.. highlight: bash

nanomonsv
=========

.. conda:recipe:: nanomonsv
   :replaces_section_title:
   :noindex:

   Python tools for detecting structural variation from nanopore sequence data

   :homepage: https://github.com/friend1ws/nanomonsv
   :license: GPL-3.0
   :recipe: /`nanomonsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomonsv/meta.yaml>`_

   


.. conda:package:: nanomonsv

   |downloads_nanomonsv| |docker_nanomonsv|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends bwa: ``>=0.7.17``
   :depends htslib: 
   :depends mafft: ``>=7.407``
   :depends minimap2: ``>=2.24``
   :depends numpy: ``>=1.23.0``
   :depends parasail-python: ``>=1.2.4``
   :depends pysam: ``>=0.19.1``
   :depends python: ``>=3.6``
   :depends racon: ``>=1.4.3``
   :depends repeatmasker: ``>=4.1.1``
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

      mamba install nanomonsv

   and update with::

      mamba update nanomonsv

  To create a new environment, run::

      mamba create --name myenvname nanomonsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanomonsv:<tag>

   (see `nanomonsv/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomonsv| image:: https://img.shields.io/conda/dn/bioconda/nanomonsv.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomonsv
   :alt:   (downloads)
.. |docker_nanomonsv| image:: https://quay.io/repository/biocontainers/nanomonsv/status
   :target: https://quay.io/repository/biocontainers/nanomonsv
.. _`nanomonsv/tags`: https://quay.io/repository/biocontainers/nanomonsv?tab=tags


.. raw:: html

    <script>
        var package = "nanomonsv";
        var versions = ["0.7.2","0.7.0","0.6.0","0.5.1","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomonsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomonsv/README.html
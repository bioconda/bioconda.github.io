:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'replidec'
.. highlight: bash

replidec
========

.. conda:recipe:: replidec
   :replaces_section_title:
   :noindex:

   Replication Cycle Decipher for Phages

   :homepage: https://github.com/deng-lab/Replidec
   :license: MIT / MIT
   :recipe: /`replidec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/replidec/meta.yaml>`_

   


.. conda:package:: replidec

   |downloads_replidec| |docker_replidec|

   :versions:
      
      

      ``0.3.1.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends hmmer: 
   :depends mmseqs2: 
   :depends numpy: ``>=1.23.1``
   :depends prodigal: 
   :depends python: ``>=3.9``
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

      mamba install replidec

   and update with::

      mamba update replidec

  To create a new environment, run::

      mamba create --name myenvname replidec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/replidec:<tag>

   (see `replidec/tags`_ for valid values for ``<tag>``)


.. |downloads_replidec| image:: https://img.shields.io/conda/dn/bioconda/replidec.svg?style=flat
   :target: https://anaconda.org/bioconda/replidec
   :alt:   (downloads)
.. |docker_replidec| image:: https://quay.io/repository/biocontainers/replidec/status
   :target: https://quay.io/repository/biocontainers/replidec
.. _`replidec/tags`: https://quay.io/repository/biocontainers/replidec?tab=tags


.. raw:: html

    <script>
        var package = "replidec";
        var versions = ["0.3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/replidec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/replidec/README.html
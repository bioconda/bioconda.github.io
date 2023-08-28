:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermikit'
.. highlight: bash

fermikit
========

.. conda:recipe:: fermikit
   :replaces_section_title:
   :noindex:

   FermiKit is a de novo assembly based variant calling pipeline for deep Illumina resequencing data.

   :homepage: https://github.com/lh3/fermikit
   :license: Unknown
   :recipe: /`fermikit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit/meta.yaml>`_

   


.. conda:package:: fermikit

   |downloads_fermikit| |docker_fermikit|

   :versions:
      
      

      ``0.14.dev1-1``,  ``0.14.dev1-0``

      

   
   :depends bfc: ``==r181``
   :depends bwa: ``==0.7.15``
   :depends fermi2: ``==r193``
   :depends htsbox: ``==r327``
   :depends perl: ``5.22.0*``
   :depends ropebwt2: ``==r187``
   :depends seqtk: ``==r82``
   :depends trimadap: ``==r10``
   :depends zlib: ``1.2.11*``
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

      mamba install fermikit

   and update with::

      mamba update fermikit

  To create a new environment, run::

      mamba create --name myenvname fermikit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fermikit:<tag>

   (see `fermikit/tags`_ for valid values for ``<tag>``)


.. |downloads_fermikit| image:: https://img.shields.io/conda/dn/bioconda/fermikit.svg?style=flat
   :target: https://anaconda.org/bioconda/fermikit
   :alt:   (downloads)
.. |docker_fermikit| image:: https://quay.io/repository/biocontainers/fermikit/status
   :target: https://quay.io/repository/biocontainers/fermikit
.. _`fermikit/tags`: https://quay.io/repository/biocontainers/fermikit?tab=tags


.. raw:: html

    <script>
        var package = "fermikit";
        var versions = ["0.14.dev1","0.14.dev1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermikit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermikit/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npinv'
.. highlight: bash

npinv
=====

.. conda:recipe:: npinv
   :replaces_section_title:
   :noindex:

   an accurate tool for detecting and genotyping inversion using multiple alignment long reads

   :homepage: https://github.com/haojingshao/npInv
   :license: MIT
   :recipe: /`npinv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npinv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npinv/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2252-9`

   


.. conda:package:: npinv

   |downloads_npinv| |docker_npinv|

   :versions:
      
      

      ``1.24-6``,  ``1.24-5``,  ``1.24-4``,  ``1.24-3``,  ``1.24-2``,  ``1.24-1``,  ``1.24-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
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

      mamba install npinv

   and update with::

      mamba update npinv

  To create a new environment, run::

      mamba create --name myenvname npinv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/npinv:<tag>

   (see `npinv/tags`_ for valid values for ``<tag>``)


.. |downloads_npinv| image:: https://img.shields.io/conda/dn/bioconda/npinv.svg?style=flat
   :target: https://anaconda.org/bioconda/npinv
   :alt:   (downloads)
.. |docker_npinv| image:: https://quay.io/repository/biocontainers/npinv/status
   :target: https://quay.io/repository/biocontainers/npinv
.. _`npinv/tags`: https://quay.io/repository/biocontainers/npinv?tab=tags


.. raw:: html

    <script>
        var package = "npinv";
        var versions = ["1.24","1.24","1.24","1.24","1.24"];
    </script>





Notes
-----
npinv is Java program that comes with a custom wrapper python script which I took from peptide\-shaker.
By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"npinv \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npinv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npinv/README.html
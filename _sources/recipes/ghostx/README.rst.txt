:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghostx'
.. highlight: bash

ghostx
======

.. conda:recipe:: ghostx
   :replaces_section_title:
   :noindex:

   GHOSTX is a homology search tool which can detect remote homologues like BLAST and is about 100 times more efficient than BLAST by using suffix arrays. GHOSTX outputs search results in the format similar to BLAST\-tabular format.

   :homepage: http://www.bi.cs.titech.ac.jp/ghostx/
   :license: BSD-2-Clause
   :recipe: /`ghostx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0103833`

   


.. conda:package:: ghostx

   |downloads_ghostx| |docker_ghostx|

   :versions:
      
      

      ``1.3.7-1``,  ``1.3.7-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install ghostx

   and update with::

      mamba update ghostx

  To create a new environment, run::

      mamba create --name myenvname ghostx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ghostx:<tag>

   (see `ghostx/tags`_ for valid values for ``<tag>``)


.. |downloads_ghostx| image:: https://img.shields.io/conda/dn/bioconda/ghostx.svg?style=flat
   :target: https://anaconda.org/bioconda/ghostx
   :alt:   (downloads)
.. |docker_ghostx| image:: https://quay.io/repository/biocontainers/ghostx/status
   :target: https://quay.io/repository/biocontainers/ghostx
.. _`ghostx/tags`: https://quay.io/repository/biocontainers/ghostx?tab=tags


.. raw:: html

    <script>
        var package = "ghostx";
        var versions = ["1.3.7","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghostx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghostx/README.html
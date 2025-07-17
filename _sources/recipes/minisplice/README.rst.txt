:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minisplice'
.. highlight: bash

minisplice
==========

.. conda:recipe:: minisplice
   :replaces_section_title:
   :noindex:

   minisplice is a command\-line tool to estimate the odds\-ratio score of canonical donor \(GT\) and acceptor \(AG\) splice sites. It is intended to be used with miniprot or minimap2 for improving alignment accuracy especially for distant homologs..

   :homepage: https://github.com/lh3/minisplice
   :documentation: https://github.com/lh3/minisplice/blob/v0.4/README.md
   
   :license: MIT / MIT
   :recipe: /`minisplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minisplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minisplice/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2506.12986`

   


.. conda:package:: minisplice

   |downloads_minisplice| |docker_minisplice|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install minisplice

   and update with::

      mamba update minisplice

  To create a new environment, run::

      mamba create --name myenvname minisplice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minisplice:<tag>

   (see `minisplice/tags`_ for valid values for ``<tag>``)


.. |downloads_minisplice| image:: https://img.shields.io/conda/dn/bioconda/minisplice.svg?style=flat
   :target: https://anaconda.org/bioconda/minisplice
   :alt:   (downloads)
.. |docker_minisplice| image:: https://quay.io/repository/biocontainers/minisplice/status
   :target: https://quay.io/repository/biocontainers/minisplice
.. _`minisplice/tags`: https://quay.io/repository/biocontainers/minisplice?tab=tags


.. raw:: html

    <script>
        var package = "minisplice";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minisplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minisplice/README.html
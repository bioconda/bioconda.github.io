:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratatosk'
.. highlight: bash

ratatosk
========

.. conda:recipe:: ratatosk
   :replaces_section_title:
   :noindex:

   Hybrid error correction of long reads using colored de Bruijn graphs.

   :homepage: https://github.com/DecodeGenetics/Ratatosk
   :documentation: https://github.com/DecodeGenetics/Ratatosk/blob/v0.9.0/README.md
   
   :license: BSD / BSD-2-Clause
   :recipe: /`ratatosk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatosk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatosk/meta.yaml>`_
   :links: biotools: :biotools:`ratatosk`, doi: :doi:`10.1186/s13059-020-02244-4`

   


.. conda:package:: ratatosk

   |downloads_ratatosk| |docker_ratatosk|

   :versions:
      
      

      ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.7.6.3-2``,  ``0.7.6.3-1``,  ``0.7.6.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ratatosk

   and update with::

      mamba update ratatosk

  To create a new environment, run::

      mamba create --name myenvname ratatosk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ratatosk:<tag>

   (see `ratatosk/tags`_ for valid values for ``<tag>``)


.. |downloads_ratatosk| image:: https://img.shields.io/conda/dn/bioconda/ratatosk.svg?style=flat
   :target: https://anaconda.org/bioconda/ratatosk
   :alt:   (downloads)
.. |docker_ratatosk| image:: https://quay.io/repository/biocontainers/ratatosk/status
   :target: https://quay.io/repository/biocontainers/ratatosk
.. _`ratatosk/tags`: https://quay.io/repository/biocontainers/ratatosk?tab=tags


.. raw:: html

    <script>
        var package = "ratatosk";
        var versions = ["0.9.0","0.9.0","0.9.0","0.7.6.3","0.7.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratatosk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratatosk/README.html
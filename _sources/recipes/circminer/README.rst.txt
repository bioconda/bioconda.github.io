:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circminer'
.. highlight: bash

circminer
=========

.. conda:recipe:: circminer
   :replaces_section_title:
   :noindex:

   Sensitive and fast computational tool for detecting circular RNAs \(circRNAs\) from RNA\-Seq data.

   :homepage: https://github.com/vpc-ccg/circminer
   :license: GPLv3
   :recipe: /`circminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circminer/meta.yaml>`_

   


.. conda:package:: circminer

   |downloads_circminer| |docker_circminer|

   :versions:
      
      

      ``0.4.2-6``,  ``0.4.2-5``,  ``0.4.2-4``,  ``0.4.2-3``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``

      

   
   :depends coreutils: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install circminer

   and update with::

      mamba update circminer

  To create a new environment, run::

      mamba create --name myenvname circminer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circminer:<tag>

   (see `circminer/tags`_ for valid values for ``<tag>``)


.. |downloads_circminer| image:: https://img.shields.io/conda/dn/bioconda/circminer.svg?style=flat
   :target: https://anaconda.org/bioconda/circminer
   :alt:   (downloads)
.. |docker_circminer| image:: https://quay.io/repository/biocontainers/circminer/status
   :target: https://quay.io/repository/biocontainers/circminer
.. _`circminer/tags`: https://quay.io/repository/biocontainers/circminer?tab=tags


.. raw:: html

    <script>
        var package = "circminer";
        var versions = ["0.4.2","0.4.2","0.4.2","0.4.2","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circminer/README.html
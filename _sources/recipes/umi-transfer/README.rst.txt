:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umi-transfer'
.. highlight: bash

umi-transfer
============

.. conda:recipe:: umi-transfer
   :replaces_section_title:
   :noindex:

   A tool for transferring Unique Molecular Identifiers \(UMIs\) from a separate FastQ file.

   :homepage: https://github.com/SciLifeLab/umi-transfer
   :license: MIT / MIT
   :recipe: /`umi-transfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi-transfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umi-transfer/meta.yaml>`_

   


.. conda:package:: umi-transfer

   |downloads_umi-transfer| |docker_umi-transfer|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install umi-transfer

   and update with::

      mamba update umi-transfer

  To create a new environment, run::

      mamba create --name myenvname umi-transfer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umi-transfer:<tag>

   (see `umi-transfer/tags`_ for valid values for ``<tag>``)


.. |downloads_umi-transfer| image:: https://img.shields.io/conda/dn/bioconda/umi-transfer.svg?style=flat
   :target: https://anaconda.org/bioconda/umi-transfer
   :alt:   (downloads)
.. |docker_umi-transfer| image:: https://quay.io/repository/biocontainers/umi-transfer/status
   :target: https://quay.io/repository/biocontainers/umi-transfer
.. _`umi-transfer/tags`: https://quay.io/repository/biocontainers/umi-transfer?tab=tags


.. raw:: html

    <script>
        var package = "umi-transfer";
        var versions = ["1.5.0","1.5.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umi-transfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umi-transfer/README.html
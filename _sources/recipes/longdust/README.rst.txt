:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longdust'
.. highlight: bash

longdust
========

.. conda:recipe:: longdust
   :replaces_section_title:
   :noindex:

   Longdust identifies long highly repetitive STRs\, VNTRs\, satellite DNA and other low\-complexity regions \(LCRs\) in a genome.

   :homepage: https://github.com/lh3/longdust
   :license: Unknown
   :recipe: /`longdust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longdust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longdust/meta.yaml>`_

   


.. conda:package:: longdust

   |downloads_longdust| |docker_longdust|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``

      

   
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

      mamba install longdust

   and update with::

      mamba update longdust

  To create a new environment, run::

      mamba create --name myenvname longdust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longdust:<tag>

   (see `longdust/tags`_ for valid values for ``<tag>``)


.. |downloads_longdust| image:: https://img.shields.io/conda/dn/bioconda/longdust.svg?style=flat
   :target: https://anaconda.org/bioconda/longdust
   :alt:   (downloads)
.. |docker_longdust| image:: https://quay.io/repository/biocontainers/longdust/status
   :target: https://quay.io/repository/biocontainers/longdust
.. _`longdust/tags`: https://quay.io/repository/biocontainers/longdust?tab=tags


.. raw:: html

    <script>
        var package = "longdust";
        var versions = ["1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longdust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longdust/README.html
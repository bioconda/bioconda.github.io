:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dna-nn'
.. highlight: bash

dna-nn
======

.. conda:recipe:: dna-nn
   :replaces_section_title:
   :noindex:

   Model and predict short DNA sequence features with neural networks.

   :homepage: https://github.com/lh3/dna-nn
   :license: Unknown
   :recipe: /`dna-nn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna-nn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna-nn/meta.yaml>`_

   


.. conda:package:: dna-nn

   |downloads_dna-nn| |docker_dna-nn|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends k8: 
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

      mamba install dna-nn

   and update with::

      mamba update dna-nn

  To create a new environment, run::

      mamba create --name myenvname dna-nn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dna-nn:<tag>

   (see `dna-nn/tags`_ for valid values for ``<tag>``)


.. |downloads_dna-nn| image:: https://img.shields.io/conda/dn/bioconda/dna-nn.svg?style=flat
   :target: https://anaconda.org/bioconda/dna-nn
   :alt:   (downloads)
.. |docker_dna-nn| image:: https://quay.io/repository/biocontainers/dna-nn/status
   :target: https://quay.io/repository/biocontainers/dna-nn
.. _`dna-nn/tags`: https://quay.io/repository/biocontainers/dna-nn?tab=tags


.. raw:: html

    <script>
        var package = "dna-nn";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dna-nn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dna-nn/README.html
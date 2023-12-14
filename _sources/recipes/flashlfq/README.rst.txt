:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flashlfq'
.. highlight: bash

flashlfq
========

.. conda:recipe:: flashlfq
   :replaces_section_title:
   :noindex:

   ultrafast label\-free quantification algorithm for mass\-spectrometry proteomics

   :homepage: https://github.com/smith-chem-wisc/FlashLFQ
   :license: GPL / LGPL-3.0
   :recipe: /`flashlfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flashlfq/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jproteome.7b00608`

   


.. conda:package:: flashlfq

   |downloads_flashlfq| |docker_flashlfq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.112-0``,  ``0.1.111-0``,  ``0.1.110-0``,  ``0.1.109-0``,  ``0.1.108-1``,  ``0.1.108-0``,  ``0.1.105-2``,  ``0.1.105-0``,  ``0.1.101-0``,  ``0.1.100-0``

      
      .. raw:: html

         </details>
      

   
   :depends dotnet-runtime: ``6.0.*``
   :depends openssl: ``1.1.*``
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

      mamba install flashlfq

   and update with::

      mamba update flashlfq

  To create a new environment, run::

      mamba create --name myenvname flashlfq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flashlfq:<tag>

   (see `flashlfq/tags`_ for valid values for ``<tag>``)


.. |downloads_flashlfq| image:: https://img.shields.io/conda/dn/bioconda/flashlfq.svg?style=flat
   :target: https://anaconda.org/bioconda/flashlfq
   :alt:   (downloads)
.. |docker_flashlfq| image:: https://quay.io/repository/biocontainers/flashlfq/status
   :target: https://quay.io/repository/biocontainers/flashlfq
.. _`flashlfq/tags`: https://quay.io/repository/biocontainers/flashlfq?tab=tags


.. raw:: html

    <script>
        var package = "flashlfq";
        var versions = ["1.2.6","1.2.5","1.2.4","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flashlfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flashlfq/README.html
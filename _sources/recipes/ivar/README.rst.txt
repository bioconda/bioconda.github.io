:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ivar'
.. highlight: bash

ivar
====

.. conda:recipe:: ivar
   :replaces_section_title:
   :noindex:

   iVar is a computational package that contains functions broadly useful for viral amplicon\-based sequencing.

   :homepage: https://andersen-lab.github.io/ivar/html/
   :developer docs: https://github.com/andersen-lab/ivar
   :license: GPL-3.0
   :recipe: /`ivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ivar/meta.yaml>`_
   :links: biotools: :biotools:`ivar`, usegalaxy-eu: :usegalaxy-eu:`ivar_variants`

   


.. conda:package:: ivar

   |downloads_ivar| |docker_ivar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-4</code>,  </span></summary>
      

      ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1_beta-0``,  ``1.0.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends samtools: 
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

      mamba install ivar

   and update with::

      mamba update ivar

  To create a new environment, run::

      mamba create --name myenvname ivar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ivar:<tag>

   (see `ivar/tags`_ for valid values for ``<tag>``)


.. |downloads_ivar| image:: https://img.shields.io/conda/dn/bioconda/ivar.svg?style=flat
   :target: https://anaconda.org/bioconda/ivar
   :alt:   (downloads)
.. |docker_ivar| image:: https://quay.io/repository/biocontainers/ivar/status
   :target: https://quay.io/repository/biocontainers/ivar
.. _`ivar/tags`: https://quay.io/repository/biocontainers/ivar?tab=tags


.. raw:: html

    <script>
        var package = "ivar";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ivar/README.html
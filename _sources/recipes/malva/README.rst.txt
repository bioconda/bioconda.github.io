:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'malva'
.. highlight: bash

malva
=====

.. conda:recipe:: malva
   :replaces_section_title:
   :noindex:

   genotyping by Mapping\-free ALternate\-allele detection of known VAriants

   :homepage: https://algolab.github.io/malva/
   :license: GPL-3.0-or-later
   :recipe: /`malva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/malva/meta.yaml>`_
   :links: biotools: :biotools:`malva`

   


.. conda:package:: malva

   |downloads_malva| |docker_malva|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends kmc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install malva

   and update with::

      mamba update malva

  To create a new environment, run::

      mamba create --name myenvname malva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/malva:<tag>

   (see `malva/tags`_ for valid values for ``<tag>``)


.. |downloads_malva| image:: https://img.shields.io/conda/dn/bioconda/malva.svg?style=flat
   :target: https://anaconda.org/bioconda/malva
   :alt:   (downloads)
.. |docker_malva| image:: https://quay.io/repository/biocontainers/malva/status
   :target: https://quay.io/repository/biocontainers/malva
.. _`malva/tags`: https://quay.io/repository/biocontainers/malva?tab=tags


.. raw:: html

    <script>
        var package = "malva";
        var versions = ["2.0.0","2.0.0","2.0.0","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/malva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/malva/README.html
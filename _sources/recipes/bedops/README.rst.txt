:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedops'
.. highlight: bash

bedops
======

.. conda:recipe:: bedops
   :replaces_section_title:
   :noindex:

   High\-performance genomic feature operations.

   :homepage: http://bedops.readthedocs.io
   :license: GPLv2
   :recipe: /`bedops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops/meta.yaml>`_
   :links: biotools: :biotools:`Bedops`, doi: :doi:`10.1093/bioinformatics/bts277`

   


.. conda:package:: bedops

   |downloads_bedops| |docker_bedops|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.41-1</code>,  <code>2.4.41-0</code>,  <code>2.4.40-0</code>,  <code>2.4.39-1</code>,  <code>2.4.39-0</code>,  <code>2.4.38-0</code>,  <code>2.4.37-0</code>,  <code>2.4.36-1</code>,  <code>2.4.36-0</code>,  </span></summary>
      

      ``2.4.41-1``,  ``2.4.41-0``,  ``2.4.40-0``,  ``2.4.39-1``,  ``2.4.39-0``,  ``2.4.38-0``,  ``2.4.37-0``,  ``2.4.36-1``,  ``2.4.36-0``,  ``2.4.35-2``,  ``2.4.35-1``,  ``2.4.35-0``,  ``2.4.34-0``,  ``2.4.33-0``,  ``2.4.32-0``,  ``2.4.30-0``,  ``2.4.27-0``,  ``2.4.26-0``,  ``2.4.25-0``,  ``2.4.24-0``,  ``2.4.23-0``,  ``2.4.22-0``,  ``2.4.21-0``,  ``2.4.20-0``,  ``2.4.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends samtools: 
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

      mamba install bedops

   and update with::

      mamba update bedops

  To create a new environment, run::

      mamba create --name myenvname bedops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bedops:<tag>

   (see `bedops/tags`_ for valid values for ``<tag>``)


.. |downloads_bedops| image:: https://img.shields.io/conda/dn/bioconda/bedops.svg?style=flat
   :target: https://anaconda.org/bioconda/bedops
   :alt:   (downloads)
.. |docker_bedops| image:: https://quay.io/repository/biocontainers/bedops/status
   :target: https://quay.io/repository/biocontainers/bedops
.. _`bedops/tags`: https://quay.io/repository/biocontainers/bedops?tab=tags


.. raw:: html

    <script>
        var package = "bedops";
        var versions = ["2.4.41","2.4.41","2.4.40","2.4.39","2.4.39"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedops/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrdp'
.. highlight: bash

bioconductor-rrdp
=================

.. conda:recipe:: bioconductor-rrdp
   :replaces_section_title:
   :noindex:

   Interface to the RDP Classifier

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rRDP.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-rrdp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrdp/meta.yaml>`_
   :links: biotools: :biotools:`rrdp`, doi: :doi:`10.1038/nmeth.3252`

   Seamlessly interfaces RDP classifier \(version 2.9\).


.. conda:package:: bioconductor-rrdp

   |downloads_bioconductor-rrdp| |docker_bioconductor-rrdp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rjava: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rrdp

   and update with::

      mamba update bioconductor-rrdp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rrdp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrdp:<tag>

   (see `bioconductor-rrdp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrdp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrdp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrdp
   :alt:   (downloads)
.. |docker_bioconductor-rrdp| image:: https://quay.io/repository/biocontainers/bioconductor-rrdp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrdp
.. _`bioconductor-rrdp/tags`: https://quay.io/repository/biocontainers/bioconductor-rrdp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rrdp";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrdp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrdp/README.html
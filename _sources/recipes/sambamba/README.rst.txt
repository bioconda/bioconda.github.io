:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sambamba'
.. highlight: bash

sambamba
========

.. conda:recipe:: sambamba
   :replaces_section_title:
   :noindex:

   Tools for working with SAM\/BAM data

   :homepage: https://github.com/biod/sambamba
   :documentation: https://lomereiter.github.io/sambamba/docs/sambamba-view.html
   
   :license: GPL2 / GPL-2.0-only
   :recipe: /`sambamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv098`

   


.. conda:package:: sambamba

   |downloads_sambamba| |docker_sambamba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.8.2-2</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.8.2-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.9-0``,  ``0.6.8-2``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.9-1``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends lz4-c: ``>=1.9.3,<1.10.0a0``
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

      mamba install sambamba

   and update with::

      mamba update sambamba

  To create a new environment, run::

      mamba create --name myenvname sambamba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sambamba:<tag>

   (see `sambamba/tags`_ for valid values for ``<tag>``)


.. |downloads_sambamba| image:: https://img.shields.io/conda/dn/bioconda/sambamba.svg?style=flat
   :target: https://anaconda.org/bioconda/sambamba
   :alt:   (downloads)
.. |docker_sambamba| image:: https://quay.io/repository/biocontainers/sambamba/status
   :target: https://quay.io/repository/biocontainers/sambamba
.. _`sambamba/tags`: https://quay.io/repository/biocontainers/sambamba?tab=tags


.. raw:: html

    <script>
        var package = "sambamba";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sambamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sambamba/README.html
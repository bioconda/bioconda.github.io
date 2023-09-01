:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffread'
.. highlight: bash

gffread
=======

.. conda:recipe:: gffread
   :replaces_section_title:
   :noindex:

   GFF\/GTF utility providing format conversions\, region filtering\, FASTA sequence extraction and more.

   :homepage: http://ccb.jhu.edu/software/stringtie/gff.shtml
   :developer docs: https://github.com/gpertea/gffread
   :license: MIT
   :recipe: /`gffread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread/meta.yaml>`_
   :links: biotools: :biotools:`gffread`

   


.. conda:package:: gffread

   |downloads_gffread| |docker_gffread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.7-3</code>,  <code>0.12.7-2</code>,  <code>0.12.7-1</code>,  <code>0.12.7-0</code>,  <code>0.12.1-1</code>,  <code>0.12.1-0</code>,  <code>0.11.7-0</code>,  <code>0.11.6-0</code>,  <code>0.11.4-0</code>,  </span></summary>
      

      ``0.12.7-3``,  ``0.12.7-2``,  ``0.12.7-1``,  ``0.12.7-0``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.9.12-0``,  ``0.9.9-1``,  ``0.9.9-0``,  ``0.9.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install gffread

   and update with::

      mamba update gffread

  To create a new environment, run::

      mamba create --name myenvname gffread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gffread:<tag>

   (see `gffread/tags`_ for valid values for ``<tag>``)


.. |downloads_gffread| image:: https://img.shields.io/conda/dn/bioconda/gffread.svg?style=flat
   :target: https://anaconda.org/bioconda/gffread
   :alt:   (downloads)
.. |docker_gffread| image:: https://quay.io/repository/biocontainers/gffread/status
   :target: https://quay.io/repository/biocontainers/gffread
.. _`gffread/tags`: https://quay.io/repository/biocontainers/gffread?tab=tags


.. raw:: html

    <script>
        var package = "gffread";
        var versions = ["0.12.7","0.12.7","0.12.7","0.12.7","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffread/README.html
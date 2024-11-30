:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngless'
.. highlight: bash

ngless
======

.. conda:recipe:: ngless
   :replaces_section_title:
   :noindex:

   A tool for short\-read processing with a focus on metagenomics

   :homepage: https://ngless.embl.de
   :license: MIT
   :recipe: /`ngless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngless/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-019-0684-8`

   


.. conda:package:: ngless

   |downloads_ngless| |docker_ngless|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends megahit: 
   :depends minimap2: 
   :depends prodigal: 
   :depends samtools: 
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

      mamba install ngless

   and update with::

      mamba update ngless

  To create a new environment, run::

      mamba create --name myenvname ngless

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngless:<tag>

   (see `ngless/tags`_ for valid values for ``<tag>``)


.. |downloads_ngless| image:: https://img.shields.io/conda/dn/bioconda/ngless.svg?style=flat
   :target: https://anaconda.org/bioconda/ngless
   :alt:   (downloads)
.. |docker_ngless| image:: https://quay.io/repository/biocontainers/ngless/status
   :target: https://quay.io/repository/biocontainers/ngless
.. _`ngless/tags`: https://quay.io/repository/biocontainers/ngless?tab=tags


.. raw:: html

    <script>
        var package = "ngless";
        var versions = ["1.5.0","1.4.2","1.4.1","1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngless/README.html
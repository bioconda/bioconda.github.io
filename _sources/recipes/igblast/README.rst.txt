:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast'
.. highlight: bash

igblast
=======

.. conda:recipe:: igblast
   :replaces_section_title:
   :noindex:

   A tool for analyzing immunoglobulin \(IG\) and T cell receptor \(TR\) sequences

   :homepage: http://www.ncbi.nlm.nih.gov/projects/igblast/
   :license: Public Domain and others
   :recipe: /`igblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast/meta.yaml>`_
   :links: biotools: :biotools:`igblast`

   


.. conda:package:: igblast

   |downloads_igblast| |docker_igblast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21.0-1</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.17.1-1</code>,  <code>1.17.1-0</code>,  <code>1.15.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.21.0-1``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.17.1-1``,  ``1.17.1-0``,  ``1.15.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.4.0-6``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncbi-vdb: ``>=2.9.6``
   :depends perl: 
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

      mamba install igblast

   and update with::

      mamba update igblast

  To create a new environment, run::

      mamba create --name myenvname igblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igblast:<tag>

   (see `igblast/tags`_ for valid values for ``<tag>``)


.. |downloads_igblast| image:: https://img.shields.io/conda/dn/bioconda/igblast.svg?style=flat
   :target: https://anaconda.org/bioconda/igblast
   :alt:   (downloads)
.. |docker_igblast| image:: https://quay.io/repository/biocontainers/igblast/status
   :target: https://quay.io/repository/biocontainers/igblast
.. _`igblast/tags`: https://quay.io/repository/biocontainers/igblast?tab=tags


.. raw:: html

    <script>
        var package = "igblast";
        var versions = ["1.21.0","1.21.0","1.20.0","1.19.0","1.17.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast/README.html
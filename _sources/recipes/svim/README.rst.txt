:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svim'
.. highlight: bash

svim
====

.. conda:recipe:: svim
   :replaces_section_title:
   :noindex:

   SVIM is a structural variant caller for long reads.

   :homepage: https://pypi.org/project/svim/
   :documentation: https://github.com/eldariont/svim/wiki
   
   :developer docs: https://github.com/eldariont/svim
   :license: GPL / GPL-3.0
   :recipe: /`svim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz041`

   


.. conda:package:: svim

   |downloads_svim| |docker_svim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: ``>=3.3.0``
   :depends minimap2: 
   :depends networkx: 
   :depends ngmlr: 
   :depends numpy: 
   :depends py-cpuinfo: ``>=7.0.0``
   :depends pysam: ``>=0.15.2``
   :depends pyspoa: ``>=0.0.6``
   :depends python: ``>=3.8``
   :depends python-edlib: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install svim

   and update with::

      mamba update svim

  To create a new environment, run::

      mamba create --name myenvname svim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svim:<tag>

   (see `svim/tags`_ for valid values for ``<tag>``)


.. |downloads_svim| image:: https://img.shields.io/conda/dn/bioconda/svim.svg?style=flat
   :target: https://anaconda.org/bioconda/svim
   :alt:   (downloads)
.. |docker_svim| image:: https://quay.io/repository/biocontainers/svim/status
   :target: https://quay.io/repository/biocontainers/svim
.. _`svim/tags`: https://quay.io/repository/biocontainers/svim?tab=tags


.. raw:: html

    <script>
        var package = "svim";
        var versions = ["2.0.0","1.4.2","1.4.1","1.4.0","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim/README.html
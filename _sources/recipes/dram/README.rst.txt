:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dram'
.. highlight: bash

dram
====

.. conda:recipe:: dram
   :replaces_section_title:
   :noindex:

   Distilled and Refined Annotation of Metabolism\: A tool for the annotation and curation of function for microbial and viral genomes

   :homepage: https://github.com/shafferm/DRAM/
   :documentation: https://github.com/shafferm/DRAM/wiki
   
   :license: GPL / GPL-3.0
   :recipe: /`dram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dram/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.29.177501`

   


.. conda:package:: dram

   |downloads_dram| |docker_dram|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends altair: ``>=4``
   :depends barrnap: 
   :depends curl: 
   :depends hmmer: 
   :depends mmseqs2: ``>10.6d92c``
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: ``>=1.5,<2``
   :depends parallel: 
   :depends prodigal: 
   :depends python: ``>=3.8``
   :depends ruby: 
   :depends scikit-bio: ``>=0.5.8,<0.6``
   :depends scipy: ``>=1.9``
   :depends sqlalchemy: 
   :depends trnascan-se: ``>=2``
   :depends wget: 
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

      mamba install dram

   and update with::

      mamba update dram

  To create a new environment, run::

      mamba create --name myenvname dram

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dram:<tag>

   (see `dram/tags`_ for valid values for ``<tag>``)


.. |downloads_dram| image:: https://img.shields.io/conda/dn/bioconda/dram.svg?style=flat
   :target: https://anaconda.org/bioconda/dram
   :alt:   (downloads)
.. |docker_dram| image:: https://quay.io/repository/biocontainers/dram/status
   :target: https://quay.io/repository/biocontainers/dram
.. _`dram/tags`: https://quay.io/repository/biocontainers/dram?tab=tags


.. raw:: html

    <script>
        var package = "dram";
        var versions = ["1.5.0","1.4.6","1.4.6","1.4.6","1.4.5"];
    </script>





Notes
-----
Databases are required. Please run \'DRAM\-setup.py prepare\_databases\' with the respective options.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dram/README.html
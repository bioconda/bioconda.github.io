:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkv'
.. highlight: bash

checkv
======

.. conda:recipe:: checkv
   :replaces_section_title:
   :noindex:

   Assess the quality of metagenome\-assembled viral genomes.

   :homepage: https://bitbucket.org/berkeleylab/checkv
   :license: BSD / Modified BSD
   :recipe: /`checkv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkv/meta.yaml>`_
   :links: biotools: :biotools:`checkv`, doi: :doi:`10.1038/s41587-020-00774-7`

   


.. conda:package:: checkv

   |downloads_checkv| |docker_checkv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-1</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends diamond: 
   :depends hmmer: 
   :depends importlib-metadata: ``>=0.12``
   :depends kcounter: 
   :depends numpy: 
   :depends prodigal-gv: 
   :depends psutil: 
   :depends python: ``>=3.6``
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

      mamba install checkv

   and update with::

      mamba update checkv

  To create a new environment, run::

      mamba create --name myenvname checkv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/checkv:<tag>

   (see `checkv/tags`_ for valid values for ``<tag>``)


.. |downloads_checkv| image:: https://img.shields.io/conda/dn/bioconda/checkv.svg?style=flat
   :target: https://anaconda.org/bioconda/checkv
   :alt:   (downloads)
.. |docker_checkv| image:: https://quay.io/repository/biocontainers/checkv/status
   :target: https://quay.io/repository/biocontainers/checkv
.. _`checkv/tags`: https://quay.io/repository/biocontainers/checkv?tab=tags


.. raw:: html

    <script>
        var package = "checkv";
        var versions = ["1.0.1","1.0.0","0.9.0","0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkv/README.html
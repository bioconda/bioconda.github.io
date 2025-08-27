:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phanotate'
.. highlight: bash

phanotate
=========

.. conda:recipe:: phanotate
   :replaces_section_title:
   :noindex:

   Phanotate gene caller for phages

   :homepage: https://github.com/deprekate/PHANOTATE
   :documentation: https://github.com/deprekate/PHANOTATE/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`phanotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phanotate/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics`

   


.. conda:package:: phanotate

   |downloads_phanotate| |docker_phanotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.7-0</code>,  <code>1.6.6-0</code>,  <code>1.6.5-1</code>,  <code>1.6.5-0</code>,  <code>1.6.4-0</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  </span></summary>
      

      ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends backports.tempfile: 
   :depends fastpath: 
   :depends genbank: 
   :depends libcxx: ``>=18``
   :depends matplotlib-base: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends seaborn: 
   :depends setuptools: 
   :depends statsmodels: 
   :depends textwrap3: 
   :depends trnascan-se: 
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

      mamba install phanotate

   and update with::

      mamba update phanotate

  To create a new environment, run::

      mamba create --name myenvname phanotate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phanotate:<tag>

   (see `phanotate/tags`_ for valid values for ``<tag>``)


.. |downloads_phanotate| image:: https://img.shields.io/conda/dn/bioconda/phanotate.svg?style=flat
   :target: https://anaconda.org/bioconda/phanotate
   :alt:   (downloads)
.. |docker_phanotate| image:: https://quay.io/repository/biocontainers/phanotate/status
   :target: https://quay.io/repository/biocontainers/phanotate
.. _`phanotate/tags`: https://quay.io/repository/biocontainers/phanotate?tab=tags


.. raw:: html

    <script>
        var package = "phanotate";
        var versions = ["1.6.7","1.6.6","1.6.5","1.6.5","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phanotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phanotate/README.html
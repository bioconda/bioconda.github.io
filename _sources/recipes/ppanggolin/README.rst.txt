:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanggolin'
.. highlight: bash

ppanggolin
==========

.. conda:recipe:: ppanggolin
   :replaces_section_title:
   :noindex:

   PPanGGOLiN\: Depicting microbial species diversity via a Partitioned PanGenome Graph

   :homepage: https://github.com/labgem/PPanGGOLiN
   :license: CeCiLL 2.1
   :recipe: /`ppanggolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin/meta.yaml>`_

   


.. conda:package:: ppanggolin

   |downloads_ppanggolin| |docker_ppanggolin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.105-1</code>,  <code>1.2.105-0</code>,  <code>1.2.74-1</code>,  <code>1.2.74-0</code>,  <code>1.2.63-1</code>,  <code>1.2.63-0</code>,  <code>1.2.61-0</code>,  <code>1.2.46-1</code>,  <code>1.2.46-0</code>,  </span></summary>
      

      ``1.2.105-1``,  ``1.2.105-0``,  ``1.2.74-1``,  ``1.2.74-0``,  ``1.2.63-1``,  ``1.2.63-0``,  ``1.2.61-0``,  ``1.2.46-1``,  ``1.2.46-0``,  ``1.1.136-1``,  ``1.1.136-0``,  ``1.1.131-0``,  ``1.1.96-0``,  ``1.1.85-1``,  ``1.1.85-0``,  ``1.1.72-0``,  ``1.0.13-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``v0.3.88-1``,  ``v0.3.88-0``

      
      .. raw:: html

         </details>
      

   
   :depends aragorn: ``1.2.*``
   :depends bokeh: ``2.*``
   :depends colorlover: ``0.3.*``
   :depends gmpy2: ``2.*``
   :depends infernal: ``1.1.*``
   :depends libgcc-ng: ``>=12``
   :depends mafft: 
   :depends mmseqs2: 
   :depends networkx: ``2.*``
   :depends numpy: ``1.*``
   :depends pandas: ``1.*``
   :depends plotly: ``4.*``
   :depends prodigal: ``2.6.*``
   :depends pytables: ``3.*``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``1.*``
   :depends tqdm: ``4.*``
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

      mamba install ppanggolin

   and update with::

      mamba update ppanggolin

  To create a new environment, run::

      mamba create --name myenvname ppanggolin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ppanggolin:<tag>

   (see `ppanggolin/tags`_ for valid values for ``<tag>``)


.. |downloads_ppanggolin| image:: https://img.shields.io/conda/dn/bioconda/ppanggolin.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanggolin
   :alt:   (downloads)
.. |docker_ppanggolin| image:: https://quay.io/repository/biocontainers/ppanggolin/status
   :target: https://quay.io/repository/biocontainers/ppanggolin
.. _`ppanggolin/tags`: https://quay.io/repository/biocontainers/ppanggolin?tab=tags


.. raw:: html

    <script>
        var package = "ppanggolin";
        var versions = ["1.2.105","1.2.105","1.2.74","1.2.74","1.2.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanggolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanggolin/README.html
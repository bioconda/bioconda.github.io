:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepbgc'
.. highlight: bash

deepbgc
=======

.. conda:recipe:: deepbgc
   :replaces_section_title:
   :noindex:

   DeepBGC \- Biosynthetic Gene Cluster detection and classification

   :homepage: https://github.com/Merck/DeepBGC
   :license: MIT / MIT
   :recipe: /`deepbgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepbgc/meta.yaml>`_

   


.. conda:package:: deepbgc

   |downloads_deepbgc| |docker_deepbgc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.31-0</code>,  <code>0.1.30-2</code>,  <code>0.1.30-1</code>,  <code>0.1.30-0</code>,  <code>0.1.29-0</code>,  <code>0.1.28-1</code>,  <code>0.1.28-0</code>,  <code>0.1.27-0</code>,  <code>0.1.26-0</code>,  </span></summary>
      

      ``0.1.31-0``,  ``0.1.30-2``,  ``0.1.30-1``,  ``0.1.30-0``,  ``0.1.29-0``,  ``0.1.28-1``,  ``0.1.28-0``,  ``0.1.27-0``,  ``0.1.26-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.19-0``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-0``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4.3``
   :depends biopython: ``>=1.78``
   :depends hmmer: ``>=3.1b2``
   :depends keras: ``2.2.4``
   :depends matplotlib-base: ``2.2.3``
   :depends numpy: ``1.16.1``
   :depends pandas: ``0.24.1``
   :depends prodigal: 
   :depends protobuf: ``<=3.19.0``
   :depends python: ``>=3.5``
   :depends scikit-learn: ``0.21.3``
   :depends scipy: ``1.2.0``
   :depends tensorflow: ``>=1.12.0,<2.0.0``
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

      mamba install deepbgc

   and update with::

      mamba update deepbgc

  To create a new environment, run::

      mamba create --name myenvname deepbgc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepbgc:<tag>

   (see `deepbgc/tags`_ for valid values for ``<tag>``)


.. |downloads_deepbgc| image:: https://img.shields.io/conda/dn/bioconda/deepbgc.svg?style=flat
   :target: https://anaconda.org/bioconda/deepbgc
   :alt:   (downloads)
.. |docker_deepbgc| image:: https://quay.io/repository/biocontainers/deepbgc/status
   :target: https://quay.io/repository/biocontainers/deepbgc
.. _`deepbgc/tags`: https://quay.io/repository/biocontainers/deepbgc?tab=tags


.. raw:: html

    <script>
        var package = "deepbgc";
        var versions = ["0.1.31","0.1.30","0.1.30","0.1.30","0.1.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepbgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepbgc/README.html
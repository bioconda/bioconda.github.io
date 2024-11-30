:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dammit'
.. highlight: bash

dammit
======

.. conda:recipe:: dammit
   :replaces_section_title:
   :noindex:

   simple de novo transcriptome annotator

   :homepage: http://dib-lab.github.io/dammit/
   :license: BSD
   :recipe: /`dammit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit/meta.yaml>`_

   


.. conda:package:: dammit

   |downloads_dammit| |docker_dammit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1-0</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0.rc0-0</code>,  <code>1.0rc2-2</code>,  <code>1.0rc2-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0-4``,  ``1.0-3``,  ``1.0.rc0-0``,  ``1.0rc2-2``,  ``1.0rc2-0``,  ``0.3.2-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-seqlogo: 
   :depends busco: ``3.0.2``
   :depends doit: ``>=0.29.0``
   :depends hmmer: 
   :depends infernal: 
   :depends khmer: ``>=2.1``
   :depends last: 
   :depends matplotlib: 
   :depends numexpr: ``>=2.3.1``
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends python: ``>3``
   :depends sh: 
   :depends shmlast: 
   :depends sphinx: ``>1.3.1``
   :depends sphinx_rtd_theme: ``>=0.1.9``
   :depends transdecoder: 
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

      mamba install dammit

   and update with::

      mamba update dammit

  To create a new environment, run::

      mamba create --name myenvname dammit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dammit:<tag>

   (see `dammit/tags`_ for valid values for ``<tag>``)


.. |downloads_dammit| image:: https://img.shields.io/conda/dn/bioconda/dammit.svg?style=flat
   :target: https://anaconda.org/bioconda/dammit
   :alt:   (downloads)
.. |docker_dammit| image:: https://quay.io/repository/biocontainers/dammit/status
   :target: https://quay.io/repository/biocontainers/dammit
.. _`dammit/tags`: https://quay.io/repository/biocontainers/dammit?tab=tags


.. raw:: html

    <script>
        var package = "dammit";
        var versions = ["1.2","1.1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammit/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treetime'
.. highlight: bash

treetime
========

.. conda:recipe:: treetime
   :replaces_section_title:
   :noindex:

   Maximum\-Likelihood dating and ancestral inference for phylogenetic trees

   :homepage: https://github.com/neherlab/treetime
   :documentation: https://treetime.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`treetime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treetime/meta.yaml>`_
   :links: doi: :doi:`10.1093/ve/vex042`

   


.. conda:package:: treetime

   |downloads_treetime| |docker_treetime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.4-0</code>,  <code>0.11.3-1</code>,  <code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.6-0</code>,  </span></summary>
      

      ``0.11.4-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.5-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.4.1-0``,  ``0.6.3-0``,  ``0.6.1-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.67,!=1.77,!=1.78``
   :depends matplotlib-base: ``>=2.0``
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.17.1``
   :depends python: ``>=3.7``
   :depends scipy: ``>=0.16.1``
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

      mamba install treetime

   and update with::

      mamba update treetime

  To create a new environment, run::

      mamba create --name myenvname treetime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treetime:<tag>

   (see `treetime/tags`_ for valid values for ``<tag>``)


.. |downloads_treetime| image:: https://img.shields.io/conda/dn/bioconda/treetime.svg?style=flat
   :target: https://anaconda.org/bioconda/treetime
   :alt:   (downloads)
.. |docker_treetime| image:: https://quay.io/repository/biocontainers/treetime/status
   :target: https://quay.io/repository/biocontainers/treetime
.. _`treetime/tags`: https://quay.io/repository/biocontainers/treetime?tab=tags


.. raw:: html

    <script>
        var package = "treetime";
        var versions = ["0.11.4","0.11.3","0.11.3","0.11.2","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treetime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treetime/README.html
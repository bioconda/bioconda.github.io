:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cat'
.. highlight: bash

cat
===

.. conda:recipe:: cat
   :replaces_section_title:
   :noindex:

   CAT\/BAT\: tool for taxonomic classification of contigs and metagenome\-assembled genomes \(MAGs\)


   :homepage: https://github.com/MGXlab/CAT_pack
   :license: MIT / MIT
   :recipe: /`cat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cat/meta.yaml>`_

   


.. conda:package:: cat

   |downloads_cat| |docker_cat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.1-0</code>,  <code>5.3-0</code>,  <code>5.2.3-1</code>,  <code>5.2.3-0</code>,  <code>5.2.2-0</code>,  <code>5.2.1-0</code>,  <code>5.2-0</code>,  <code>5.1.2-0</code>,  <code>5.1.1-0</code>,  </span></summary>
      

      ``6.0.1-0``,  ``5.3-0``,  ``5.2.3-1``,  ``5.2.3-0``,  ``5.2.2-0``,  ``5.2.1-0``,  ``5.2-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.1-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.3-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0-0``,  ``4.6-0``,  ``4.3.3-0``,  ``4.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends diamond: 
   :depends prodigal: 
   :depends python: ``>=3``
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

      mamba install cat

   and update with::

      mamba update cat

  To create a new environment, run::

      mamba create --name myenvname cat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cat:<tag>

   (see `cat/tags`_ for valid values for ``<tag>``)


.. |downloads_cat| image:: https://img.shields.io/conda/dn/bioconda/cat.svg?style=flat
   :target: https://anaconda.org/bioconda/cat
   :alt:   (downloads)
.. |docker_cat| image:: https://quay.io/repository/biocontainers/cat/status
   :target: https://quay.io/repository/biocontainers/cat
.. _`cat/tags`: https://quay.io/repository/biocontainers/cat?tab=tags


.. raw:: html

    <script>
        var package = "cat";
        var versions = ["6.0.1","5.3","5.2.3","5.2.3","5.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cat/README.html
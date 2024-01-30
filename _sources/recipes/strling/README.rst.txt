:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strling'
.. highlight: bash

strling
=======

.. conda:recipe:: strling
   :replaces_section_title:
   :noindex:

   STRling \(pronounced like “sterling”\) is a method to detect large STR expansions from short\-read sequencing data.

   :homepage: https://github.com/quinlan-lab/STRling
   :license: MIT
   :recipe: /`strling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strling/meta.yaml>`_

   


.. conda:package:: strling

   |downloads_strling| |docker_strling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-1</code>,  </span></summary>
      

      ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bpipe: 
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends pandas: 
   :depends pysam: 
   :depends pytest: 
   :depends pytest-runner: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends seaborn: 
   :depends statsmodels: 
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

      mamba install strling

   and update with::

      mamba update strling

  To create a new environment, run::

      mamba create --name myenvname strling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strling:<tag>

   (see `strling/tags`_ for valid values for ``<tag>``)


.. |downloads_strling| image:: https://img.shields.io/conda/dn/bioconda/strling.svg?style=flat
   :target: https://anaconda.org/bioconda/strling
   :alt:   (downloads)
.. |docker_strling| image:: https://quay.io/repository/biocontainers/strling/status
   :target: https://quay.io/repository/biocontainers/strling
.. _`strling/tags`: https://quay.io/repository/biocontainers/strling?tab=tags


.. raw:: html

    <script>
        var package = "strling";
        var versions = ["0.5.2","0.5.2","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strling/README.html
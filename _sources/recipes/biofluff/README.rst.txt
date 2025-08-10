:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biofluff'
.. highlight: bash

biofluff
========

.. conda:recipe:: biofluff
   :replaces_section_title:
   :noindex:

   Exploratory analysis and visualization of high\-throughput sequencing data.

   :homepage: https://github.com/simonvh/fluff
   :documentation: https://fluff.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`biofluff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofluff/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.2209`

   


.. conda:package:: biofluff

   |downloads_biofluff| |docker_biofluff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>3.0.3-1</code>,  <code>3.0.3-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``3.0.4-1``,  ``3.0.4-0``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends htseq: 
   :depends matplotlib-base: 
   :depends palettable: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install biofluff

   and update with::

      mamba update biofluff

  To create a new environment, run::

      mamba create --name myenvname biofluff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biofluff:<tag>

   (see `biofluff/tags`_ for valid values for ``<tag>``)


.. |downloads_biofluff| image:: https://img.shields.io/conda/dn/bioconda/biofluff.svg?style=flat
   :target: https://anaconda.org/bioconda/biofluff
   :alt:   (downloads)
.. |docker_biofluff| image:: https://quay.io/repository/biocontainers/biofluff/status
   :target: https://quay.io/repository/biocontainers/biofluff
.. _`biofluff/tags`: https://quay.io/repository/biocontainers/biofluff?tab=tags


.. raw:: html

    <script>
        var package = "biofluff";
        var versions = ["3.0.4","3.0.4","3.0.3","3.0.3","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biofluff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biofluff/README.html
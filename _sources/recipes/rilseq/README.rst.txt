:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rilseq'
.. highlight: bash

rilseq
======

.. conda:recipe:: rilseq
   :replaces_section_title:
   :noindex:

   Processing RILSeq experiments results

   :homepage: http://github.com/asafpr/RILseq
   :license: MIT / MIT
   :recipe: /`rilseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rilseq/meta.yaml>`_

   


.. conda:package:: rilseq

   |downloads_rilseq| |docker_rilseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.82-0</code>,  <code>0.81-0</code>,  <code>0.80-0</code>,  <code>0.78-1</code>,  <code>0.78-0</code>,  <code>0.77-0</code>,  <code>0.75-0</code>,  <code>0.74-0</code>,  <code>0.73-0</code>,  </span></summary>
      

      ``0.82-0``,  ``0.81-0``,  ``0.80-0``,  ``0.78-1``,  ``0.78-0``,  ``0.77-0``,  ``0.75-0``,  ``0.74-0``,  ``0.73-0``,  ``0.72-0``,  ``0.71-0``,  ``0.70-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bwa: ``>=0.7.12``
   :depends numpy: 
   :depends pysam: ``>=0.14.1``
   :depends python: ``>=3``
   :depends samtools: ``>=1.9``
   :depends scipy: 
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

      mamba install rilseq

   and update with::

      mamba update rilseq

  To create a new environment, run::

      mamba create --name myenvname rilseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rilseq:<tag>

   (see `rilseq/tags`_ for valid values for ``<tag>``)


.. |downloads_rilseq| image:: https://img.shields.io/conda/dn/bioconda/rilseq.svg?style=flat
   :target: https://anaconda.org/bioconda/rilseq
   :alt:   (downloads)
.. |docker_rilseq| image:: https://quay.io/repository/biocontainers/rilseq/status
   :target: https://quay.io/repository/biocontainers/rilseq
.. _`rilseq/tags`: https://quay.io/repository/biocontainers/rilseq?tab=tags


.. raw:: html

    <script>
        var package = "rilseq";
        var versions = ["0.82","0.81","0.80","0.78","0.78"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rilseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rilseq/README.html
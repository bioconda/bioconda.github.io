:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dropseq_tools'
.. highlight: bash

dropseq_tools
=============

.. conda:recipe:: dropseq_tools
   :replaces_section_title:
   :noindex:

   Package for the analysis of Drop\-seq data developed by Jim Nemesh in the McCarroll Lab


   :homepage: https://mccarrolllab.com/dropseq
   :documentation: https://github.com/broadinstitute/Drop-seq/blob/v3.0.2/README.md
   
   :developer docs: https://github.com/broadinstitute/Drop-seq
   :license: MIT / MIT
   :recipe: /`dropseq_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropseq_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropseq_tools/meta.yaml>`_

   


.. conda:package:: dropseq_tools

   |downloads_dropseq_tools| |docker_dropseq_tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``3.0.2-0``,  ``3.0.1-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.1-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.0.0-0``,  ``1.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=21``
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

      mamba install dropseq_tools

   and update with::

      mamba update dropseq_tools

  To create a new environment, run::

      mamba create --name myenvname dropseq_tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dropseq_tools:<tag>

   (see `dropseq_tools/tags`_ for valid values for ``<tag>``)


.. |downloads_dropseq_tools| image:: https://img.shields.io/conda/dn/bioconda/dropseq_tools.svg?style=flat
   :target: https://anaconda.org/bioconda/dropseq_tools
   :alt:   (downloads)
.. |docker_dropseq_tools| image:: https://quay.io/repository/biocontainers/dropseq_tools/status
   :target: https://quay.io/repository/biocontainers/dropseq_tools
.. _`dropseq_tools/tags`: https://quay.io/repository/biocontainers/dropseq_tools?tab=tags


.. raw:: html

    <script>
        var package = "dropseq_tools";
        var versions = ["3.0.2","3.0.1","2.5.1","2.5.0","2.4.1"];
    </script>





Notes
-----
Drop\-seq\_tools utilities are wrapper shell scripts. To get help on individual tool\, use e.g. \`PolyATrimmer \-\- \-\-help\`


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropseq_tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropseq_tools/README.html
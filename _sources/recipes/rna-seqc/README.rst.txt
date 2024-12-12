:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-seqc'
.. highlight: bash

rna-seqc
========

.. conda:recipe:: rna-seqc
   :replaces_section_title:
   :noindex:

   Fast\, efficient RNA\-Seq metrics for quality control and process optimization.

   :homepage: https://github.com/broadinstitute/rnaseqc
   :documentation: https://github.com/getzlab/rnaseqc/blob/v2.4.2/README.md
   
   :license: `BSD / BSD-3-Clause <https://raw.githubusercontent.com/broadinstitute/rnaseqc/master/LICENSE>`_
   :recipe: /`rna-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc/meta.yaml>`_
   :links: biotools: :biotools:`rna-seqc`, doi: :doi:`10.1093/bioinformatics/btab135`

   


.. conda:package:: rna-seqc

   |downloads_rna-seqc| |docker_rna-seqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.3.5-6</code>,  <code>2.3.5-5</code>,  <code>2.3.5-4</code>,  <code>2.3.5-3</code>,  <code>2.3.5-2</code>,  <code>2.3.5-1</code>,  <code>2.3.5-0</code>,  </span></summary>
      

      ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.5-6``,  ``2.3.5-5``,  ``2.3.5-4``,  ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``1.1.8-2``,  ``1.1.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends libcxx: ``>=18``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install rna-seqc

   and update with::

      mamba update rna-seqc

  To create a new environment, run::

      mamba create --name myenvname rna-seqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rna-seqc:<tag>

   (see `rna-seqc/tags`_ for valid values for ``<tag>``)


.. |downloads_rna-seqc| image:: https://img.shields.io/conda/dn/bioconda/rna-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-seqc
   :alt:   (downloads)
.. |docker_rna-seqc| image:: https://quay.io/repository/biocontainers/rna-seqc/status
   :target: https://quay.io/repository/biocontainers/rna-seqc
.. _`rna-seqc/tags`: https://quay.io/repository/biocontainers/rna-seqc?tab=tags


.. raw:: html

    <script>
        var package = "rna-seqc";
        var versions = ["2.4.2","2.4.2","2.3.5","2.3.5","2.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-seqc/README.html
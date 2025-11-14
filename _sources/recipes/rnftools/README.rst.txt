:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnftools'
.. highlight: bash

rnftools
========

.. conda:recipe:: rnftools
   :replaces_section_title:
   :noindex:

   RNF framework for NGS\: simulation of reads\, evaluation of mappers\, conversion of RNF\-compliant data.

   :homepage: http://karel-brinda.github.io/rnftools
   :license: MIT
   :recipe: /`rnftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnftools/meta.yaml>`_

   


.. conda:package:: rnftools

   |downloads_rnftools| |docker_rnftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0.0-0</code>,  <code>0.3.1.3-0</code>,  <code>0.3.1.2-2</code>,  <code>0.3.1.2-1</code>,  <code>0.3.1.1-2</code>,  <code>0.3.1.1-1</code>,  <code>0.3.1.0-2</code>,  <code>0.3.1.0-1</code>,  <code>0.3.0.2-2</code>,  </span></summary>
      

      ``0.4.0.0-0``,  ``0.3.1.3-0``,  ``0.3.1.2-2``,  ``0.3.1.2-1``,  ``0.3.1.1-2``,  ``0.3.1.1-1``,  ``0.3.1.0-2``,  ``0.3.1.0-1``,  ``0.3.0.2-2``,  ``0.3.0.2-1``,  ``0.3.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends art: 
   :depends beautifulsoup4: 
   :depends bwa: 
   :depends curesim: 
   :depends dwgsim: 
   :depends gnuplot: ``>=5.0``
   :depends mason: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends reportlab: ``>=3.3.0``
   :depends samtools: 
   :depends snakemake-minimal: 
   :depends svg42pdf: ``>=0.2.2``
   :depends xopen: 
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

      mamba install rnftools

   and update with::

      mamba update rnftools

  To create a new environment, run::

      mamba create --name myenvname rnftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnftools:<tag>

   (see `rnftools/tags`_ for valid values for ``<tag>``)


.. |downloads_rnftools| image:: https://img.shields.io/conda/dn/bioconda/rnftools.svg?style=flat
   :target: https://anaconda.org/bioconda/rnftools
   :alt:   (downloads)
.. |docker_rnftools| image:: https://quay.io/repository/biocontainers/rnftools/status
   :target: https://quay.io/repository/biocontainers/rnftools
.. _`rnftools/tags`: https://quay.io/repository/biocontainers/rnftools?tab=tags


.. raw:: html

    <script>
        var package = "rnftools";
        var versions = ["0.4.0.0","0.3.1.3","0.3.1.2","0.3.1.2","0.3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnftools/README.html
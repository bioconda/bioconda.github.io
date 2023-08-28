:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anvio'
.. highlight: bash

anvio
=====

.. conda:recipe:: anvio
   :replaces_section_title:
   :noindex:

   A platform for integrated multi\-omics

   :homepage: http://merenlab.org/software/anvio/
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio/meta.yaml>`_

   


.. conda:package:: anvio

   |downloads_anvio| |docker_anvio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7-1</code>,  <code>7-0</code>,  <code>6.2-0</code>,  <code>6.1-1</code>,  <code>6.1-0</code>,  <code>6-0</code>,  <code>5.5.0-0</code>,  <code>5.4.0-0</code>,  <code>5.3.0-0</code>,  </span></summary>
      

      ``7-1``,  ``7-0``,  ``6.2-0``,  ``6.1-1``,  ``6.1-0``,  ``6-0``,  ``5.5.0-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.0-0``,  ``5.1.0-1``,  ``5.0.0-1``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends anvio-minimal: ``7``
   :depends bioconductor-qvalue: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends centrifuge: 
   :depends diamond: 
   :depends fastani: 
   :depends fasttree: 
   :depends hmmer: 
   :depends iqtree: 
   :depends mcl: 
   :depends megahit: 
   :depends muscle: 
   :depends prodigal: 
   :depends r-base: 
   :depends r-magrittr: 
   :depends r-optparse: 
   :depends r-stringi: 
   :depends r-tidyverse: 
   :depends samtools: 
   :depends spades: 
   :depends trimal: 
   :depends trnascan-se: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install anvio

   and update with::

      mamba update anvio

  To create a new environment, run::

      mamba create --name myenvname anvio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anvio:<tag>

   (see `anvio/tags`_ for valid values for ``<tag>``)


.. |downloads_anvio| image:: https://img.shields.io/conda/dn/bioconda/anvio.svg?style=flat
   :target: https://anaconda.org/bioconda/anvio
   :alt:   (downloads)
.. |docker_anvio| image:: https://quay.io/repository/biocontainers/anvio/status
   :target: https://quay.io/repository/biocontainers/anvio
.. _`anvio/tags`: https://quay.io/repository/biocontainers/anvio?tab=tags


.. raw:: html

    <script>
        var package = "anvio";
        var versions = ["7","7","6.2","6.1","6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio/README.html
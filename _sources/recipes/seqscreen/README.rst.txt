:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqscreen'
.. highlight: bash

seqscreen
=========

.. conda:recipe:: seqscreen
   :replaces_section_title:
   :noindex:

   SeqScreen was created to sensitively assign taxonomic classifications\, functional annotations\, and Functions of Sequences of Concern \(FunSoCs\) to single\, short DNA sequences or open reading frames.

   :homepage: https://gitlab.com/treangenlab/seqscreen/-/wikis/home
   :license: GPL3
   :recipe: /`seqscreen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqscreen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqscreen/meta.yaml>`_

   


.. conda:package:: seqscreen

   |downloads_seqscreen| |docker_seqscreen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.3-1</code>,  <code>4.3-0</code>,  <code>4.2-0</code>,  <code>4.1-2</code>,  <code>4.1-1</code>,  <code>4.1-0</code>,  <code>4.0-8</code>,  <code>4.0-7</code>,  <code>4.0-6</code>,  </span></summary>
      

      ``4.3-1``,  ``4.3-0``,  ``4.2-0``,  ``4.1-2``,  ``4.1-1``,  ``4.1-0``,  ``4.0-8``,  ``4.0-7``,  ``4.0-6``,  ``4.0-5``,  ``4.0-4``,  ``4.0-3``,  ``4.0-2``,  ``4.0-1``,  ``4.0-0``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-1``,  ``3.0-0``,  ``2.2-0``,  ``2.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.6.4-2``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.11-0``,  ``1.5.10-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.14-1``,  ``1.4.14-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bitarray: 
   :depends blast: ``>=2.10``
   :depends bowtie2: 
   :depends bwa: ``>=0.7.17``
   :depends centrifuge-core: 
   :depends diamond: ``>=2.0.15``
   :depends ete3: ``>=3.1.2``
   :depends gdrive: 
   :depends hmmer: 
   :depends intervaltree: 
   :depends jinja2: 
   :depends minimap2: ``>=2.24``
   :depends mmseqs2: 
   :depends mummer: 
   :depends ncbi-datasets-cli: ``>=13.20.1``
   :depends nextflow: ``>=22.0.0,<22.11``
   :depends pandas: ``>=1.4.3``
   :depends pyfasta: ``>=0.5.2``
   :depends python: ``>=3``
   :depends rapsearch: 
   :depends samtools: ``>=1.15.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends time: 
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

      mamba install seqscreen

   and update with::

      mamba update seqscreen

  To create a new environment, run::

      mamba create --name myenvname seqscreen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqscreen:<tag>

   (see `seqscreen/tags`_ for valid values for ``<tag>``)


.. |downloads_seqscreen| image:: https://img.shields.io/conda/dn/bioconda/seqscreen.svg?style=flat
   :target: https://anaconda.org/bioconda/seqscreen
   :alt:   (downloads)
.. |docker_seqscreen| image:: https://quay.io/repository/biocontainers/seqscreen/status
   :target: https://quay.io/repository/biocontainers/seqscreen
.. _`seqscreen/tags`: https://quay.io/repository/biocontainers/seqscreen?tab=tags


.. raw:: html

    <script>
        var package = "seqscreen";
        var versions = ["4.3","4.3","4.2","4.1","4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqscreen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqscreen/README.html
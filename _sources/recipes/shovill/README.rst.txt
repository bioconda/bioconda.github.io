:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shovill'
.. highlight: bash

shovill
=======

.. conda:recipe:: shovill
   :replaces_section_title:
   :noindex:

   Microbial assembly pipeline for Illumina paired\-end reads

   :homepage: https://github.com/tseemann/shovill
   :license: GPL2
   :recipe: /`shovill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill/meta.yaml>`_
   :links: biotools: :biotools:`shovill`, usegalaxy-eu: :usegalaxy-eu:`shovill`

   


.. conda:package:: shovill

   |downloads_shovill| |docker_shovill|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.17``
   :depends flash: ``>=1.2``
   :depends kmc: ``>=3.1``
   :depends lighter: ``>=1.1``
   :depends megahit: ``>=1.2.7``
   :depends perl: 
   :depends perl-file-spec: 
   :depends perl-findbin: 
   :depends pigz: 
   :depends pilon: ``>=1.22``
   :depends samclip: ``>=0.4``
   :depends samtools: ``>=1.10``
   :depends seqtk: ``>=1.3``
   :depends skesa: ``>=2.2``
   :depends spades: ``>=3.14``
   :depends trimmomatic: ``>=0.36``
   :depends velvet: ``>=1.2.10``
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

      mamba install shovill

   and update with::

      mamba update shovill

  To create a new environment, run::

      mamba create --name myenvname shovill

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shovill:<tag>

   (see `shovill/tags`_ for valid values for ``<tag>``)


.. |downloads_shovill| image:: https://img.shields.io/conda/dn/bioconda/shovill.svg?style=flat
   :target: https://anaconda.org/bioconda/shovill
   :alt:   (downloads)
.. |docker_shovill| image:: https://quay.io/repository/biocontainers/shovill/status
   :target: https://quay.io/repository/biocontainers/shovill
.. _`shovill/tags`: https://quay.io/repository/biocontainers/shovill?tab=tags


.. raw:: html

    <script>
        var package = "shovill";
        var versions = ["1.1.0","1.1.0","1.0.9","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill/README.html
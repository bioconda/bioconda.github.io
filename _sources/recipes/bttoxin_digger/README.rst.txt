:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttoxin_digger'
.. highlight: bash

bttoxin_digger
==============

.. conda:recipe:: bttoxin_digger
   :replaces_section_title:
   :noindex:

   A toxin minging tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BtToxin_Digger/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BtToxin_Digger/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttoxin_digger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttoxin_digger/meta.yaml>`_
   :links: biotools: :biotools:`bttoxin_digger`

   


.. conda:package:: bttoxin_digger

   |downloads_bttoxin_digger| |docker_bttoxin_digger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: 
   :depends blast: 
   :depends bwa: 
   :depends canu: 
   :depends fastp: 
   :depends hmmer: 
   :depends libsvm: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-file-tee: 
   :depends perl-getopt-long: 
   :depends perl-list-util: 
   :depends perl-pod-usage: 
   :depends racon: 
   :depends spades: ``>=3.6.2,<=3.13.0``
   :depends unicycler: ``0.4.7.*``
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

      mamba install bttoxin_digger

   and update with::

      mamba update bttoxin_digger

  To create a new environment, run::

      mamba create --name myenvname bttoxin_digger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bttoxin_digger:<tag>

   (see `bttoxin_digger/tags`_ for valid values for ``<tag>``)


.. |downloads_bttoxin_digger| image:: https://img.shields.io/conda/dn/bioconda/bttoxin_digger.svg?style=flat
   :target: https://anaconda.org/bioconda/bttoxin_digger
   :alt:   (downloads)
.. |docker_bttoxin_digger| image:: https://quay.io/repository/biocontainers/bttoxin_digger/status
   :target: https://quay.io/repository/biocontainers/bttoxin_digger
.. _`bttoxin_digger/tags`: https://quay.io/repository/biocontainers/bttoxin_digger?tab=tags


.. raw:: html

    <script>
        var package = "bttoxin_digger";
        var versions = ["1.0.10","1.0.9","1.0.8","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttoxin_digger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttoxin_digger/README.html
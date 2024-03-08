:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agat'
.. highlight: bash

agat
====

.. conda:recipe:: agat
   :replaces_section_title:
   :noindex:

   Another Gff Analysis Toolkit \(AGAT\). Suite of tools to handle gene annotations in any GTF\/GFF format.

   :homepage: https://github.com/NBISweden/AGAT
   :documentation: https://agat.readthedocs.io/en/latest/
   
   :license: GPL / GPLv3
   :recipe: /`agat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agat/meta.yaml>`_

   AGAT has the power to check\, fix\, pad missing information \(features\/attributes\) of any kind of GTF and GFF to create complete\, sorted and standardised GTF\/GFF formats. 
   Over the years it has been enriched by many many tools to perform just about any tasks that is possible related to GTF\/GFF format files 
   \(sanitizing\, conversions\, merging\, modifying\, filtering\, FASTA sequence extraction\, adding information\, etc\).
   Comparing to other methods AGAT is robust to even the most despicable GTF\/GFF files.



.. conda:package:: agat

   |downloads_agat| |docker_agat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.2-2</code>,  <code>0.9.2-1</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libdb: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: ``>=1.7.8``
   :depends perl-carp: 
   :depends perl-clone: 
   :depends perl-file-share: 
   :depends perl-file-sharedir-install: 
   :depends perl-graph: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: ``>=6.39``
   :depends perl-moose: 
   :depends perl-sort-naturally: 
   :depends perl-statistics-r: 
   :depends perl-term-progressbar: 
   :depends perl-yaml: 
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

      mamba install agat

   and update with::

      mamba update agat

  To create a new environment, run::

      mamba create --name myenvname agat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agat:<tag>

   (see `agat/tags`_ for valid values for ``<tag>``)


.. |downloads_agat| image:: https://img.shields.io/conda/dn/bioconda/agat.svg?style=flat
   :target: https://anaconda.org/bioconda/agat
   :alt:   (downloads)
.. |docker_agat| image:: https://quay.io/repository/biocontainers/agat/status
   :target: https://quay.io/repository/biocontainers/agat
.. _`agat/tags`: https://quay.io/repository/biocontainers/agat?tab=tags


.. raw:: html

    <script>
        var package = "agat";
        var versions = ["1.3.1","1.3.0","1.2.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agat/README.html
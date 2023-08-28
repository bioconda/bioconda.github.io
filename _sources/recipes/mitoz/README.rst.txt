:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitoz'
.. highlight: bash

mitoz
=====

.. conda:recipe:: mitoz
   :replaces_section_title:
   :noindex:

   MitoZ\: A toolkit for assembly\, annotation\, and visualization of animal mitochondrial genomes

   :homepage: https://github.com/linzhi2013/MitoZ
   :license: GPLv3
   :recipe: /`mitoz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz/meta.yaml>`_

   


.. conda:package:: mitoz

   |downloads_mitoz| |docker_mitoz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6-1</code>,  <code>3.6-0</code>,  <code>3.5-0</code>,  <code>3.4-1</code>,  <code>3.4-0</code>,  <code>3.3-1</code>,  <code>3.3-0</code>,  <code>3.2-0</code>,  <code>3.1-0</code>,  </span></summary>
      

      ``3.6-1``,  ``3.6-0``,  ``3.5-0``,  ``3.4-1``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: 
   :depends bs4: 
   :depends bwa: 
   :depends circos: ``0.69.*``
   :depends coreutils: 
   :depends ete3: ``>=3.1.2``
   :depends fastp: 
   :depends hmmer: ``3.1b2.*``
   :depends html5lib: 
   :depends infernal: ``1.1.1.*``
   :depends libgd: 
   :depends megahit: 
   :depends openjdk: 
   :depends perl: ``5.32.*``
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: 
   :depends perl-clone: 
   :depends perl-config-general: 
   :depends perl-encode-locale: 
   :depends perl-list-moreutils: 
   :depends perl-math-bezier: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-params-validate: 
   :depends perl-set-intspan: 
   :depends perl-statistics-basic: 
   :depends perl-statistics-descriptive: 
   :depends pkgconfig: 
   :depends python: ``>=3.6,<3.9``
   :depends requests: 
   :depends samtools: 
   :depends seqkit: 
   :depends spades: ``>=3.15.4``
   :depends tbl2asn: 
   :depends tiara: 
   :depends wise2: 
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

      mamba install mitoz

   and update with::

      mamba update mitoz

  To create a new environment, run::

      mamba create --name myenvname mitoz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitoz:<tag>

   (see `mitoz/tags`_ for valid values for ``<tag>``)


.. |downloads_mitoz| image:: https://img.shields.io/conda/dn/bioconda/mitoz.svg?style=flat
   :target: https://anaconda.org/bioconda/mitoz
   :alt:   (downloads)
.. |docker_mitoz| image:: https://quay.io/repository/biocontainers/mitoz/status
   :target: https://quay.io/repository/biocontainers/mitoz
.. _`mitoz/tags`: https://quay.io/repository/biocontainers/mitoz?tab=tags


.. raw:: html

    <script>
        var package = "mitoz";
        var versions = ["3.6","3.6","3.5","3.4","3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitoz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitoz/README.html
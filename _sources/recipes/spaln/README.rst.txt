:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spaln'
.. highlight: bash

spaln
=====

.. conda:recipe:: spaln
   :replaces_section_title:
   :noindex:

   Map and align a set of cDNA\/EST or protein sequences onto a genome.

   :homepage: https://github.com/ogotoh/spaln
   :documentation: https://github.com/ogotoh/spaln/blob/ver.3.0.7/README.md
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`spaln <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spaln>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spaln/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gks708`, doi: :doi:`10.1093/bioinformatics/btl067`, usegalaxy-eu: :usegalaxy-eu:`spaln`

   Spaln \(space\-efficient spliced alignment\) is a stand\-alone program that maps
   and aligns a set of cDNA or protein sequences onto a whole genomic sequence
   in a single job. Spaln also performs spliced or ordinary alignment after
   rapid similarity search against a protein sequence database\, if a genomic segment
   or an amino acid sequence is given as a query.



.. conda:package:: spaln

   |downloads_spaln| |docker_spaln|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.7-0</code>,  <code>3.0.6-0</code>,  <code>3.0.6c-0</code>,  <code>3.0.6b-1</code>,  <code>3.0.6b-0</code>,  <code>3.0.4-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.4.13-2</code>,  </span></summary>
      

      ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.6c-0``,  ``3.0.6b-1``,  ``3.0.6b-0``,  ``3.0.4-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.4.13-2``,  ``2.4.13-1``,  ``2.4.13-0``,  ``2.4.13g-0``,  ``2.4.13f-0``,  ``2.4.9-0``,  ``2.4.8-0``,  ``2.4.7-2``,  ``2.4.7-1``,  ``2.4.7-0``,  ``2.4.6-1``,  ``2.4.6-0``,  ``2.4.5-0``,  ``2.4.4-0``,  ``2.4.03-1``,  ``2.4.03-0``,  ``2.4.02-0``,  ``2.4.01-0``,  ``2.3.3-0``,  ``2.3.3c-0``,  ``2.3.3b-0``,  ``2.3.3a-0``,  ``2.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install spaln

   and update with::

      mamba update spaln

  To create a new environment, run::

      mamba create --name myenvname spaln

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spaln:<tag>

   (see `spaln/tags`_ for valid values for ``<tag>``)


.. |downloads_spaln| image:: https://img.shields.io/conda/dn/bioconda/spaln.svg?style=flat
   :target: https://anaconda.org/bioconda/spaln
   :alt:   (downloads)
.. |docker_spaln| image:: https://quay.io/repository/biocontainers/spaln/status
   :target: https://quay.io/repository/biocontainers/spaln
.. _`spaln/tags`: https://quay.io/repository/biocontainers/spaln?tab=tags


.. raw:: html

    <script>
        var package = "spaln";
        var versions = ["3.0.7","3.0.6","3.0.6c","3.0.6b","3.0.6b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spaln/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spaln/README.html
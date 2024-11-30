:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peptide-shaker'
.. highlight: bash

peptide-shaker
==============

.. conda:recipe:: peptide-shaker
   :replaces_section_title:
   :noindex:

   Independent platform for interpretation of proteomics identification results.

   :homepage: https://compomics.github.io/projects/peptide-shaker.html
   :documentation: https://github.com/compomics/peptide-shaker/blob/master/README.md
   
   :developer docs: https://github.com/compomics/peptide-shaker
   :license: APACHE / Apache-2.0
   :recipe: /`peptide-shaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptide-shaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptide-shaker/meta.yaml>`_
   :links: biotools: :biotools:`peptide-shaker`, usegalaxy-eu: :usegalaxy-eu:`peptide_shaker`, doi: :doi:`10.1038/nbt.3109`

   PeptideShaker is a search engine independent platform for interpretation of proteomics identification results from multiple search engines\, currently supporting X\!Tandem\, MS\-GF\+\, Metamorpheus\, MS Amanda\, OMSSA\, MyriMatch\, Comet\, Tide\, Mascot\, Andromeda and mzIdentML. By combining the results from multiple search engines\, while re\-calculating PTM localization scores and redoing the protein inference\, PeptideShaker attempts to give you the best possible understanding of your proteomics data\!


.. conda:package:: peptide-shaker

   |downloads_peptide-shaker| |docker_peptide-shaker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.11-0</code>,  <code>3.0.8-0</code>,  <code>3.0.6-0</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.2.25-0</code>,  <code>2.2.23-0</code>,  </span></summary>
      

      ``3.0.11-0``,  ``3.0.8-0``,  ``3.0.6-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.2.25-0``,  ``2.2.23-0``,  ``2.2.17-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.0.33-1``,  ``2.0.33-0``,  ``2.0.25-0``,  ``2.0.18-1``,  ``2.0.18-0``,  ``2.0.15-1``,  ``2.0.15-0``,  ``2.0.14-0``,  ``2.0.9-0``,  ``2.0.5-0``,  ``2.0.1.alpha-0``,  ``1.16.40-1``,  ``1.16.40-0``,  ``1.16.36-0``,  ``1.16.35-1``,  ``1.16.35-0``,  ``1.16.32-1``,  ``1.16.31-1``,  ``1.16.30-1``,  ``1.16.29-1``,  ``1.16.26-1``,  ``1.16.23-0``,  ``1.16.22-0``,  ``1.16.20-0``,  ``1.16.17-0``,  ``1.16.16-2``,  ``1.16.16-1``,  ``1.16.16-0``,  ``1.16.15-2``,  ``1.16.15-1``,  ``1.16.15-0``,  ``1.16.14-0``,  ``1.16.13-2``,  ``1.16.13-1``,  ``1.16.13-0``,  ``1.16.4-2``,  ``1.16.4-1``,  ``1.16.4-0``,  ``1.16.3-2``,  ``1.16.3-1``,  ``1.16.3-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.6-0``,  ``1.14.4-0``,  ``1.13.6-1``,  ``1.13.6-0``,  ``1.13.3-1``,  ``1.13.3-0``,  ``1.11.0-1``,  ``1.11.0-0``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
   :depends python: 
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

      mamba install peptide-shaker

   and update with::

      mamba update peptide-shaker

  To create a new environment, run::

      mamba create --name myenvname peptide-shaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peptide-shaker:<tag>

   (see `peptide-shaker/tags`_ for valid values for ``<tag>``)


.. |downloads_peptide-shaker| image:: https://img.shields.io/conda/dn/bioconda/peptide-shaker.svg?style=flat
   :target: https://anaconda.org/bioconda/peptide-shaker
   :alt:   (downloads)
.. |docker_peptide-shaker| image:: https://quay.io/repository/biocontainers/peptide-shaker/status
   :target: https://quay.io/repository/biocontainers/peptide-shaker
.. _`peptide-shaker/tags`: https://quay.io/repository/biocontainers/peptide-shaker?tab=tags


.. raw:: html

    <script>
        var package = "peptide-shaker";
        var versions = ["3.0.11","3.0.8","3.0.6","3.0.4","3.0.3"];
    </script>





Notes
-----
PeptideShaker is Java program that comes with a custom wrapper shell script. This shell wrapper is called \"opsin\" and is on \$PATH by default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can specify these values directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \"peptide\-shaker \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peptide-shaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peptide-shaker/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pantools'
.. highlight: bash

pantools
========

.. conda:recipe:: pantools
   :replaces_section_title:
   :noindex:

   PanTools is a pangenomic toolkit for comparative analysis of large numbers of genomes.

   :homepage: https://git.wur.nl/bioinformatics/pantools
   :documentation: https://pantools.readthedocs.io/
   
   :license: GPL / GPL-3.0-only
   :recipe: /`pantools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantools/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/btw455`, doi: :doi:`https://doi.org/10.1186/s12859-018-2362-4`, doi: :doi:`https://doi.org/10.1101/813634`, doi: :doi:`https://doi.org/10.1093/bioinformatics/btac506`

   PanTools is a pangenomic toolkit for comparative analysis of large numbers
   of genomes. It is developed in the Bioinformatics Group of Wageningen
   University\, the Netherlands. Please cite the relevant publication\(s\) from
   the list of publications if you use PanTools in your research.



.. conda:package:: pantools

   |downloads_pantools| |docker_pantools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.3-0</code>,  </span></summary>
      

      ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.3.3-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``2.0.0-0``,  ``1.2-1``,  ``1.2-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends aster: ``1.3.*``
   :depends blast: 
   :depends fastani: 
   :depends fasttree: 
   :depends graphviz: 
   :depends iqtree: 
   :depends kmc: ``3.0.1.*``
   :depends mafft: 
   :depends mash: ``2.3.*``
   :depends mcl: 
   :depends openjdk: ``8.*``
   :depends python: ``>=3.7``
   :depends r-ape: 
   :depends r-base: ``>=3.5.0``
   :depends r-ggplot2: 
   :depends tabix: 
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

      mamba install pantools

   and update with::

      mamba update pantools

  To create a new environment, run::

      mamba create --name myenvname pantools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pantools:<tag>

   (see `pantools/tags`_ for valid values for ``<tag>``)


.. |downloads_pantools| image:: https://img.shields.io/conda/dn/bioconda/pantools.svg?style=flat
   :target: https://anaconda.org/bioconda/pantools
   :alt:   (downloads)
.. |docker_pantools| image:: https://quay.io/repository/biocontainers/pantools/status
   :target: https://quay.io/repository/biocontainers/pantools
.. _`pantools/tags`: https://quay.io/repository/biocontainers/pantools?tab=tags


.. raw:: html

    <script>
        var package = "pantools";
        var versions = ["4.2.2","4.2.1","4.2.0","4.1.1","4.1.0"];
    </script>





Notes
-----
PanTools is Java program that comes with a custom wrapper Python script.
This wrapper is called \"pantools\" and is on \$PATH by default.
By default \"\-Xms512m \-Xmx1g\" is set in the wrapper.
If you want to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"pantools \-Xms512m \-Xmx1g\".
NB\: Both \`BUSCO\` and \`bcftools\` are dependencies of PanTools but they are not included in this recipe due to conflicts on MacOS.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantools/README.html
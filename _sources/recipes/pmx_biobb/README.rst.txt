:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmx_biobb'
.. highlight: bash

pmx_biobb
=========

.. conda:recipe:: pmx_biobb
   :replaces_section_title:
   :noindex:

   Toolkit for free\-energy calculation setup\/analysis and biomolecular structure handling

   :homepage: https://github.com/deGrootLab/pmx/tree/develop
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`pmx_biobb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmx_biobb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmx_biobb/meta.yaml>`_

   pmx\: alchemistry in gromacs
   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=

   \|build\| \|cov\|

   \*\*Warning\:\*\* this is a development version of \`\`pmx\`\`\, it is not stable or reliable yet. You are welcome to
   try\/test it and provide feedback\, but use at your own risk. The current stable version of \`\`pmx\`\` can
   be found in the master branch\: https\:\/\/github.com\/deGrootLab\/pmx

   \`\`pmx\`\` is a python library that allows users to setup and analyse molecular
   dynamics simulations with the \`Gromacs \<http\:\/\/gromacs.org\>\`\_ package.
   Among its main features are the setup and analysis of alchemical free energy
   calculations for protein\, nucleic acid\, and small molecule mutations.

   https\:\/\/degrootlab.github.io\/pmx\/

   Citations
   \-\-\-\-\-\-\-\-\-
   \`\`pmx\`\` is a research software. If you make use of it in scientific publications\, please cite the following papers\:\:

       \@article\{Gapsys2015pmx\,
           title \= \{pmx\: Automated protein structure and topology
           generation for alchemical perturbations\}\,
           author \= \{Gapsys\, Vytautas and Michielssens\, Servaas
           and Seeliger\, Daniel and de Groot\, Bert L.\}\,
           journal \= \{Journal of Computational Chemistry\}\,
           volume \= \{36\}\,
           number \= \{5\}\,
           pages \= \{348\-\-354\}\,
           year \= \{2015\}\,
           doi \= \{10.1002\/jcc.23804\}
       \}

       \@article\{Seeliger2010pmx\,
           title \= \{Protein Thermostability Calculations Using
           Alchemical Free Energy Simulations\}\,
           author \= \{Seeliger\, Daniel and de Groot\, Bert L.\}\,
           journal \= \{Biophysical Journal\}\,
           volume \= \{98\}\,
           number \= \{10\}\,
           pages \= \{2309\-\-2316\}\,
           year \= \{2010\}\,
           doi \= \{10.1016\/j.bpj.2010.01.051\}
       \}


   License
   \-\-\-\-\-\-\-
   \`\`pmx\`\` is licensed under the GNU Lesser General Public License v3.0 \(LGPL v3\).

   .. \|build\| image\:\: https\:\/\/travis\-ci.org\/deGrootLab\/pmx.svg\?branch\=master
       \:alt\: Build Status
       \:scale\: 100\%
       \:target\: https\:\/\/travis\-ci.org\/deGrootLab\/pmx

   .. \|cov\| image\:\: https\:\/\/codecov.io\/gh\/deGrootLab\/pmx\/branch\/develop\/graph\/badge.svg
       \:alt\: Code coverage
       \:scale\: 100\%
       \:target\: https\:\/\/codecov.io\/gh\/deGrootLab\/pmx





.. conda:package:: pmx_biobb

   |downloads_pmx_biobb| |docker_pmx_biobb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.2.2-0</code>,  <code>5.2.1-0</code>,  <code>4.1.3-1</code>,  <code>4.1.3-0</code>,  <code>4.1.2-2</code>,  <code>4.1.2-1</code>,  <code>4.1.2-0</code>,  <code>4.0.2-0</code>,  <code>3.0.3-4</code>,  </span></summary>
      

      ``5.2.2-0``,  ``5.2.1-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.1.2-2``,  ``4.1.2-1``,  ``4.1.2-0``,  ``4.0.2-0``,  ``3.0.3-4``,  ``3.0.3-3``,  ``3.0.3-2``,  ``3.0.3-1``,  ``3.0.3-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends cxx-compiler: 
   :depends libgcc: ``>=13``
   :depends matplotlib-base: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rdkit: 
   :depends scipy: 
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

      mamba install pmx_biobb

   and update with::

      mamba update pmx_biobb

  To create a new environment, run::

      mamba create --name myenvname pmx_biobb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pmx_biobb:<tag>

   (see `pmx_biobb/tags`_ for valid values for ``<tag>``)


.. |downloads_pmx_biobb| image:: https://img.shields.io/conda/dn/bioconda/pmx_biobb.svg?style=flat
   :target: https://anaconda.org/bioconda/pmx_biobb
   :alt:   (downloads)
.. |docker_pmx_biobb| image:: https://quay.io/repository/biocontainers/pmx_biobb/status
   :target: https://quay.io/repository/biocontainers/pmx_biobb
.. _`pmx_biobb/tags`: https://quay.io/repository/biocontainers/pmx_biobb?tab=tags


.. raw:: html

    <script>
        var package = "pmx_biobb";
        var versions = ["5.2.2","5.2.1","4.1.3","4.1.3","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmx_biobb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmx_biobb/README.html
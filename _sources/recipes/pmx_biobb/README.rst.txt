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
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends future: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends perl: 
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pmx_biobb

   and update with::

      conda update pmx_biobb

   or use the docker container::

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
        var versions = ["1.0.0","1.0.0","1.0.0"];
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
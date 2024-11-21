:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_pmx'
.. highlight: bash

biobb_pmx
=========

.. conda:recipe:: biobb_pmx
   :replaces_section_title:
   :noindex:

   Biobb\_pmx is the Biobb module collection to perform PMX \(http\:\/\/pmx.mpibpc.mpg.de\) executions.

   :homepage: https://github.com/bioexcel/biobb_pmx
   :license: APACHE / Apache Software License
   :recipe: /`biobb_pmx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_pmx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_pmx/meta.yaml>`_

   \[\!\[\]\(https\:\/\/readthedocs.org\/projects\/biobb\-pmx\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-pmx.readthedocs.io\/en\/latest\/\?badge\=latest\)
   \[\!\[\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\)\]\(https\:\/\/anaconda.org\/bioconda\/biobb\_pmx\)
   \[\!\[\]\(https\:\/\/img.shields.io\/badge\/docker\-Quay.io\-blue\)\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_pmx\)
   \[\!\[\]\(https\:\/\/www.singularity\-hub.org\/static\/img\/hosted\-singularity\-\-hub\-\%23e32929.svg\)\]\(https\:\/\/www.singularity\-hub.org\/collections\/2735\/usage\)
   \[\!\[\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_pmx

   \#\#\# Introduction
   Biobb\_pmx is the Biobb module collection to perform PMX \(http\:\/\/pmx.mpibpc.mpg.de\) executions.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_pmx.readthedocs.io\/en\/latest\/\).

   \#\#\# Version
   v5.0.0 Jan 2024 Release


   \#\#\# Copyright \& Licensing
    This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2024 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2024 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)

   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_pmx

   |downloads_biobb_pmx| |docker_biobb_pmx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.8.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.0-0</code>,  </span></summary>
      

      ``5.0.0-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.8.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biobb_common: ``5.0.0``
   :depends pmx_biobb: ``4.1.3``
   :depends python: ``>=3.9``
   :depends scipy: ``<1.14``
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

      mamba install biobb_pmx

   and update with::

      mamba update biobb_pmx

  To create a new environment, run::

      mamba create --name myenvname biobb_pmx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_pmx:<tag>

   (see `biobb_pmx/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_pmx| image:: https://img.shields.io/conda/dn/bioconda/biobb_pmx.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_pmx
   :alt:   (downloads)
.. |docker_biobb_pmx| image:: https://quay.io/repository/biocontainers/biobb_pmx/status
   :target: https://quay.io/repository/biocontainers/biobb_pmx
.. _`biobb_pmx/tags`: https://quay.io/repository/biocontainers/biobb_pmx?tab=tags


.. raw:: html

    <script>
        var package = "biobb_pmx";
        var versions = ["5.0.0","4.2.1","4.2.0","4.1.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_pmx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_pmx/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_vs'
.. highlight: bash

biobb_vs
========

.. conda:recipe:: biobb_vs
   :replaces_section_title:
   :noindex:

   Biobb\_vs is the Biobb module collection to perform virtual screening studies.

   :homepage: https://github.com/bioexcel/biobb_vs
   :license: APACHE / Apache Software License
   :recipe: /`biobb_vs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_vs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_vs/meta.yaml>`_

   \# biobb\_vs

   \#\#\# Introduction
   Biobb\_vs is the Biobb module collection to perform virtual screening studies.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-vs.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2023 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2023 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_vs

   |downloads_biobb_vs| |docker_biobb_vs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.9.0-0</code>,  <code>3.8.1-0</code>,  <code>3.8.0-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  </span></summary>
      

      ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.9.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biobb_common: ``4.0.0``
   :depends fpocket: ``3.1.4.2``
   :depends python: ``>=3.7,<3.10``
   :depends vina: ``1.2.3``
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

      mamba install biobb_vs

   and update with::

      mamba update biobb_vs

  To create a new environment, run::

      mamba create --name myenvname biobb_vs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_vs:<tag>

   (see `biobb_vs/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_vs| image:: https://img.shields.io/conda/dn/bioconda/biobb_vs.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_vs
   :alt:   (downloads)
.. |docker_biobb_vs| image:: https://quay.io/repository/biocontainers/biobb_vs/status
   :target: https://quay.io/repository/biocontainers/biobb_vs
.. _`biobb_vs/tags`: https://quay.io/repository/biocontainers/biobb_vs?tab=tags


.. raw:: html

    <script>
        var package = "biobb_vs";
        var versions = ["4.0.0","4.0.0","4.0.0","3.9.0","3.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_vs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_vs/README.html
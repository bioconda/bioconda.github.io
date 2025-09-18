:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_flexserv'
.. highlight: bash

biobb_flexserv
==============

.. conda:recipe:: biobb_flexserv
   :replaces_section_title:
   :noindex:

   Biobb\_flexserv is the Biobb module collection for biomolecular flexibility studies on protein 3D structures.

   :homepage: https://github.com/bioexcel/biobb_flexserv
   :documentation: http://biobb-flexserv.readthedocs.io/en/latest/
   
   :license: Apache-2.0 license
   :recipe: /`biobb_flexserv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_flexserv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_flexserv/meta.yaml>`_

   \# biobb\_flexserv

   \#\#\# Introduction
   Biobb\_flexserv is the Biobb module collection for biomolecular flexibility studies on protein 3D structures. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\-flexserv.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU Horizon Europe \[101093290\]\(https\:\/\/cordis.europa.eu\/project\/id\/101093290\)\, EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2025 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2025 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_flexserv

   |downloads_biobb_flexserv| |docker_biobb_flexserv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1.0-1</code>,  <code>5.1.0-0</code>,  <code>5.0.0-1</code>,  <code>5.0.0-0</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.3-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  </span></summary>
      

      ``5.1.0-1``,  ``5.1.0-0``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.9.1-1``,  ``3.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biobb_common: ``5.1.0``
   :depends flexserv: ``1.0.2``
   :depends pcasuite: ``==1.0.0 h7baada4_6``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends python: ``>=3.9``
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

      mamba install biobb_flexserv

   and update with::

      mamba update biobb_flexserv

  To create a new environment, run::

      mamba create --name myenvname biobb_flexserv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biobb_flexserv:<tag>

   (see `biobb_flexserv/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_flexserv| image:: https://img.shields.io/conda/dn/bioconda/biobb_flexserv.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_flexserv
   :alt:   (downloads)
.. |docker_biobb_flexserv| image:: https://quay.io/repository/biocontainers/biobb_flexserv/status
   :target: https://quay.io/repository/biocontainers/biobb_flexserv
.. _`biobb_flexserv/tags`: https://quay.io/repository/biocontainers/biobb_flexserv?tab=tags


.. raw:: html

    <script>
        var package = "biobb_flexserv";
        var versions = ["5.1.0","5.1.0","5.0.0","5.0.0","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_flexserv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_flexserv/README.html
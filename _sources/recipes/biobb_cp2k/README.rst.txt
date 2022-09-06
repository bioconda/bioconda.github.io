:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_cp2k'
.. highlight: bash

biobb_cp2k
==========

.. conda:recipe:: biobb_cp2k
   :replaces_section_title:
   :noindex:

   Biobb\_cp2k is a BioBB category for CP2K QM package.

   :homepage: https://github.com/bioexcel/biobb_cp2k
   :license: APACHE / Apache Software License
   :recipe: /`biobb_cp2k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cp2k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cp2k/meta.yaml>`_

   \[\!\[\]\(https\:\/\/readthedocs.org\/projects\/biobb\-cp2k\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-cp2k.readthedocs.io\/en\/latest\/\?badge\=latest\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\)\]\(https\:\/\/anaconda.org\/bioconda\/biobb\_cp2k\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/docker\-Quay.io\-blue\)\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_cp2k\?tab\=tags\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_cp2k

   \#\#\# Introduction
   Biobb\_cp2k allows setup and simulation of QM simulations using CP2K QM package. 
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create   new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_ml.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(https\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(https\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2022 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2022 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_cp2k

   |downloads_biobb_cp2k| |docker_biobb_cp2k|

   :versions:
      
      

      ``3.8.0-0``

      

   
   :depends biobb_common: ``3.8.1``
   :depends cp2k: ``7.1.0``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_cp2k

   and update with::

      conda update biobb_cp2k

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_cp2k:<tag>

   (see `biobb_cp2k/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_cp2k| image:: https://img.shields.io/conda/dn/bioconda/biobb_cp2k.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_cp2k
   :alt:   (downloads)
.. |docker_biobb_cp2k| image:: https://quay.io/repository/biocontainers/biobb_cp2k/status
   :target: https://quay.io/repository/biocontainers/biobb_cp2k
.. _`biobb_cp2k/tags`: https://quay.io/repository/biocontainers/biobb_cp2k?tab=tags


.. raw:: html

    <script>
        var package = "biobb_cp2k";
        var versions = ["3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_cp2k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_cp2k/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_utils'
.. highlight: bash

biobb_structure_utils
=====================

.. conda:recipe:: biobb_structure_utils
   :replaces_section_title:
   :noindex:

   Biobb\_structure\_utils is the Biobb module collection to modify or extract information from a PDB structure file.

   :homepage: https://github.com/bioexcel/biobb_structure_utils
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_utils/meta.yaml>`_

   \[\!\[\]\(https\:\/\/readthedocs.org\/projects\/biobb\-structure\-utils\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-structure\-utils.readthedocs.io\/en\/latest\/\?badge\=latest\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_structure\_utils

   Biobb\_structure\_utils is the Biobb module collection to modify or extract information from a PDB structure file\, such as pulling out a particular model or chain\, removing water molecules or ligands\, or renumbering or sorting atoms or residues. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools. The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_structure\_utils.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2021 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2021 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_structure_utils

   |downloads_biobb_structure_utils| |docker_biobb_structure_utils|

   :versions:
      
      

      ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``

      

   
   :depends biobb_common: ``3.6.0``
   :depends biobb_structure_checking: ``3.8.5``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_structure_utils

   and update with::

      conda update biobb_structure_utils

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_structure_utils:<tag>

   (see `biobb_structure_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_structure_utils| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_utils
   :alt:   (downloads)
.. |docker_biobb_structure_utils| image:: https://quay.io/repository/biocontainers/biobb_structure_utils/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_utils
.. _`biobb_structure_utils/tags`: https://quay.io/repository/biocontainers/biobb_structure_utils?tab=tags


.. raw:: html

    <script>
        var package = "biobb_structure_utils";
        var versions = ["3.6.1","3.6.0","3.5.3","3.5.2","3.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_utils/README.html
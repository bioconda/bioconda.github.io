:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_wf_mutations'
.. highlight: bash

biobb_wf_mutations
==================

.. conda:recipe:: biobb_wf_mutations
   :replaces_section_title:
   :noindex:

   Lysozyme plus Mutations workflow built using BioBB Based on the official Gromacs tutorial\: http\:\/\/www.mdtutorials.com\/gmx\/lysozyme\/01\_pdb2gmx.html

   :homepage: https://github.com/bioexcel/biobb_md
   :license: APACHE / Apache Software License
   :recipe: /`biobb_wf_mutations <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_wf_mutations>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_wf_mutations/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-md\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-md.readthedocs.io\/en\/latest\/\?badge\=latest\)


   \# biobb\_wf\_mutations

   \#\#\# Introduction
   Lysozyme \+ Mutations workflow built using BioBB Based on the official Gromacs tutorial\: http\:\/\/www.mdtutorials.com\/gmx\/lysozyme\/01\_pdb2gmx.html
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_md.readthedocs.io\/en\/latest\/\).

   \#\#\# Version
   February 2019 Release

   \#\#\# Copyright \& Licensing
   This software has been developed in the MMB group \(http\:\/\/mmb.irbbarcelona.org\) at the
   BSC \(http\:\/\/www.bsc.es\/\) \& IRB \(https\:\/\/www.irbbarcelona.org\/\) for the European BioExcel \(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission
   \(EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2019 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2019 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)

   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file
   \[LICENSE\]\(LICENSE\) for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2015\/12\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_wf_mutations

   |downloads_biobb_wf_mutations| |docker_biobb_wf_mutations|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``

      

   
   :depends biobb_adapters: ``>=0.1.4``
   :depends biobb_common: ``>=0.1.2``
   :depends biobb_io: ``>=0.1.4``
   :depends biobb_md: ``>=0.1.5``
   :depends biobb_model: ``>=0.1.5``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_wf_mutations

   and update with::

      conda update biobb_wf_mutations

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_wf_mutations:<tag>

   (see `biobb_wf_mutations/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_wf_mutations| image:: https://img.shields.io/conda/dn/bioconda/biobb_wf_mutations.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_wf_mutations
   :alt:   (downloads)
.. |docker_biobb_wf_mutations| image:: https://quay.io/repository/biocontainers/biobb_wf_mutations/status
   :target: https://quay.io/repository/biocontainers/biobb_wf_mutations
.. _`biobb_wf_mutations/tags`: https://quay.io/repository/biocontainers/biobb_wf_mutations?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_wf_mutations/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_wf_mutations/README.html
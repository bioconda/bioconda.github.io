:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_common'
.. highlight: bash

biobb_common
============

.. conda:recipe:: biobb_common
   :replaces_section_title:
   :noindex:

   Biobb\_common is the base package required to use the biobb packages.

   :homepage: https://github.com/bioexcel/biobb_common
   :license: APACHE / Apache Software License
   :recipe: /`biobb_common <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_common>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_common/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-common\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-common.readthedocs.io\/en\/latest\/\?badge\=latest\)

   \# biobb\_common

   \#\#\# Introduction
   Biobb\_common is the base package required to use the biobb
   packages.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_common.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2020 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2020 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_common

   |downloads_biobb_common| |docker_biobb_common|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  <code>0.1.2-0</code>,  <code>0.0.8-0</code>,  </span></summary>
      

      ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.0.8-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.76``
   :depends python: ``3.7.*``
   :depends pyyaml: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_common

   and update with::

      conda update biobb_common

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_common:<tag>

   (see `biobb_common/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_common| image:: https://img.shields.io/conda/dn/bioconda/biobb_common.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_common
   :alt:   (downloads)
.. |docker_biobb_common| image:: https://quay.io/repository/biocontainers/biobb_common/status
   :target: https://quay.io/repository/biocontainers/biobb_common
.. _`biobb_common/tags`: https://quay.io/repository/biocontainers/biobb_common?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_common/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_common/README.html
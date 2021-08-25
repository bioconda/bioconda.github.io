:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_chemistry'
.. highlight: bash

biobb_chemistry
===============

.. conda:recipe:: biobb_chemistry
   :replaces_section_title:
   :noindex:

   Biobb\_chemistry is the Biobb module collection to perform chemical conversions.

   :homepage: https://github.com/bioexcel/biobb_chemistry
   :license: APACHE / Apache Software License
   :recipe: /`biobb_chemistry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_chemistry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_chemistry/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/biobb\-chemistry\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-chemistry.readthedocs.io\/en\/latest\/\?badge\=latest\) \[\!\[install with bioconda\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\)\]\(https\:\/\/anaconda.org\/bioconda\/biobb\_chemistry\) \[\!\[Docker image\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_io\/status\)\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_chemistry\) \[\!\[Singularity image\]\(https\:\/\/www.singularity\-hub.org\/static\/img\/hosted\-singularity\-\-hub\-\%23e32929.svg\)\]\(https\:\/\/www.singularity\-hub.org\/collections\/2886\) \[\!\[License\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_chemistry

   \#\#\# Introduction
   Biobb\_chemistry is the Biobb module collection to perform chemistry over molecular dynamics simulations.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_chemistry.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(http\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(http\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2021 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2021 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_chemistry

   |downloads_biobb_chemistry| |docker_biobb_chemistry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.5.0-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.0.8-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends acpype: ``2019.10.05.12.26``
   :depends ambertools: ``20.0``
   :depends biobb_common: ``3.6.0``
   :depends openbabel: ``2.4.1``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_chemistry

   and update with::

      conda update biobb_chemistry

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_chemistry:<tag>

   (see `biobb_chemistry/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_chemistry| image:: https://img.shields.io/conda/dn/bioconda/biobb_chemistry.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_chemistry
   :alt:   (downloads)
.. |docker_biobb_chemistry| image:: https://quay.io/repository/biocontainers/biobb_chemistry/status
   :target: https://quay.io/repository/biocontainers/biobb_chemistry
.. _`biobb_chemistry/tags`: https://quay.io/repository/biocontainers/biobb_chemistry?tab=tags


.. raw:: html

    <script>
        var package = "biobb_chemistry";
        var versions = ["3.6.0","3.5.0","3.0.2","3.0.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_chemistry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_chemistry/README.html
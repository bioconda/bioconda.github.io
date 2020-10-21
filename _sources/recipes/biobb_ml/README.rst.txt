:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_ml'
.. highlight: bash

biobb_ml
========

.. conda:recipe:: biobb_ml
   :replaces_section_title:
   :noindex:

   Biobb\_ml is the Biobb module collection to perform machine learning predictions.

   :homepage: https://github.com/bioexcel/biobb_ml
   :license: APACHE / Apache Software License
   :recipe: /`biobb_ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_ml/meta.yaml>`_

   \[\!\[\]\(https\:\/\/readthedocs.org\/projects\/biobb\-ml\/badge\/\?version\=latest\)\]\(https\:\/\/biobb\-ml.readthedocs.io\/en\/latest\/\?badge\=latest\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/install\%20with\-bioconda\-brightgreen.svg\?style\=flat\)\]\(https\:\/\/anaconda.org\/bioconda\/biobb\_ml\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/docker\-Quay.io\-blue\)\]\(https\:\/\/quay.io\/repository\/biocontainers\/biobb\_ml\) \[\!\[\]\(https\:\/\/www.singularity\-hub.org\/static\/img\/hosted\-singularity\-\-hub\-\%23e32929.svg\)\]\(https\:\/\/singularity\-hub.org\/collections\/4574\) \[\!\[\]\(https\:\/\/img.shields.io\/badge\/License\-Apache\%202.0\-blue.svg\)\]\(https\:\/\/opensource.org\/licenses\/Apache\-2.0\)

   \# biobb\_ml

   \#\#\# Introduction
   Biobb\_ml is the Biobb module collection to perform machine learning predictions. 
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create   new layer of compatibility and interoperability over popular
   bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\:
   \[latest API documentation\]\(http\:\/\/biobb\_ml.readthedocs.io\/en\/latest\/\).


   \#\#\# Copyright \& Licensing
   This software has been developed in the \[MMB group\]\(https\:\/\/mmb.irbbarcelona.org\) at the \[BSC\]\(https\:\/\/www.bsc.es\/\) \& \[IRB\]\(https\:\/\/www.irbbarcelona.org\/\) for the \[European BioExcel\]\(http\:\/\/bioexcel.eu\/\)\, funded by the European Commission \(EU H2020 \[823830\]\(http\:\/\/cordis.europa.eu\/projects\/823830\)\, EU H2020 \[675728\]\(http\:\/\/cordis.europa.eu\/projects\/675728\)\).

   \* \(c\) 2015\-2020 \[Barcelona Supercomputing Center\]\(https\:\/\/www.bsc.es\/\)
   \* \(c\) 2015\-2020 \[Institute for Research in Biomedicine\]\(https\:\/\/www.irbbarcelona.org\/\)
   Licensed under the
   \[Apache License 2.0\]\(https\:\/\/www.apache.org\/licenses\/LICENSE\-2.0\)\, see the file LICENSE for details.

   \!\[\]\(https\:\/\/bioexcel.eu\/wp\-content\/uploads\/2019\/04\/Bioexcell\_logo\_1080px\_transp.png \"Bioexcel\"\)





.. conda:package:: biobb_ml

   |downloads_biobb_ml| |docker_biobb_ml|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends biobb_common: ``3.0.1``
   :depends h5py: ``2.10.0``
   :depends pandas: ``1.0.5``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``0.23.1``
   :depends seaborn: ``0.10.1``
   :depends tensorflow: ``2.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_ml

   and update with::

      conda update biobb_ml

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_ml:<tag>

   (see `biobb_ml/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_ml| image:: https://img.shields.io/conda/dn/bioconda/biobb_ml.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_ml
   :alt:   (downloads)
.. |docker_biobb_ml| image:: https://quay.io/repository/biocontainers/biobb_ml/status
   :target: https://quay.io/repository/biocontainers/biobb_ml
.. _`biobb_ml/tags`: https://quay.io/repository/biocontainers/biobb_ml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_ml/README.html
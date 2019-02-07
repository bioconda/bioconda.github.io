.. title:: Package Recipe 'bioconductor-dresscheck'
.. highlight: bash


bioconductor-dresscheck
=======================

.. conda:recipe:: bioconductor-dresscheck
   :replaces_section_title:

   data and software for checking Dressman JCO 25\(5\) 2007

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/dressCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dresscheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck/meta.yaml>`_

   


.. conda:package:: bioconductor-dresscheck

   |downloads_bioconductor-dresscheck| |docker_bioconductor-dresscheck|

   :versions: 0.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-dresscheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dresscheck

   and update with::

      conda update bioconductor-dresscheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-dresscheck


.. |required_by_bioconductor-dresscheck| conda:required_by:: bioconductor-dresscheck
.. |downloads_bioconductor-dresscheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dresscheck.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-dresscheck| image:: https://quay.io/repository/biocontainers/bioconductor-dresscheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dresscheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html


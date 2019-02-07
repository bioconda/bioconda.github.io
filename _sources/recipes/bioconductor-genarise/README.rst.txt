.. title:: Package Recipe 'bioconductor-genarise'
.. highlight: bash


bioconductor-genarise
=====================

.. conda:recipe:: bioconductor-genarise
   :replaces_section_title:

   genArise is an easy to use tool for dual color microarray data. Its GUI\-Tk based environment let any non\-experienced user performs a basic\, but not simple\, data analysis just following a wizard. In addition it provides some tools for the developer.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genArise.html
   :license: file LICENSE
   :recipe: /`bioconductor-genarise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genarise/meta.yaml>`_

   


.. conda:package:: bioconductor-genarise

   |downloads_bioconductor-genarise| |docker_bioconductor-genarise|

   :versions: 1.58.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-locfit`  :conda:package:`r-tkrplot`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-genarise|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genarise

   and update with::

      conda update bioconductor-genarise

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genarise


.. |required_by_bioconductor-genarise| conda:required_by:: bioconductor-genarise
.. |downloads_bioconductor-genarise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genarise.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genarise| image:: https://quay.io/repository/biocontainers/bioconductor-genarise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genarise







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genarise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genarise/README.html


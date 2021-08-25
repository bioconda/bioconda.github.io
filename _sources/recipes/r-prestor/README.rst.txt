:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-prestor'
.. highlight: bash

r-prestor
=========

.. conda:recipe:: r-prestor
   :replaces_section_title:
   :noindex:

   A prototype package for generating quality control plots from pRESTO output.

   :homepage: https://bitbucket.org/javh/prototype-prestor
   :license: `OTHER / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) <https://creativecommons.org/licenses/by-sa/4.0/legalcode>`_
   :recipe: /`r-prestor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-prestor/meta.yaml>`_

   


.. conda:package:: r-prestor

   |downloads_r-prestor| |docker_r-prestor|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends r-alakazam: ``>=0.2.11``
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-bibtex: 
   :depends r-captioner: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=2``
   :depends r-hexbin: 
   :depends r-knitr: 
   :depends r-lazyeval: 
   :depends r-optparse: 
   :depends r-rmarkdown: 
   :depends r-roxygen2: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-prestor

   and update with::

      conda update r-prestor

   or use the docker container::

      docker pull quay.io/biocontainers/r-prestor:<tag>

   (see `r-prestor/tags`_ for valid values for ``<tag>``)


.. |downloads_r-prestor| image:: https://img.shields.io/conda/dn/bioconda/r-prestor.svg?style=flat
   :target: https://anaconda.org/bioconda/r-prestor
   :alt:   (downloads)
.. |docker_r-prestor| image:: https://quay.io/repository/biocontainers/r-prestor/status
   :target: https://quay.io/repository/biocontainers/r-prestor
.. _`r-prestor/tags`: https://quay.io/repository/biocontainers/r-prestor?tab=tags


.. raw:: html

    <script>
        var package = "r-prestor";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-prestor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-prestor/README.html
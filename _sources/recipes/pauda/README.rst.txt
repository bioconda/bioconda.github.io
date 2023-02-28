:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pauda'
.. highlight: bash

pauda
=====

.. conda:recipe:: pauda
   :replaces_section_title:
   :noindex:

   PAUDA is a new approach toward the problem of comparing DNA reads against a database of protein reference sequences that is applicable to very large datasets consisting of hundreds of millions or billions of reads.

   :homepage: https://ab.inf.uni-tuebingen.de/software/pauda
   :license: GPL
   :recipe: /`pauda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauda/meta.yaml>`_

   


.. conda:package:: pauda

   |downloads_pauda| |docker_pauda|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bowtie2: 
   :depends java-jdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pauda

   and update with::

      conda update pauda

   or use the docker container::

      docker pull quay.io/biocontainers/pauda:<tag>

   (see `pauda/tags`_ for valid values for ``<tag>``)


.. |downloads_pauda| image:: https://img.shields.io/conda/dn/bioconda/pauda.svg?style=flat
   :target: https://anaconda.org/bioconda/pauda
   :alt:   (downloads)
.. |docker_pauda| image:: https://quay.io/repository/biocontainers/pauda/status
   :target: https://quay.io/repository/biocontainers/pauda
.. _`pauda/tags`: https://quay.io/repository/biocontainers/pauda?tab=tags


.. raw:: html

    <script>
        var package = "pauda";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pauda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pauda/README.html
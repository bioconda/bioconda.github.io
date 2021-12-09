:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peka'
.. highlight: bash

peka
====

.. conda:recipe:: peka
   :replaces_section_title:
   :noindex:

   Analysis of kmers located around locations of interest

   :homepage: https://github.com/ulelab/peka
   :license: GPL-3.0
   :recipe: /`peka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peka/meta.yaml>`_

   


.. conda:package:: peka

   |downloads_peka| |docker_peka|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peka

   and update with::

      conda update peka

   or use the docker container::

      docker pull quay.io/biocontainers/peka:<tag>

   (see `peka/tags`_ for valid values for ``<tag>``)


.. |downloads_peka| image:: https://img.shields.io/conda/dn/bioconda/peka.svg?style=flat
   :target: https://anaconda.org/bioconda/peka
   :alt:   (downloads)
.. |docker_peka| image:: https://quay.io/repository/biocontainers/peka/status
   :target: https://quay.io/repository/biocontainers/peka
.. _`peka/tags`: https://quay.io/repository/biocontainers/peka?tab=tags


.. raw:: html

    <script>
        var package = "peka";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peka/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parebrick'
.. highlight: bash

parebrick
=========

.. conda:recipe:: parebrick
   :replaces_section_title:
   :noindex:

   A bioinf tool for finding genome rearrangements in bacterial genomes

   :homepage: https://github.com/ctlab/parallel-rearrangements
   :license: MIT
   :recipe: /`parebrick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parebrick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parebrick/meta.yaml>`_

   


.. conda:package:: parebrick

   |downloads_parebrick| |docker_parebrick|

   :versions:
      
      

      ``0.3.7-0``

      

   
   :depends bg: 
   :depends ete3: 
   :depends pyqt: 
   :depends python: ``>=3.6,<4.0``
   :depends scikit-learn: 
   :depends seaborn: ``>=0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parebrick

   and update with::

      conda update parebrick

   or use the docker container::

      docker pull quay.io/biocontainers/parebrick:<tag>

   (see `parebrick/tags`_ for valid values for ``<tag>``)


.. |downloads_parebrick| image:: https://img.shields.io/conda/dn/bioconda/parebrick.svg?style=flat
   :target: https://anaconda.org/bioconda/parebrick
   :alt:   (downloads)
.. |docker_parebrick| image:: https://quay.io/repository/biocontainers/parebrick/status
   :target: https://quay.io/repository/biocontainers/parebrick
.. _`parebrick/tags`: https://quay.io/repository/biocontainers/parebrick?tab=tags


.. raw:: html

    <script>
        var package = "parebrick";
        var versions = ["0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parebrick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parebrick/README.html
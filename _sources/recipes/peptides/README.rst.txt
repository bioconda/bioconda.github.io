:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peptides'
.. highlight: bash

peptides
========

.. conda:recipe:: peptides
   :replaces_section_title:
   :noindex:

   Physicochemical properties\, indices and descriptors for amino\-acid sequences.

   :homepage: https://peptides.readthedocs.io/
   :license: MIT
   :recipe: /`peptides <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptides>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peptides/meta.yaml>`_

   


.. conda:package:: peptides

   |downloads_peptides| |docker_peptides|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peptides

   and update with::

      conda update peptides

   or use the docker container::

      docker pull quay.io/biocontainers/peptides:<tag>

   (see `peptides/tags`_ for valid values for ``<tag>``)


.. |downloads_peptides| image:: https://img.shields.io/conda/dn/bioconda/peptides.svg?style=flat
   :target: https://anaconda.org/bioconda/peptides
   :alt:   (downloads)
.. |docker_peptides| image:: https://quay.io/repository/biocontainers/peptides/status
   :target: https://quay.io/repository/biocontainers/peptides
.. _`peptides/tags`: https://quay.io/repository/biocontainers/peptides?tab=tags


.. raw:: html

    <script>
        var package = "peptides";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peptides/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peptides/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'boquila'
.. highlight: bash

boquila
=======

.. conda:recipe:: boquila
   :replaces_section_title:
   :noindex:

   NGS read simulator to eliminate read nucleotide bias in sequence analysis.


   :homepage: https://github.com/CompGenomeLab/boquila
   :license: MIT
   :recipe: /`boquila <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boquila>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boquila/meta.yaml>`_

   


.. conda:package:: boquila

   |downloads_boquila| |docker_boquila|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install boquila

   and update with::

      conda update boquila

   or use the docker container::

      docker pull quay.io/biocontainers/boquila:<tag>

   (see `boquila/tags`_ for valid values for ``<tag>``)


.. |downloads_boquila| image:: https://img.shields.io/conda/dn/bioconda/boquila.svg?style=flat
   :target: https://anaconda.org/bioconda/boquila
   :alt:   (downloads)
.. |docker_boquila| image:: https://quay.io/repository/biocontainers/boquila/status
   :target: https://quay.io/repository/biocontainers/boquila
.. _`boquila/tags`: https://quay.io/repository/biocontainers/boquila?tab=tags


.. raw:: html

    <script>
        var package = "boquila";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/boquila/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/boquila/README.html
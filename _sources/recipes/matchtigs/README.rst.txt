:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchtigs'
.. highlight: bash

matchtigs
=========

.. conda:recipe:: matchtigs
   :replaces_section_title:
   :noindex:

   Different algorithms for computing small and minimum plain text representations of kmer sets.


   :homepage: https://github.com/algbio/matchtigs.git
   :license: MIT
   :recipe: /`matchtigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchtigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchtigs/meta.yaml>`_

   


.. conda:package:: matchtigs

   |downloads_matchtigs| |docker_matchtigs|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends rust: ``>=1.58.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install matchtigs

   and update with::

      conda update matchtigs

   or use the docker container::

      docker pull quay.io/biocontainers/matchtigs:<tag>

   (see `matchtigs/tags`_ for valid values for ``<tag>``)


.. |downloads_matchtigs| image:: https://img.shields.io/conda/dn/bioconda/matchtigs.svg?style=flat
   :target: https://anaconda.org/bioconda/matchtigs
   :alt:   (downloads)
.. |docker_matchtigs| image:: https://quay.io/repository/biocontainers/matchtigs/status
   :target: https://quay.io/repository/biocontainers/matchtigs
.. _`matchtigs/tags`: https://quay.io/repository/biocontainers/matchtigs?tab=tags


.. raw:: html

    <script>
        var package = "matchtigs";
        var versions = ["1.3.1","1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchtigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchtigs/README.html
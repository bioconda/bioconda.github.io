:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genbank_to'
.. highlight: bash

genbank_to
==========

.. conda:recipe:: genbank_to
   :replaces_section_title:
   :noindex:

   genbank\_to\: convert genbank files to a swath of other formats

   :homepage: https://github.com/linsalrob/genbank_to
   :license: MIT / MIT
   :recipe: /`genbank_to <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank_to>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genbank_to/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.6465821`

   


.. conda:package:: genbank_to

   |downloads_genbank_to| |docker_genbank_to|

   :versions:
      
      

      ``0.42-0``,  ``0.41-0``,  ``0.35-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends pandas: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genbank_to

   and update with::

      conda update genbank_to

   or use the docker container::

      docker pull quay.io/biocontainers/genbank_to:<tag>

   (see `genbank_to/tags`_ for valid values for ``<tag>``)


.. |downloads_genbank_to| image:: https://img.shields.io/conda/dn/bioconda/genbank_to.svg?style=flat
   :target: https://anaconda.org/bioconda/genbank_to
   :alt:   (downloads)
.. |docker_genbank_to| image:: https://quay.io/repository/biocontainers/genbank_to/status
   :target: https://quay.io/repository/biocontainers/genbank_to
.. _`genbank_to/tags`: https://quay.io/repository/biocontainers/genbank_to?tab=tags


.. raw:: html

    <script>
        var package = "genbank_to";
        var versions = ["0.42","0.41","0.35"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genbank_to/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genbank_to/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codan'
.. highlight: bash

codan
=====

.. conda:recipe:: codan
   :replaces_section_title:
   :noindex:

   CDS prediction in eukaryotic transcripts.

   :homepage: https://github.com/pedronachtigall/CodAn
   :license: GPLv3
   :recipe: /`codan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codan/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bib/bbaa045`

   


.. conda:package:: codan

   |downloads_codan| |docker_codan|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends perl: 
   :depends perl-bioperl: 
   :depends perl-mce: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install codan

   and update with::

      conda update codan

   or use the docker container::

      docker pull quay.io/biocontainers/codan:<tag>

   (see `codan/tags`_ for valid values for ``<tag>``)


.. |downloads_codan| image:: https://img.shields.io/conda/dn/bioconda/codan.svg?style=flat
   :target: https://anaconda.org/bioconda/codan
   :alt:   (downloads)
.. |docker_codan| image:: https://quay.io/repository/biocontainers/codan/status
   :target: https://quay.io/repository/biocontainers/codan
.. _`codan/tags`: https://quay.io/repository/biocontainers/codan?tab=tags


.. raw:: html

    <script>
        var package = "codan";
        var versions = ["1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codan/README.html
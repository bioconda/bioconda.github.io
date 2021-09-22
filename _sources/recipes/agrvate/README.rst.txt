:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agrvate'
.. highlight: bash

agrvate
=======

.. conda:recipe:: agrvate
   :replaces_section_title:
   :noindex:

   Rapid identification of Staphylococcus aureus agr locus type and agr operon variants.

   :homepage: https://github.com/VishnuRaghuram94/AgrVATE
   :license: MIT
   :recipe: /`agrvate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agrvate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agrvate/meta.yaml>`_

   


.. conda:package:: agrvate

   |downloads_agrvate| |docker_agrvate|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends mummer: 
   :depends seqkit: 
   :depends snippy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install agrvate

   and update with::

      conda update agrvate

   or use the docker container::

      docker pull quay.io/biocontainers/agrvate:<tag>

   (see `agrvate/tags`_ for valid values for ``<tag>``)


.. |downloads_agrvate| image:: https://img.shields.io/conda/dn/bioconda/agrvate.svg?style=flat
   :target: https://anaconda.org/bioconda/agrvate
   :alt:   (downloads)
.. |docker_agrvate| image:: https://quay.io/repository/biocontainers/agrvate/status
   :target: https://quay.io/repository/biocontainers/agrvate
.. _`agrvate/tags`: https://quay.io/repository/biocontainers/agrvate?tab=tags


.. raw:: html

    <script>
        var package = "agrvate";
        var versions = ["1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agrvate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agrvate/README.html
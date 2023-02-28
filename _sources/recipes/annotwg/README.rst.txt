:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annotwg'
.. highlight: bash

annotwg
=======

.. conda:recipe:: annotwg
   :replaces_section_title:
   :noindex:

   Tool for annotating large VCF files

   :homepage: https://gitlab.com/cnrgh/annotwg
   :license: CeCILL
   :recipe: /`annotwg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotwg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotwg/meta.yaml>`_

   


.. conda:package:: annotwg

   |downloads_annotwg| |docker_annotwg|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bash: 
   :depends bcftools: 
   :depends coreutils: 
   :depends gawk: 
   :depends grep: 
   :depends htslib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install annotwg

   and update with::

      conda update annotwg

   or use the docker container::

      docker pull quay.io/biocontainers/annotwg:<tag>

   (see `annotwg/tags`_ for valid values for ``<tag>``)


.. |downloads_annotwg| image:: https://img.shields.io/conda/dn/bioconda/annotwg.svg?style=flat
   :target: https://anaconda.org/bioconda/annotwg
   :alt:   (downloads)
.. |docker_annotwg| image:: https://quay.io/repository/biocontainers/annotwg/status
   :target: https://quay.io/repository/biocontainers/annotwg
.. _`annotwg/tags`: https://quay.io/repository/biocontainers/annotwg?tab=tags


.. raw:: html

    <script>
        var package = "annotwg";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annotwg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annotwg/README.html
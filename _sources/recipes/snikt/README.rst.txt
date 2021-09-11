:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snikt'
.. highlight: bash

snikt
=====

.. conda:recipe:: snikt
   :replaces_section_title:
   :noindex:

   Identify and remove adapter\/systemic contamination in metagenomic sequencing DNA\/RNA data.

   :homepage: https://github.com/piyuranjan/SNIKT
   :license: MIT
   :recipe: /`snikt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snikt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snikt/meta.yaml>`_

   


.. conda:package:: snikt

   |downloads_snikt| |docker_snikt|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-docopt: 
   :depends r-gridextra: 
   :depends r-lubridate: 
   :depends r-tidyverse: 
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snikt

   and update with::

      conda update snikt

   or use the docker container::

      docker pull quay.io/biocontainers/snikt:<tag>

   (see `snikt/tags`_ for valid values for ``<tag>``)


.. |downloads_snikt| image:: https://img.shields.io/conda/dn/bioconda/snikt.svg?style=flat
   :target: https://anaconda.org/bioconda/snikt
   :alt:   (downloads)
.. |docker_snikt| image:: https://quay.io/repository/biocontainers/snikt/status
   :target: https://quay.io/repository/biocontainers/snikt
.. _`snikt/tags`: https://quay.io/repository/biocontainers/snikt?tab=tags


.. raw:: html

    <script>
        var package = "snikt";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snikt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snikt/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yass'
.. highlight: bash

yass
====

.. conda:recipe:: yass
   :replaces_section_title:
   :noindex:

   YASS is a genomic similarity search tool\, for nucleic \(DNA\/RNA\) sequences in fasta or plain text format.

   :homepage: http://bioinfo.lifl.fr/yass/
   :license: CeCILL Free Software License
   :recipe: /`yass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass/meta.yaml>`_
   :links: biotools: :biotools:`yass`

   


.. conda:package:: yass

   |downloads_yass| |docker_yass|

   :versions:
      
      

      ``1.14-4``,  ``1.14-3``,  ``1.14-2``,  ``1.14-1``,  ``1.14-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yass

   and update with::

      conda update yass

   or use the docker container::

      docker pull quay.io/biocontainers/yass:<tag>

   (see `yass/tags`_ for valid values for ``<tag>``)


.. |downloads_yass| image:: https://img.shields.io/conda/dn/bioconda/yass.svg?style=flat
   :target: https://anaconda.org/bioconda/yass
   :alt:   (downloads)
.. |docker_yass| image:: https://quay.io/repository/biocontainers/yass/status
   :target: https://quay.io/repository/biocontainers/yass
.. _`yass/tags`: https://quay.io/repository/biocontainers/yass?tab=tags


.. raw:: html

    <script>
        var package = "yass";
        var versions = ["1.14","1.14","1.14","1.14","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yass/README.html
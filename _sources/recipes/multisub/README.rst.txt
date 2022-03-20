:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multisub'
.. highlight: bash

multisub
========

.. conda:recipe:: multisub
   :replaces_section_title:
   :noindex:

   multiSub is a command\-line tool to prepare and\/or submit a SARS\-CoV\-2 genome sequence to the NCBI Genbank\, EBI ENA and GISAID sequence repositories.

   :homepage: https://github.com/maximilianh/multiSub
   :license: GPL3
   :recipe: /`multisub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multisub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multisub/meta.yaml>`_

   


.. conda:package:: multisub

   |downloads_multisub| |docker_multisub|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multisub

   and update with::

      conda update multisub

   or use the docker container::

      docker pull quay.io/biocontainers/multisub:<tag>

   (see `multisub/tags`_ for valid values for ``<tag>``)


.. |downloads_multisub| image:: https://img.shields.io/conda/dn/bioconda/multisub.svg?style=flat
   :target: https://anaconda.org/bioconda/multisub
   :alt:   (downloads)
.. |docker_multisub| image:: https://quay.io/repository/biocontainers/multisub/status
   :target: https://quay.io/repository/biocontainers/multisub
.. _`multisub/tags`: https://quay.io/repository/biocontainers/multisub?tab=tags


.. raw:: html

    <script>
        var package = "multisub";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multisub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multisub/README.html
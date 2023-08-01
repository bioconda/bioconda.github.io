:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextpolish2'
.. highlight: bash

nextpolish2
===========

.. conda:recipe:: nextpolish2
   :replaces_section_title:
   :noindex:

   Repeat\-aware polishing genomes assembled using HiFi long reads

   :homepage: https://github.com/Nextomics/NextPolish2
   :license: GBPL
   :recipe: /`nextpolish2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2/meta.yaml>`_

   


.. conda:package:: nextpolish2

   |downloads_nextpolish2| |docker_nextpolish2|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends yak: ``>=0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextpolish2

   and update with::

      conda update nextpolish2

   or use the docker container::

      docker pull quay.io/biocontainers/nextpolish2:<tag>

   (see `nextpolish2/tags`_ for valid values for ``<tag>``)


.. |downloads_nextpolish2| image:: https://img.shields.io/conda/dn/bioconda/nextpolish2.svg?style=flat
   :target: https://anaconda.org/bioconda/nextpolish2
   :alt:   (downloads)
.. |docker_nextpolish2| image:: https://quay.io/repository/biocontainers/nextpolish2/status
   :target: https://quay.io/repository/biocontainers/nextpolish2
.. _`nextpolish2/tags`: https://quay.io/repository/biocontainers/nextpolish2?tab=tags


.. raw:: html

    <script>
        var package = "nextpolish2";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextpolish2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextpolish2/README.html
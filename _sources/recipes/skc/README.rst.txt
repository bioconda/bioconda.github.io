:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skc'
.. highlight: bash

skc
===

.. conda:recipe:: skc
   :replaces_section_title:
   :noindex:

   Shared k\-mer content between two genomes

   :homepage: https://github.com/mbhall88/skc
   :license: MIT
   :recipe: /`skc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skc/meta.yaml>`_

   


.. conda:package:: skc

   |downloads_skc| |docker_skc|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install skc

   and update with::

      conda update skc

   or use the docker container::

      docker pull quay.io/biocontainers/skc:<tag>

   (see `skc/tags`_ for valid values for ``<tag>``)


.. |downloads_skc| image:: https://img.shields.io/conda/dn/bioconda/skc.svg?style=flat
   :target: https://anaconda.org/bioconda/skc
   :alt:   (downloads)
.. |docker_skc| image:: https://quay.io/repository/biocontainers/skc/status
   :target: https://quay.io/repository/biocontainers/skc
.. _`skc/tags`: https://quay.io/repository/biocontainers/skc?tab=tags


.. raw:: html

    <script>
        var package = "skc";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skc/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strelka'
.. highlight: bash

strelka
=======

.. conda:recipe:: strelka
   :replaces_section_title:
   :noindex:

   Strelka calls somatic and germline small variants from mapped sequencing reads

   :homepage: https://github.com/Illumina/strelka
   :license: GPL / GPL-3.0
   :recipe: /`strelka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka/meta.yaml>`_
   :links: biotools: :biotools:`strelka`

   


.. conda:package:: strelka

   |downloads_strelka| |docker_strelka|

   :versions:
      
      

      ``2.9.10-1``,  ``2.9.10-0``,  ``2.9.7-0``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.8.4-0``,  ``2.8.2-0``,  ``2.7.1-0``

      

   
   :depends python: ``2.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strelka

   and update with::

      conda update strelka

   or use the docker container::

      docker pull quay.io/biocontainers/strelka:<tag>

   (see `strelka/tags`_ for valid values for ``<tag>``)


.. |downloads_strelka| image:: https://img.shields.io/conda/dn/bioconda/strelka.svg?style=flat
   :target: https://anaconda.org/bioconda/strelka
   :alt:   (downloads)
.. |docker_strelka| image:: https://quay.io/repository/biocontainers/strelka/status
   :target: https://quay.io/repository/biocontainers/strelka
.. _`strelka/tags`: https://quay.io/repository/biocontainers/strelka?tab=tags


.. raw:: html

    <script>
        var package = "strelka";
        var versions = ["2.9.10","2.9.10","2.9.7","2.9.4","2.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strelka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strelka/README.html
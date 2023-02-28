:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phasius'
.. highlight: bash

phasius
=======

.. conda:recipe:: phasius
   :replaces_section_title:
   :noindex:

   A rust tool to create phase\-block maps from phased cram\/bam files

   :homepage: https://github.com/wdecoster/phasius
   :license: MIT
   :recipe: /`phasius <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phasius>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phasius/meta.yaml>`_

   


.. conda:package:: phasius

   |downloads_phasius| |docker_phasius|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phasius

   and update with::

      conda update phasius

   or use the docker container::

      docker pull quay.io/biocontainers/phasius:<tag>

   (see `phasius/tags`_ for valid values for ``<tag>``)


.. |downloads_phasius| image:: https://img.shields.io/conda/dn/bioconda/phasius.svg?style=flat
   :target: https://anaconda.org/bioconda/phasius
   :alt:   (downloads)
.. |docker_phasius| image:: https://quay.io/repository/biocontainers/phasius/status
   :target: https://quay.io/repository/biocontainers/phasius
.. _`phasius/tags`: https://quay.io/repository/biocontainers/phasius?tab=tags


.. raw:: html

    <script>
        var package = "phasius";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phasius/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phasius/README.html
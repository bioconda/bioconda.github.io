:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codingorf'
.. highlight: bash

codingorf
=========

.. conda:recipe:: codingorf
   :replaces_section_title:
   :noindex:

   codingorf\: The codingorf finds translatable ORFs from an input sequence

   :homepage: https://github.com/Woosub-Kim/codingorf
   :license: AGPL-3.0
   :recipe: /`codingorf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingorf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codingorf/meta.yaml>`_

   


.. conda:package:: codingorf

   |downloads_codingorf| |docker_codingorf|

   :versions:
      
      

      ``1.0.0-0``,  ``v1.0.0-0``

      

   
   :depends biopython: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install codingorf

   and update with::

      conda update codingorf

   or use the docker container::

      docker pull quay.io/biocontainers/codingorf:<tag>

   (see `codingorf/tags`_ for valid values for ``<tag>``)


.. |downloads_codingorf| image:: https://img.shields.io/conda/dn/bioconda/codingorf.svg?style=flat
   :target: https://anaconda.org/bioconda/codingorf
   :alt:   (downloads)
.. |docker_codingorf| image:: https://quay.io/repository/biocontainers/codingorf/status
   :target: https://quay.io/repository/biocontainers/codingorf
.. _`codingorf/tags`: https://quay.io/repository/biocontainers/codingorf?tab=tags


.. raw:: html

    <script>
        var package = "codingorf";
        var versions = ["1.0.0","v1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codingorf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codingorf/README.html
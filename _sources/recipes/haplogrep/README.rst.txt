:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplogrep'
.. highlight: bash

haplogrep
=========

.. conda:recipe:: haplogrep
   :replaces_section_title:
   :noindex:

   A tool for mtDNA haplogroup classification.

   :homepage: https://haplogrep.i-med.ac.at
   :documentation: https://github.com/seppinho/haplogrep-cmd
   
   :developer docs: https://github.com/seppinho/haplogrep-cmd
   :license: MIT
   :recipe: /`haplogrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw233`

   


.. conda:package:: haplogrep

   |downloads_haplogrep| |docker_haplogrep|

   :versions:
      
      

      ``2.4.0-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haplogrep

   and update with::

      conda update haplogrep

   or use the docker container::

      docker pull quay.io/biocontainers/haplogrep:<tag>

   (see `haplogrep/tags`_ for valid values for ``<tag>``)


.. |downloads_haplogrep| image:: https://img.shields.io/conda/dn/bioconda/haplogrep.svg?style=flat
   :target: https://anaconda.org/bioconda/haplogrep
   :alt:   (downloads)
.. |docker_haplogrep| image:: https://quay.io/repository/biocontainers/haplogrep/status
   :target: https://quay.io/repository/biocontainers/haplogrep
.. _`haplogrep/tags`: https://quay.io/repository/biocontainers/haplogrep?tab=tags


.. raw:: html

    <script>
        var package = "haplogrep";
        var versions = ["2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplogrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplogrep/README.html
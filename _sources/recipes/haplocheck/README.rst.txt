:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplocheck'
.. highlight: bash

haplocheck
==========

.. conda:recipe:: haplocheck
   :replaces_section_title:
   :noindex:

   Detects in\-sample contamination in mtDNA or WGS sequencing studies by analyzing the mitchondrial content.

   :homepage: https://github.com/genepi/haplocheck
   :license: MIT
   :recipe: /`haplocheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.256545.119`

   


.. conda:package:: haplocheck

   |downloads_haplocheck| |docker_haplocheck|

   :versions:
      
      

      ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haplocheck

   and update with::

      conda update haplocheck

   or use the docker container::

      docker pull quay.io/biocontainers/haplocheck:<tag>

   (see `haplocheck/tags`_ for valid values for ``<tag>``)


.. |downloads_haplocheck| image:: https://img.shields.io/conda/dn/bioconda/haplocheck.svg?style=flat
   :target: https://anaconda.org/bioconda/haplocheck
   :alt:   (downloads)
.. |docker_haplocheck| image:: https://quay.io/repository/biocontainers/haplocheck/status
   :target: https://quay.io/repository/biocontainers/haplocheck
.. _`haplocheck/tags`: https://quay.io/repository/biocontainers/haplocheck?tab=tags


.. raw:: html

    <script>
        var package = "haplocheck";
        var versions = ["1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplocheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplocheck/README.html
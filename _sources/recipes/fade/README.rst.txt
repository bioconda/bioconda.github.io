:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fade'
.. highlight: bash

fade
====

.. conda:recipe:: fade
   :replaces_section_title:
   :noindex:

   fade is a D program that provides fast identification and removal of enzymatic fragmentation artifacts.

   :homepage: https://github.com/blachlylab/fade
   :license: MIT
   :recipe: /`fade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fade/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaa070`

   


.. conda:package:: fade

   |downloads_fade| |docker_fade|

   :versions:
      
      

      ``0.3.6-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fade

   and update with::

      conda update fade

   or use the docker container::

      docker pull quay.io/biocontainers/fade:<tag>

   (see `fade/tags`_ for valid values for ``<tag>``)


.. |downloads_fade| image:: https://img.shields.io/conda/dn/bioconda/fade.svg?style=flat
   :target: https://anaconda.org/bioconda/fade
   :alt:   (downloads)
.. |docker_fade| image:: https://quay.io/repository/biocontainers/fade/status
   :target: https://quay.io/repository/biocontainers/fade
.. _`fade/tags`: https://quay.io/repository/biocontainers/fade?tab=tags


.. raw:: html

    <script>
        var package = "fade";
        var versions = ["0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fade/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandora'
.. highlight: bash

pandora
=======

.. conda:recipe:: pandora
   :replaces_section_title:
   :noindex:

   Pan\-genome inference and genotyping with long noisy or short accurate reads

   :homepage: https://github.com/rmcolq/pandora
   :license: MIT
   :recipe: /`pandora <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandora>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandora/meta.yaml>`_

   


.. conda:package:: pandora

   |downloads_pandora| |docker_pandora|

   :versions:
      
      

      ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pandora

   and update with::

      conda update pandora

   or use the docker container::

      docker pull quay.io/biocontainers/pandora:<tag>

   (see `pandora/tags`_ for valid values for ``<tag>``)


.. |downloads_pandora| image:: https://img.shields.io/conda/dn/bioconda/pandora.svg?style=flat
   :target: https://anaconda.org/bioconda/pandora
   :alt:   (downloads)
.. |docker_pandora| image:: https://quay.io/repository/biocontainers/pandora/status
   :target: https://quay.io/repository/biocontainers/pandora
.. _`pandora/tags`: https://quay.io/repository/biocontainers/pandora?tab=tags


.. raw:: html

    <script>
        var package = "pandora";
        var versions = ["0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandora/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandora/README.html
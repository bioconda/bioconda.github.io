:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cstag'
.. highlight: bash

cstag
=====

.. conda:recipe:: cstag
   :replaces_section_title:
   :noindex:

   Python module to manipulate the minimap2\'s CS tag

   :homepage: https://github.com/akikuno/cstag
   :documentation: https://akikuno.github.io/cstag/cstag/
   
   :license: MIT
   :recipe: /`cstag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag/meta.yaml>`_

   


.. conda:package:: cstag

   |downloads_cstag| |docker_cstag|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cstag

   and update with::

      conda update cstag

   or use the docker container::

      docker pull quay.io/biocontainers/cstag:<tag>

   (see `cstag/tags`_ for valid values for ``<tag>``)


.. |downloads_cstag| image:: https://img.shields.io/conda/dn/bioconda/cstag.svg?style=flat
   :target: https://anaconda.org/bioconda/cstag
   :alt:   (downloads)
.. |docker_cstag| image:: https://quay.io/repository/biocontainers/cstag/status
   :target: https://quay.io/repository/biocontainers/cstag
.. _`cstag/tags`: https://quay.io/repository/biocontainers/cstag?tab=tags


.. raw:: html

    <script>
        var package = "cstag";
        var versions = ["0.3.1","0.2.3","0.2.2","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cstag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cstag/README.html